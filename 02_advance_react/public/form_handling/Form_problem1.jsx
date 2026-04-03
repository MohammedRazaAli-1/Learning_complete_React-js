// Your First Forms Practice Problem
// Create a component with:
// [input field]
// Hello, Raza
// Rules:
// User types name
// The text below updates live
// Example:
// Type: Ali
// Output:
// Hello, Ali
// Hint
// You will need:
// useState
// value
// onChange
// e.target.value



import React, { useState } from 'react'

const Form_problem1 = () => {
  const [ input , setInput] = useState("Raza")
  return (
    <div>
<input type="text"
value={input}
onChange={e => setInput(e.target.value)}
 />

 <h1> Hello , {input}</h1>
    </div>

    
  )
}

export default Form_problem1