import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const employesAdapter = createEntityAdapter({})

const initialState = employesAdapter.getInitialState()

export const employesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getEmployes: builder.query({
            query: () => '/employes',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor: 5,
            transformResponse: responseData => {
                const loadedEmployes = responseData.map(employee => {
                    employee.id = employee._id
                    return employee
                });
                return employesAdapter.setAll(initialState, loadedEmployes)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Employee', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Employee', id }))
                    ]
                } else return [{ type: 'Employee', id: 'LIST' }]
            }
        }),
    }),
})

export const {
    useGetEmployesQuery,
} = employesApiSlice

// returns the query result object
export const selectEmployesResult = employesApiSlice.endpoints.getEmployes.select()


// creates memoized selector
const selectEmployesData = createSelector(
    selectEmployesResult,
    employesResult => employesResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllEmployes,
    selectById: selectEmployeeById,
    selectIds: selectEmployeerIds,
    
    // Pass in a selector that returns the employes slice of state
} = employesAdapter.getSelectors(state => selectEmployesData(state) ?? initialState)