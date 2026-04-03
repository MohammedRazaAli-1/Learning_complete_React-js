// Problem 3 — Render Counter
// Track how many times the component has rendered.
// UI:
// Count: 3
// Renders: 5
// Rules:
// count changes using useState
// render count should be tracked using useRef
// Hint
// renderRef.current += 1

import { useEffect } from "react"
import { useRef, useState } from "react"

const Useref_problem7 = () => {
    const [ count , setCount ] = useState(0)
    const [ count1 , setCount1 ] = useState(0)
    const Track_render = useRef(0)
    useEffect( ()=>{
        Track_render.current += 1 
        console.log(Track_render);
        
    })
  return (
    <div>
        
        <h1>count : {count}</h1>
        <h1>count : {count1}</h1>
        
        <h1>render count : {Track_render.current}</h1>
        <button onClick={()=>{setCount(prev => prev + 1 )}}>Increase count </button>
        <button onClick={()=>{setCount1(prev => prev + 1 )}}>Increase count </button>

    </div>
  )
}

export default Useref_problem7