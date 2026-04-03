// Create a simple Fruit Manager:
// Requirements:
// State:
// const [fruits, setFruits] = useState([])
// const [input, setInput] = useState("")
// Input field to type fruit name
// "Add Fruit" button:
// Adds fruit from input
// Clears input after adding
// Should not add empty string
// Should not add duplicate
// Each fruit should have:
// A delete button next to it
// Clicking delete removes that fruit

import { useState } from "react"

let Project8 = () =>{
let [input , setInput] = useState("")
let [myarr , setMyarr] = useState([])

let myfunc = () =>{
  if(!input.trim() == ""){
    setMyarr([...myarr , input])
    setInput("")
  }
}
  return(
<> 

<input
type="text"
value={input}
onChange={(e)=>setInput(e.target.value)}
/>
<h1>{input}</h1>
<button onClick={myfunc}>Add </button>
<ul>
  {myarr.map((value , index) =>(<li key={index}>{value}</li>))}
</ul>
</>
  )
}
export default Project8
