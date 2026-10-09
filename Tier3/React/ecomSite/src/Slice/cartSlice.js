import { createSlice } from "@reduxjs/toolkit";
// quantity
// removefromcart
//clear cart
// add to cart

export const cartSlice = createSlice(
    {
        name:"cart",
        initialState:{
            items:[]
        },reducers:{
            addtoCart:(state,action) =>{
                const product = action.payload;

                const existing = state.items.find((x)=>x.id===product.id)
                if(existing){
                    existing.qty+=1
                }else{
                    state.items.push({
                        ...product,qty:1
                    })
                }
            },
            increaseqty:(state,action)=>{
                const item = state.items.find((item)=>item.id===action.payload)
                if(item){
                    item.qty+=1
                }
            },
            decreaseqty:(state,action)=>{
                const item = state.items.find((item)=>item.id===action.payload)
                if(item && item.qty >1){
                    item.qty-=1
                }
            },
            removeFromCart:(state,action)=>{
                state.items = state.items.filter((item)=>item.id!==action.payload)
            },
            clearCart:(state)=>{
                state.items = []
            }
        }
    }
)

export const {clearCart,removeFromCart,increaseqty,decreaseqty,addtoCart} = cartSlice.actions