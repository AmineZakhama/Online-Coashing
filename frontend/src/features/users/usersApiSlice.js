import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const usersAdapter = createEntityAdapter({})

const initialState = usersAdapter.getInitialState()

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder =>({
        getUsers: builder.query({
            query:()=> '/clients',
            validateStatus:(response, result)=>{
                return response.status === 200 && !result.isError
            },
            transformResponse: responseData =>{
                const loadedUsers = responseData.map(user =>{
                    user.id = user._id
                    return user
                });
                return usersAdapter.setAll(initialState, loadedUsers)
            },
            providesTags: (result, error, arg)=>{
                if (result?.ids) {
                    return[
                        { type:'User',id:'LIST'},
                        ...result.ids.map(id => ({type:'User',id}))
                    ]
                } else return [{type:'User', id:'LIST'}]
            }
        }),
        getUser: builder.query({
            query: id => `/clients/${id}`,
            transformResponse: responseData => {
                responseData.id = responseData._id;
                return responseData;
            },
            providesTags: (result, error, id) => [{ type: 'User', id }]
        }),
        addNewUser: builder.mutation({
            query: initialUserData => ({
                url: '/clients',
                method: 'POST',
                body: initialUserData
            }),
            invalidatesTags: [{ type: 'User', id: 'LIST' }]
        }),
        loginUser: builder.mutation({
            query: credentials => ({
                url: '/login',
                method: 'POST',
                body: credentials
            }),
            onError: (error, variables, context) => {
                console.error('Error logging in:', error);
            }
        }),
        updateUser: builder.mutation({
            query: initialUserData => ({
                url: `/clients/${initialUserData.id}`,
                method: 'PATCH',
                body: initialUserData,
                
            }),
            invalidatesTags:(result, error, arg) => [
                {type: 'User', id:arg.id }
            ]
        }),
        deleteUser: builder.mutation({
            query: ({ id }) => ({
                url: `/clients/${id}`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'User', id: arg.id}
            ]
        }),
    }),
})


export const {
    useGetUsersQuery,
    useGetUserQuery,
    useAddNewUserMutation,
    useLoginUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
} = usersApiSlice

// returns the query result object
export const selectUsersResult = usersApiSlice.endpoints.getUsers.select()

// creates memoized selector
const selectUsersData = createSelector(
    selectUsersResult,
    usersResult => usersResult.data // normalized state object with ids & entities
)

// getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllUsers,
    selectById: selectUserById,
    selectIds: selectUserIds
    // Pass in a selector that returns the suers slice of state
} = usersAdapter.getSelectors(state => selectUsersData(state) ?? initialState)