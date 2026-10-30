import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../../Slice/authSlice'
import "./Navbar.css"

const Navbar = ({openCart}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const email = useSelector((state)=>state.auth.user)
  const items = useSelector((state)=>state.cart.items)
  // items = [10,20,30]->reduce
  const cartCount = items.reduce((total,x)=>total+x.qty,0)
  const handleLogout = ()=>{
    dispatch(logout())
    navigate("/")
  }
  return (
    <div className='Navbar'>
        <NavLink to="/" className='Logo'>Ecom Shop</NavLink>
        <div className='navLink d-flex'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='category/mens'>Mens</NavLink>
          <NavLink to='category/jewelery'>Jewllery</NavLink>
          <NavLink to='category/electronics'>Electronics</NavLink>
          <NavLink to='category/womens'>Womens</NavLink>
          <Link to="/checkout"></Link>
        </div>
        <div className='navRight'>
          <div className='placeHolder'></div>
          <span className='userEmail'>{email}</span>
          <button className='cartBtn' onClick={openCart} aria-label={`Open cart,$`}>Cart <span className='cartCount'>
            {cartCount}</span></button>
          <button onClick={handleLogout} className='logoutBtn'>Logout</button>
        </div>
    </div>
  )
}

export default Navbar