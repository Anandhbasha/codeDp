import React, { useEffect, useState } from 'react'
import Login from './Login'
import "./App.css"
import { useDispatch, useSelector } from 'react-redux'
import Home from './Pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Mens from './Pages/Mens/Mens'
import Jewelery from './Pages/Jewelery/Jewelery'
import Electronics from './Pages/Electronics/Electronics'
import Womens from './Pages/Womens/Womens'
import { fetchProds } from './Slice/products'

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
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mens' element={<Mens/>}/>
        <Route path='/jewellery' element={<Jewelery/>}/>
        <Route path='/electronics' element={<Electronics/>}/>
        <Route path='/womens' element={<Womens/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App