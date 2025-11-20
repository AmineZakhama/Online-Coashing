import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const doctorsAdapter = createEntityAdapter({})

const initialState = doctorsAdapter.getInitialState()

export const doctorsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getDoctors: builder.query({
            query: () => '/doctors',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor: 5,
            transformResponse: responseData => {
                const loadedDoctors = responseData.map(doctor => {
                    doctor.id = doctor._id
                    return doctor
                });
                return doctorsAdapter.setAll(initialState, loadedDoctors)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Doctor', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Doctor', id }))
                    ]
                } else return [{ type: 'Doctor', id: 'LIST' }]
            }
        }),
    }),
})

export const {
    useGetDoctorsQuery,
} = doctorsApiSlice

// returns the query result object
export const selectDoctorsResult = doctorsApiSlice.endpoints.getDoctors.select()


// creates memoized selector
const selectDoctorsData = createSelector(
    selectDoctorsResult,
    doctorsResult => doctorsResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllDoctors,
    selectById: selectDoctorById,
    selectIds: selectDoctorrIds,
    
    // Pass in a selector that returns the doctors slice of state
} = doctorsAdapter.getSelectors(state => selectDoctorsData(state) ?? initialState)