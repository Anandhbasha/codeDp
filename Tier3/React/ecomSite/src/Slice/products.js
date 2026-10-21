import { createSlice } from "@reduxjs/toolkit";


const fetchProduct = async()=>{
    const res = await fetch("https://fakestoreapi.com/products")
    if(!res.ok){
        throw Error("Failed to get Products")
    }else{
        return await res.json()
    }
}
export const prodSlice = createSlice(
    {
        name:"products",
        initialState:{
            prods:fetchProduct()
        }
        
    }
)