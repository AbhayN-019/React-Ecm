import { useState } from "react"
import axios from 'axios'
import './login.css'
import { useNavigate } from "react-router-dom"

const Login = () =>{
    const[username,setUsername] = useState('')
    const[password,setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async(e)  =>{
        e.preventDefault()
        try{
            const res = await axios.post('https://fakestoreapi.com/auth/login',{username,password})
            console.log(res.data)
            alert('Login Successful')
            localStorage.setItem('token',res.data.token)
            navigate('/')
        }
        catch(err){
            console.error(err)
            alert('Login Failed')
        }
    }
    
    return(
        <div className="login-container">
      <div className="login-box">
        <h1>Welcome to Login Page</h1>

        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    )
}
export default Login