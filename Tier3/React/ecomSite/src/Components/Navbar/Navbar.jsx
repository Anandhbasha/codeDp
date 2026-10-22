import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <Link to='/'>Home</Link>
        <Link to='/mens'>Mens</Link>
        <Link to='/jewellery'>Jewllery</Link>
        <Link to='/electronics'>Electronics</Link>
        <Link to='/womens'>Womens</Link>
    </div>
  )
}

export default Navbar