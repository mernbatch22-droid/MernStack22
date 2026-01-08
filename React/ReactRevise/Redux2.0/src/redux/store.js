//step1 create the store 
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice.js"
import familyReducer from "../slice/familySlice.js"

export const store = configureStore({
    reducer: {
        user: userReducer,
        family: familyReducer
    }
});

