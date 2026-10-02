import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { PassingValue } from '../../App'

const Navbar = () => {
  const {count,setDisplaycart} = useContext(PassingValue)
  return (
    <div className='Navbar'>
        <Link to="/">All</Link>
        <Link to="mens">Mens</Link>
        <Link to="jewles">Jewellery</Link>
        <Link to="electro">Electronics</Link>
        <Link to="womens">Womens</Link>
        <h3 onClick={()=>setDisplaycart("flex")}><i class="fa-solid fa-cart-plus"></i>{count}</h3>
    </div>
  )
}

export default Navbar