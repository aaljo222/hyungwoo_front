import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/loginSlice";
import React from "react";
export default configureStore({
  reducer: {
    loginSlice: loginSlice,
  },
});
