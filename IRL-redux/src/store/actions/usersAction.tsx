import axios from "axios";
import { getUsers } from "../reducer/UsersResducer";

export const asyncGetUsers = () => async (dispatch: any, getState: any) => {
  try {
    const respeonce = await axios.get("https://dummyjson.com/users");

    dispatch(getUsers(respeonce.data.users));
  } catch (error) {
    console.log(error);
  }
};
