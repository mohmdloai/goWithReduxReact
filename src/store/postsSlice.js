import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const getAllPosts = createAsyncThunk("posts-action", async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
});

const PostsSlice = createSlice({
  name: "postsSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      //   console.log(action.payload);
      state.data = action.payload;
      state.isLoading = false;
    });

    builder.addCase(getAllPosts.pending, (state) => {
      state.isLoading = true;
    });
  },
});
export const postsReducer = PostsSlice.reducer;
// create AsyncThunk is a function that takes two arguments:
// a string that is the name of the action
// a function that returns a promise
// The function that returns a promise takes two arguments:
// the payload that was passed to the action creator
// a thunkAPI object that contains the dispatch and getState functions
// The function that returns a promise should return a promise that resolves to the payload of the action.
// The createAsyncThunk function returns an action creator that can be used with the createSlice function.
// The action creator takes a single argument, which is the payload of the action.
// The action creator returns a promise that resolves to the payload of the action.
// The createAsyncThunk function also generates action creators for the pending, fulfilled, and rejected states of the promise.
// These action creators are named using the pattern sliceName/actionName/pending, sliceName/actionName/fulfilled, and sliceName/actionName/rejected.
