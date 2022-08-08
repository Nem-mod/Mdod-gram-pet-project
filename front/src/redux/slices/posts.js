import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const {data} = await axios.get('/posts');
    return data;
})

export const fetchPostCreate = createAsyncThunk('posts/fetchPosts', async (values) => {
    const {data} = await axios.post('/posts', values);
    return data;
})



const initialState = {
    posts: {
        items: [],
        status: "loading",
    }
}


const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
     
    },
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.posts.items = [];
            state.posts.status = "loading"
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.posts.items.push(action.payload);    
            state.posts.status = "loaded";
            console.log( state.posts.status);
        },  
        [fetchPosts.rejected]: (state) => {
            state.posts.items = [];
            state.posts.status = "error"
        },
        [fetchPostCreate.pending]: (state) => {
            state.posts.items = [];
            state.posts.status = "loading"
        },
        [fetchPostCreate.fulfilled]: (state, action) => {
            state.posts.items = action.payload;    
            state.posts.status = "loaded";
        },  
        [fetchPostCreate.rejected]: (state) => {
            state.posts.items = [];
            state.posts.status = "error"
        }
    
     }

});


export const postsReducer = postSlice.reducer;
