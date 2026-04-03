import { useContext, useState } from "react"
import { createAuthContext } from "./createAuthContext"

const ViewAuth = () => {
    let [password , setPassword ] = useState("")
    let [logIn , setLogIn , username , setUsername] = useContext(createAuthContext)

    let handleForm = (e) =>{
        e.preventDefault()
        
        if(logIn === false && username != ""){
        setLogIn(true)
        }
        else{setLogIn(false)}
    }
    let handleAlert = () =>{
        alert( "your password is " + password )
    }
       
            return (  
            <div>
            {logIn ===false? <h1> hello guest , please Log in </h1> : <><h1> hello {username} , Welcome to website  </h1> <button onClick={handleAlert}>See Password </button> </>}

                    
            <form action="#" onSubmit={handleForm}>
             <input type="text" name="name" value={username} onChange={e => setUsername(e.target.value)} /> 
            <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
            {logIn === false ? <button>LogIn</button> : <button>Log-Out</button>}


        </form>
    </div>
  )
}

export default ViewAuth