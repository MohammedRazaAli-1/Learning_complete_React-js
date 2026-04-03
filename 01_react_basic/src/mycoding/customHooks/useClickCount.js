// One More Practice Problem (Important)
// Create a custom hook:
// useClickCount()
// Goal:
// Track how many times the user clicks anywhere on the page.
// Expected Behavior
// Clicks: 0
// Clicks: 1
// Clicks: 2
// Clicks: 3
// Requirements
// Use:
// useEffect
// useState
// window.addEventListener("click")
// cleanup function
// Example Usage
// const clicks = useClickCount()
// return <h1>Total Clicks: {clicks}</h1>

import { useEffect, useState } from "react";


export default function useClickCount() {
    const [ count , setCount] = useState(0)

    useEffect( ()=>{
        let isClicked = () =>{
            setCount(prev => prev + 1 )
        }
        window.addEventListener('click' , isClicked );

        return () => window.removeEventListener('click' , isClicked)

    } , [count])
    return (count)
  
}
