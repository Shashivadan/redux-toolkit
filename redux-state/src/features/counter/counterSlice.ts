import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../../store/store";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementByAsyc = () => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(increment());
  }, 2000);
};

export default counterSlice.reducer;
