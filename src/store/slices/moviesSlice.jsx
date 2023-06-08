import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmRlMmI0YzIxMmUxZTQwZmQ0MjA3NDQ4ZjM2MzhlYyIsInN1YiI6IjY0NmY2NzRkZTIyZDI4MTZhZGY3YjVhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x7AqcjZYxomIS_sC7Hqvq9hiJF4asIvnwJCIBnxRgv8'
    }
};

export const fetchMovies = createAsyncThunk("fetchMovies", async (page) => {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`, options)
    return response.data
})

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        data: null,
        loading: false,
        error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.data = action.payload.results
            state.loading = false
        });
        builder.addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error Fetching Movies Data"
        })
    }
})


export const moviesReducer = moviesSlice.reducer