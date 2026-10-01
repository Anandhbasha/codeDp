import React, { useReducer, useState } from 'react'


// add to cart remove from cart increase qty decrease qty clear cart
const initialState = {
  cart:[],
  total:0
}

// cart =[prod,prod2,prod3]
// total=15000

const reducer = (state,action)=>{
  switch(action.x){
    case "AddtoCart":
      return{
        ...state,
        cart:[...state.cart,action.products],
        total:state.total + action.products.prodPrice
      }
    case "RemoveFromCart":
      return{
        ...state,
        cart:state.cart.filter(item=>item.id !== action.id),
        total:state.total - state.cart.find(item=>item.id === action.id).prodPrice
      }
    case "ClearCart":
      return{
        ...state,
        cart:[],
        total:0
      }
  }
}

// state.cart
// state.total
const App = () => {
  const[state,dispatch] = useReducer(reducer,initialState)
  const products = {
    id:1,
    prodName:'Iphone 14',
    prodPrice:75000
  }
  return (
    <div className='App'>
        <h1>Shoppin Cart</h1>
        <button onClick={()=>{dispatch({x:"AddtoCart",products:products})}}>Add IPhone</button>
        <h2>Total:{state.total}</h2>
        <h3>Cart Item:{state.cart.length}</h3>
        <button onClick= {()=>dispatch({x:"RemoveFromCart",id:1})}>Remove IPhone</button>
        <button onClick= {()=>dispatch({x:"ClearCart"})}>Clear Cart</button>
    </div>
  )
}

export default App