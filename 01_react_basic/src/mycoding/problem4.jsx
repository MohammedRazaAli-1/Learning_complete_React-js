// Practice Problem 5
// Create a component:
// State:
// const [isLoggedIn, setIsLoggedIn] = useState(false)
// Show:
// If logged in → "Welcome Raza"
// If not → "Please Login"
// Add button:
// Button text should be:
// "Login" when logged out
// "Logout" when logged in
// Clicking button should toggle login state.

import {useState} from "react"
const Problem4 = () => {

const [login , setLogin] = useState(false)
// let  [ btnText , setBtnText] = useState(false)

let clickfunction = () =>{
if(!login){
    setLogin(true)
}else{ setLogin(false)

}

// if(!btnText){
//     setBtnText(true)
// }else{setBtnText(false)

// }
}

let userName = "Mohammad Raza .." 
  return (
    <div>
        {login ? <h1> welcome {userName}</h1> : <h1> Please Login</h1> }
        {login ? <button onClick={clickfunction}>Logout</button> : <button onClick={clickfunction}>Login</button>}
    </div>
  )
}
export default Problem4