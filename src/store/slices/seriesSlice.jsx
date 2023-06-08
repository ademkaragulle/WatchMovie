import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmRlMmI0YzIxMmUxZTQwZmQ0MjA3NDQ4ZjM2MzhlYyIsInN1YiI6IjY0NmY2NzRkZTIyZDI4MTZhZGY3YjVhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x7AqcjZYxomIS_sC7Hqvq9hiJF4asIvnwJCIBnxRgv8'
    }
};

export const fetchSeries = createAsyncThunk("fetchSeries", async (page) => {
    const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=${Number(page) + 12}`, options)
    return response.data
})

const seriesSlice = createSlice({
    name: 'series',
    initialState: {
        data: null,
        loading: false,
        error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSeries.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(fetchSeries.fulfilled, (state, action) => {
            state.data = action.payload.results
            state.loading = false
        });
        builder.addCase(fetchSeries.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error Fetching Series Data"
        })
    }
})


export const seriesReducer = seriesSlice.reducer