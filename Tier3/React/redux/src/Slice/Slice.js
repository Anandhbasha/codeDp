import { createSlice } from "@reduxjs/toolkit";

// createSlice-> hook
//npm i @reduxjs/toolkit
export const countSlice = createSlice(
    {
        name:"Counting",
        initialState:{count:0},
        reducers:{
            Increment:(state,action)=>{state.count+=action.payload}
        }
    }
)

export const {Increment} = countSlice.actions
// const person  = {
    // name:"arun",
    // age:20
// }

// const {name} =person
