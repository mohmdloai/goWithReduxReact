import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { postsReducer } from "./postsSlice";
export const store = configureStore({
  reducer: {
    key: counterReducer,
    posts: postsReducer,
  }, // all states to be shared
});
