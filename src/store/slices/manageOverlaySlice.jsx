import { createSlice } from '@reduxjs/toolkit'




const manageOverlaySlice = createSlice({
    name: 'manageOverlay',
    initialState: {
        manageOverlay: false,
        movieID: ''
    },
    reducers: {
        openOverlay: (state, action) => {
            state.movieID = action.payload
            state.manageOverlay = !state.manageOverlay
        },
        closeOverlay: (state, action) => {
            state.manageOverlay = !state.manageOverlay
            state.movieID = ''
        }
    }
})

export const { openOverlay, closeOverlay } = manageOverlaySlice.actions
export const manageOverlayReducer = manageOverlaySlice.reducer