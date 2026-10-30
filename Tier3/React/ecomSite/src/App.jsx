import React, { useEffect, useState } from 'react'
import Login from './Login'
import "./App.css"
import { useDispatch, useSelector } from 'react-redux'
import Home from './Pages/Home/Home'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import { fetchProds } from './Slice/products'
import Category from './Pages/Category'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import CardSidebar from './Components/CardSidebar/CardSidebar'
import Checkout from './Pages/Checkout/Checkout'

const App = () => {
  const isLoggedin = useSelector((state)=>state.auth.isLoggedin)
  const dispatch = useDispatch()

  const [cartOpen,setCartOpen] = useState(false)
  useEffect(()=>{
    if(isLoggedin){
      dispatch(fetchProds())
    }
  },[isLoggedin,dispatch])
  if(!isLoggedin){
    return <Login/>
  }
  return (
    <BrowserRouter>
        <div className='App'>
          <Navbar openCart = {()=>setCartOpen(true)}/>
          <CardSidebar isOpen ={cartOpen} closeCart={()=>setCartOpen(false)} />
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/:category' element={<Category/>} />
        <Route path='/product/:id' element={<ProductDetails/>} />
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<Navigate to="/"replace/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App