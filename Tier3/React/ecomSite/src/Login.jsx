import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from './Slice/authSlice'

const Login = () => {
    const dispatch = useDispatch()
    const error = useSelector((state)=>state.auth.error)
    const handleLogin = (e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        dispatch(
            login({
                email:form.get("email"),
                pass:form.get("pass"),
            })
        )
    }
  return (
    <div className='Login'>
        <form onSubmit={handleLogin}>
            <label htmlFor='email'>Email</label>
            <input type='text' placeholder='enter your email' name='email' required></input>
            <label htmlFor='pass'>Password</label>
            <input type='password' placeholder='enter your password' name='pass' required></input>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login