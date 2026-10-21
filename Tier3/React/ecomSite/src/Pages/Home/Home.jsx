import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const email = useSelector((state)=>state.auth.user)
    const prod = useSelector((state)=>state.products.prods)
    console.log(prod);
    
  return (
    <div className='Home'>
        <h1>Welcome ,{email}</h1>
    </div>
  )
}

export default Home