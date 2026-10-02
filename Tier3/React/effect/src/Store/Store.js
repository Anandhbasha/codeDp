import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../Slice/AuthSlice";

export const Store = configureStore({
    reducer:{
        auth:authSlice.reducer
    }
})