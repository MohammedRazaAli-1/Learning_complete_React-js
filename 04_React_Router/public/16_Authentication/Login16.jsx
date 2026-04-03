import { useState } from "react"
import { useNavigate } from "react-router-dom";


const Login16 = () => {
    let [username , setUsername ] = useState("");
    let [password , setPassword ] = useState("");
    let mynavigate = useNavigate() 

    let HandleLogin = () =>{
        if(username == "admin" && password=="9322") {
            localStorage.setItem("admin" , JSON.stringify({username , password} ) )
            alert("logged in successfuly ")
            mynavigate("/dashboard")
            
        }else{
            alert("enter valid username and password ")
        }
    }

  return (
    <div>
        <h1>Log in </h1>

        <p>enter username : <input type="text"  value={username} onChange={(e) => setUsername(e.target.value)} /> </p>
        <br />
        <p>enter password : <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> </p>
        <br />
        <button onClick={HandleLogin}>Log in </button>
    </div>
  )
}

export default Login16