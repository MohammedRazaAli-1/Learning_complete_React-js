// Next Practice (Very Important)
// Now let's move to multiple inputs, because real forms have many fields.
// Create a form with:
// Name input
// Age input
// UI:
// Name: [input]
// Age:  [input]
// Output:
// Name: Raza
// Age: 21
// Rules:
// Both inputs must be controlled
// Typing should update the output instantly.

import { useState } from "react"



const Form_problem2 = () => {
    let [name , setName] = useState("")
    let [age , setAge] = useState("")
  return (
    <div>
        <h1>Enter Name : <input type="text" value={name} onChange={e => setName(e.target.value)} /></h1>
        <h1>Enter Age : <input type="text" value={age} onChange={e => setAge(e.target.value)}/></h1>

        <hr />
        <h2>Your Name : {name}</h2>
        <h2>Your Age : {age}</h2>
    </div>
  )
}

export default Form_problem2