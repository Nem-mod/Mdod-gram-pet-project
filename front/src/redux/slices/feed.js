import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";




const initialState = {
    uploading: true
}


const feedSlice = createSlice({
    name: "feed",
    initialState,
    reducers: {
        feedUpdated: (state) => {
            state.uploading = false;
        },
        feedUpdating: (state) => {
            state.uploading = true;
        }
    },
    extraReducers: {
    }

});

export const feedReducer = feedSlice.reducer;