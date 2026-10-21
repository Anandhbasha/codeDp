import React from 'react'
import Login from './Login'
import "./App.css"
import { useSelector } from 'react-redux'
import Home from './Pages/Home/Home'

const App = () => {
  const isLoggedin = useSelector((state)=>state.auth.isLoggedin)
  return (
    <div className='App'>
      {isLoggedin ?<Home/>:<Login/>}
    </div>
  )
}

export default App