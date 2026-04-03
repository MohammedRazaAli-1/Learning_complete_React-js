import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Login15 = () => {
    let [username , setUsername] = useState("")
    let [password , setPassword] = useState("")
    let mynavigate = useNavigate()
    let HandleLogin = () => {
        if(username == "raza" && password =="1234"){
            localStorage.setItem("user" , username)

            alert("Logged in successfully ")
            mynavigate("/homePage")

        }else {
            alert("Enter valid username or password ")
        }
    }
  return (
    <div>
        <h1>Wlecome user please log in </h1>
        <input type="text" placeholder="jhon doe" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" name="password" placeholder='*****' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={HandleLogin}>Log in </button>

        
    </div>
  )
}

export default Login15