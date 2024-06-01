import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Feature/Userslice"
export const store=configureStore({
    reducer:{
        user:userSlice,
    }
})