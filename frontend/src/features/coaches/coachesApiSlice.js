import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const coachesAdapter = createEntityAdapter({})

const initialState = coachesAdapter.getInitialState()

export const coachesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCoaches: builder.query({
            query: () => '/coaches',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor: 5,
            transformResponse: responseData => {
                const loadedCoaches = responseData.map(coach => {
                    coach.id = coach._id
                    return coach
                });
                return coachesAdapter.setAll(initialState, loadedCoaches)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Coach', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Coach', id }))
                    ]
                } else return [{ type: 'Coach', id: 'LIST' }]
            }
        }),
    }),
})

export const {
    useGetCoachesQuery,
} = coachesApiSlice

// returns the query result object
export const selectCoachesResult = coachesApiSlice.endpoints.getCoaches.select()


// creates memoized selector
const selectCoachesData = createSelector(
    selectCoachesResult,
    CoachesResult => CoachesResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllCoaches,
    selectById: selectCoachById,
    selectIds: selectCoachIds,
    
    // Pass in a selector that returns the coaches slice of state
} = coachesAdapter.getSelectors(state => selectCoachesData(state) ?? initialState)