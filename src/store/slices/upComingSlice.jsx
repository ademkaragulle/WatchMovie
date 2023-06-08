import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmRlMmI0YzIxMmUxZTQwZmQ0MjA3NDQ4ZjM2MzhlYyIsInN1YiI6IjY0NmY2NzRkZTIyZDI4MTZhZGY3YjVhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x7AqcjZYxomIS_sC7Hqvq9hiJF4asIvnwJCIBnxRgv8'
    }
};

export const fetchUpComingSlice = createAsyncThunk("upComing", async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`, options)
    return response.data
})

const upComingSlice = createSlice({
    name: 'upComing',
    initialState: {
        data: null,
        loading: false,
        error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUpComingSlice.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(fetchUpComingSlice.fulfilled, (state, action) => {
            state.data = action.payload.results
            state.loading = false
        });
        builder.addCase(fetchUpComingSlice.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error Fetching Movies Data"
        })
    }
})


export const upComingReducer = upComingSlice.reducer