import { createSlice } from "@reduxjs/toolkit";
const initialState = { counter: 0 }; // for readability
// createSlice is a function that takes an object as an argument
// and returns an object with the following properties:
// name: the name of the slice
// initialState: the initial state of the slice
// reducers: an object containing the reducers for the slice
// extraReducers: an object containing extra reducers for the slice
// The createSlice function also generates action creators for each reducer.
// These action creators are named using the pattern sliceName/reducerName.
export const CounterSlice = createSlice({
  name: "counterHandler",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    }, // state is watching on all states
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

export const counterReducer = CounterSlice.reducer;
export const { increment, decrement } = CounterSlice.actions;
