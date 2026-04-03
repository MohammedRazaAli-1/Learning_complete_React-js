import { useContext } from "react"
import { CreateContext } from "./CreateContext"


const DisplayThemeLogic = () => {
    let [Theme , setTheme]  = useContext(CreateContext)
    
    let handleToggle = () =>{
        setTheme(prev => prev==="light" ? "dark" : "light")

    }
   
  return (
    <div>
        <h1> theme is : {Theme}</h1>
        <button onClick={handleToggle}>Change Theme</button>
    </div>
  )
}

export default DisplayThemeLogic