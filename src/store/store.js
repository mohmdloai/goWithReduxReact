import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
export const store = configureStore({
  reducer: {
    key: counterReducer,
  }, // all states to be shared
});
