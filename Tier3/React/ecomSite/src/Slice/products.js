import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";


export const fetchProds = createAsyncThunk("products/fetchProds",async()=>{
    const res = await fetch("https://fakestoreapi.com/products")
    if(!res.ok){
        throw Error("Failed to get Products")
    }
    return await res.json()
})
export const prodSlice = createSlice({
        name:"products",
        initialState:{
            prods:[],
            loading:false,
            error:null
        },
        reducers:{},
        extraReducers:(builder)=>{
            builder.addCase(fetchProds.pending,(state)=>{
                state.loading=true
                state.error=null
            })
            .addCase(fetchProds.fulfilled,(state,action)=>{
                state.loading=false
                state.prods=action.payload
                state.error=null
            })
            .addCase(fetchProds.rejected,(state,action)=>{
                state.loading=false
                state.error = action.error.message
            })
        }
        
})

export default prodSlice.reducer