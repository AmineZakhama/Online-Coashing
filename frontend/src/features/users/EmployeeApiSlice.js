import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const usersAdapter = createEntityAdapter({})

const initialState = usersAdapter.getInitialState()

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder =>({
        getUsers: builder.query({
            query:()=> '/employee',
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
        addNewUser: builder.mutation({
            query: initialUserData => {
                const formData = new formData();
                for (const key in initialUserData) {
                    if (key === 'file') {
                        formData.append(key, initialUserData[key]);
                    } else {
                        formData.append(key, JSON.stringify(initialUserData[key]));
                    }
                } 
                return{
                url: `/employee`,
                method: 'POST',
                body:formData
                };
            },
            invalidatesTags: [
                {type: 'User', id: "LIST"}
            ],
            onError: (error, variables, context) => {
                console.error('Error adding new user:', error);
            }
        }),
        updateUser: builder.mutation({
            query: initialUserData => ({
                url: `/employee`,
                method: 'PATCH',
                body: {
                    ...initialUserData,
                }
            }),
            invalidatesTags:(result, error, arg) => [
                {type: 'User', id:arg.id }
            ]
        }),
        deleteUser: builder.mutation({
            query: ({ id }) => ({
                url: `/employee`,
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
    useAddNewUserMutation,
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