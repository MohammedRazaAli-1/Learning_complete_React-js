// One More Simple useRef Practice
// Create a component where:
// [input field]
// [Show Length]
// When clicking Show Length, display:
// Length: X
// Rules:
// Use useRef
// Do NOT use useState to track the input
// Read the value using:
// inputRef.current.value.length

import { useRef, useState } from "react"



const Useref_problem9 = () => {
    let myref = useRef(null)
    let [length , setLength]= useState(0)
    let showLength =() =>{
        setLength(myref.current.value.length)
        

    }


  return (
    <div>
        <h1>
            <input type="text"
            ref={myref}
             />
        </h1>
        <button onClick={showLength}>Show Length</button>
        <h1>length : {length}</h1>
    </div>
  )
}

export default Useref_problem9