import { configureStore } from '@reduxjs/toolkit'
import { moviesReducer } from './slices/moviesSlice'
import { seriesReducer } from './slices/seriesSlice'
import { upComingReducer } from './slices/upComingSlice'
import { MovieVideoReducer } from './slices/movieVideoSlice'
import { manageOverlayReducer } from './slices/manageOverlaySlice'
import { searchMoviesReducer } from './slices/searchSlice'

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        series: seriesReducer,
        upComing: upComingReducer,
        fetchVideo: MovieVideoReducer,
        manageOverlay: manageOverlayReducer,
        search: searchMoviesReducer,
    }
})