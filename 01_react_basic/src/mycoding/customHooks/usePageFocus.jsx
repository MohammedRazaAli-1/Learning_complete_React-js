// 🧩 Next Similar Practice (Slightly Harder)
// Create a custom hook:
// usePageFocus()
// Goal: detect if the browser tab is active or not.
// Example:
// Tab active → Focused
// Tab inactive → Not Focused
// Hint
// Use these browser events:
// window.addEventListener("focus")
// window.addEventListener("blur")
// Example usage
// const focused = usePageFocus()
// return <h1>{focused ? "Focused" : "Not Focused"}</h1>

import { useEffect, useState } from "react"

const UsePageFocus = () => {
    const [active , setActive] =useState(true);

    useEffect( ()=>{
        let checkActive = () =>{setActive(true)}
        let checkInactive = () =>{setActive(false)}

        window.addEventListener('focus' , checkActive )
        window.addEventListener('blur' , checkInactive)

        return () => { window.removeEventListener( 'focus',checkActive)
            window.removeEventListener('blur' , checkInactive)
        }
    } , [])
    return active
}
export default UsePageFocus 
