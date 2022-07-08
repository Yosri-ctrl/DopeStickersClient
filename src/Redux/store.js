import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reduxCart";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userSlice,
  },
});
