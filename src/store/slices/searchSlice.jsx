import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmRlMmI0YzIxMmUxZTQwZmQ0MjA3NDQ4ZjM2MzhlYyIsInN1YiI6IjY0NmY2NzRkZTIyZDI4MTZhZGY3YjVhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x7AqcjZYxomIS_sC7Hqvq9hiJF4asIvnwJCIBnxRgv8'
    }
};

export const searchMovies = createAsyncThunk("searchMovies", async (movie) => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, options)
    return response.data
})

const moviesSlice = createSlice({
    name: 'search',
    initialState: {
        data: [],
        loading: false,
        error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(searchMovies.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(searchMovies.fulfilled, (state, action) => {
            state.data = action.payload.results
            state.loading = false
        });
        builder.addCase(searchMovies.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error Fetching Movies Data"
        })
    }
})


export const searchMoviesReducer = moviesSlice.reducer