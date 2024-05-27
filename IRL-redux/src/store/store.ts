import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/ProductReducer";
import usersResducer from "./reducer/UsersResducer";
export const store = configureStore({
  reducer: {
    productReducer,
    usersResducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
