import { useState } from "react"
import { useNavigate } from "react-router-dom"



const Login_1 = () => {
    let [username , setUsername ] = useState("")
    let [ password , setPassword ] = useState("")
    let mynavigate = useNavigate()
    let HandleLogin = ( ) =>{
        if(username ==="teacher" && password ==="1234"){
            localStorage.setItem("user" , username)
            alert("logged in successfully ")
            mynavigate("/teacher/dashboard")

        }
    }


   return (
    <div>
        <h1>Login </h1>
        <br />
        <p>Username : <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /></p>
<br />
        <p>password : <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></p>

        <br />
        <button onClick={HandleLogin}>Log in </button>
    </div>
  )
}

export default Login_1