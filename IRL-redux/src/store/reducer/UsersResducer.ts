import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { asyncGetUsers } from "../actions/usersAction";

const initialState = {
  users: [],
};

const usersReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
    //  @ts-ignore
    getUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});
export const { getUsers } = usersReducer.actions;

export default usersReducer.reducer;
