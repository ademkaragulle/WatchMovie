import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmRlMmI0YzIxMmUxZTQwZmQ0MjA3NDQ4ZjM2MzhlYyIsInN1YiI6IjY0NmY2NzRkZTIyZDI4MTZhZGY3YjVhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x7AqcjZYxomIS_sC7Hqvq9hiJF4asIvnwJCIBnxRgv8'
    }
};

export const fetchMovieVideo = createAsyncThunk("fetchSeries", async (movieid) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`, options)
    return response.data
})

const movieVideoSlice = createSlice({
    name: 'fetchVideo',
    initialState: {
        data: [],
        loading: false,
        error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovieVideo.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(fetchMovieVideo.fulfilled, (state, action) => {
            state.data = action.payload.results[0].key
            state.loading = false
        });
        builder.addCase(fetchMovieVideo.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error Fetching Series Data"
        })
    }
})


export const MovieVideoReducer = movieVideoSlice.reducer