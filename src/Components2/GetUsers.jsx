import { useEffect, useState } from "react"
import axios from "axios"
import './getusers.css'
const Users = () =>{
    const[users,setUsers] = useState([])
    useEffect(()=>{
        const Gotusers = async() =>{
            try{
                const res = await axios.get('https://fakestoreapi.com/users')
                setUsers(res.data)
                console.table(res.data)
            }
            catch(err){
                console.error(err)
            }
        }
        Gotusers()
    },[])
    return(
        <div>
            <h1>Users Page:</h1>
            {users ? (<div className="card-box">
                {users.map((u)=>(
                    <div className="card">
                        <img src="https://cdn-icons-png.freepik.com/512/7718/7718888.png" alt="pic" className="usr-img"/>
                        <h2>{u.username}</h2>
                        <p>{u.email}</p>
                        <p>{u.password}</p>
                    </div>
                ))}
            </div>): (<p>Loading.....</p>)}
        </div>
    )
}
export default Users