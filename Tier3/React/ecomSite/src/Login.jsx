import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from './Slice/authSlice'
import "./Login.css" 
const Login = () => {
    const dispatch = useDispatch()
    const error = useSelector((state)=>state.auth.error)
    const handleLogin = (e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        dispatch(
            login({
                email:form.get("email"),
                password:form.get("pass"),
            })
        )
    }
  return (
    <div className='loginPage'>
        <div className='Login'>
            <form onSubmit={handleLogin} className='loginForm' autoComplete ="off">
                <h1>Login Form</h1>
                <div className='userName'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' placeholder='enter your email' name='email' required></input>
                </div>
                <div className='password'>
                    <label htmlFor='pass'>Password</label>
                    <input type='password' placeholder='enter your password' name='pass' required></input>
                </div>
                <button type='submit' className='loginBtn'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login