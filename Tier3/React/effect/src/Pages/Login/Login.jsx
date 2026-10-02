import { useState } from "react"
import { useDispatch } from "react-redux"
import { Login } from "../../Slice/AuthSlice"
import { useNavigate } from "react-router-dom"

const LoginPage = ()=>{
    const[userName,setUserName] = useState("")
    const[password,setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = ()=>{
        if(userName=="admin" && password=="pass"){
            dispatch(Login(userName));
            navigate("/")
        }else{
            alert("Invalid userName or Password")
        }
    }
    return(
        <div className="Login">
            <label htmlFor="userName">UserName:</label>
            <input type="text" placeholder="Enter your userName" onChange={(e)=>setUserName(e.target.value)} required id="userName"></input>
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder="Enter your Password" required id="password" onChange={(e)=>setPassword(e.target.value)}></input>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
export default LoginPage