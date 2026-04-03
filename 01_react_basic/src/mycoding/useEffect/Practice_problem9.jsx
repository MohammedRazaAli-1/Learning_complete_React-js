// Window Resize Listener (Real World)
// Track window width.
// Example:
// Window width: 1280
// Window width: 900
// Requirements
// Use:
// window.addEventListener("resize", ...)
// Update state when width changes.
// Cleanup listener using useEffect.

import { useEffect, useState } from "react"


const Practice_problem9 = () => {
    let [size , setSize] = useState(0)
    
    
        
    
    useEffect(()=>{
        let myevent = () =>{  setSize(window.innerWidth) }
        window.addEventListener("resize" , myevent)

       return ()=>{window.removeEventListener( "resize" , myevent)}

        
    } , [])
  return (
    <div>
        <h1>windows width : {size}</h1>
    </div>
    
  )
}

export default Practice_problem9