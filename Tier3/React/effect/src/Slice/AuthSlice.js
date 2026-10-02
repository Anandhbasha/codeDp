import { createSlice } from "@reduxjs/toolkit";
import Login from "../Pages/Login/Login";

export const authSlice = createSlice({
    name:"auth",
    initialState:{
        isLoggedin:false,
        userName:null
    },
    reducers:{
        Login:(state,action)=>{state.isLoggedin=true;state.userName=action.payload},
        Logout:(state)=>{state.isLoggedin=false;state.userName=null}
    }
})

export const {Login,Logout} = authSlice.actions