
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login_181 = () => {
    let mynavigate = useNavigate()
    let [username , setUsername] = useState("")
    let [password , setPassword] = useState("")

    let HandleLogin = () =>{
        if(username ==="admin" && password ==="1234"){
            localStorage.setItem("user" , username)
            alert("logged in sucessfully...")
            mynavigate("/dashboard")

        }
        else {
            alert("Envalid credintials.. ")
        }
    }
  return (
    <div>
        <h1>welcome </h1>

        <hr />
        <hr />
        <h2>Log in </h2>
        <p>enter your name : 
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </p>
        <p>enter your password : 
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
        </p>
        <button onClick={HandleLogin}>Log in </button>


    </div>
  )
}

export default Login_181