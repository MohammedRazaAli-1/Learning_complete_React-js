
import {useNavigate } from 'react-router-dom'




const Login14 = () => {
   

    let mynavigate = useNavigate()
    let HandleLogin = () =>{
        
            alert("login successfull ")
            mynavigate("/dashboard")
         }
        
        
    
  return (
    <div>
        <h1>welcome user |</h1>
        <h1>Login </h1>
        <button onClick={HandleLogin}> Login</button>
    </div>
  )
}

export default Login14