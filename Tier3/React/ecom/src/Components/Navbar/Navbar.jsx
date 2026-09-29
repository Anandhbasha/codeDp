import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='Navbar'>
        <nav className='navLinks'>
          <Link to="/">Allproducts</Link>
          <Link to="/mens">Mens</Link>
          <Link to="/jewellery">Jewellery</Link>
          <Link to="/electronics">Electronics</Link>
          <Link to="/womens">Womens</Link>
        </nav>
    </div>
  )
}

export default Navbar