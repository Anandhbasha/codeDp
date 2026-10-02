// import { useEffect, useState } from "react"

// const App = ()=>{
//   const[count,setCount] = useState(0)
//   useEffect(()=>{
//     console.log("Welcome to useEffect");    
//   },[])
//   // while render this component it will work once automatically
//   return(
//     <div className="App">
//       <p>{count}</p>
//       <button onClick={()=>setCount((prev)=>++prev)}>Add</button>
//     </div>
//   )
// }
// export default App



// npm i react-router-dom

import React, { createContext, useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from './Pages/AllProducts/AllProducts'
import Mens from './Pages/Mens/Mens'
import Jewellery from './Pages/Jewellery/Jewellery'
import Electronics from './Pages/Electronics/Electronics'
import Womens from './Pages/Womens/Womens'
import axios from 'axios'
import CartSidebar from './Components/CartSidebar/CartSidebar'
import Product from './Pages/Product'

export const PassingValue = createContext()



const App = () => {
  const [count,setCount] = useState(0)
  const[products,setProducts] = useState([])
  const[displaycart,setDisplaycart] = useState("flex")
  const [cardProd,setCardProd] = useState([])
  useEffect(()=>{
    const fetchProduct = async()=>{
      try{
        const res = await axios.get("https://fakestoreapi.com/products")
        if(res){
            setProducts(await res.data)
        }
        else{
          throw Error("Unable to connect API ");
          
        }
      }
      catch(err){
        console.log(err);
        
      }
    }
    fetchProduct()
  },[])
  console.log(products);
  return (
    <BrowserRouter>
      <PassingValue.Provider value={{products,count,setCount,displaycart,setDisplaycart,setCardProd,cardProd}}>
          <div className='App' style={{marginBottom:"10vh"}}>
            <Navbar/>
            <div className='sidebar' style={{position:"fixed",top:"8vh",right:"0",height:"90vh",backgroundColor:"white",padding:"25px"}}>
              <CartSidebar/>
            </div>
          </div>

          <Routes>
            <Route path='/' element={<AllProducts/>}/>
            <Route path='/mens' element={<Mens/>}/>
            <Route path='/jewles' element={<Jewellery/>}/>
            <Route path='/electro' element={<Electronics/>}/>
            <Route path='/womens' element={<Womens/>}/>
            <Route path='/product/:id' element={<Product/>}/>
          </Routes>
      </PassingValue.Provider>
    </BrowserRouter>
  )
}

export default App