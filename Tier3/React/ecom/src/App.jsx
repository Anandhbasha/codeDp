import React, { createContext, useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import All from './Pages/All/All'
import Mens from './Pages/Mens/Mens'
import Electronics from './Pages/Electronics/Electronics'
import Jewellery from './Pages/Jewellery/Jewellery'
import Womens from './Pages/Womens/Womens'
import "./App.css"

export const PassingValue = createContext()
const App = () => {
  const[product,setProduct] = useState([])
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const res = await fetch("https://dummyjson.com/products")
        if(!res.ok){
          throw Error ("Unable to get Product")
        }
        else{
          const prod = await res.json()
          const data = Object.values(prod)
          console.log(data);
          
          const allProducts = data[0]          
          setProduct(allProducts)
        }
      } catch (error) {
        
      }
    }
    fetchData()
  },[])
  return (
    <BrowserRouter>
      <PassingValue.Provider value={{product}}>
        <div className='App'>
          <Navbar />
        </div>
        <div className='Pages'>
          <Routes>
            <Route path='/' element={<All/>} />
            <Route path='/mens' element={<Mens/>} />
            <Route path='/electronics' element={<Electronics/>} />
            <Route path='/jewellery' element={<Jewellery/>} />
            <Route path='/womens' element={<Womens/>} />
          </Routes>
        </div>
      </PassingValue.Provider>
    </BrowserRouter>
  )
}

export default App