// Practice Problem 6
// Create a counter with:
// Initial value: 0
// Three buttons:
// ➕ Increase
// ➖ Decrease
// 🔄 Reset
// Rules:
// Count should never go below 0.
// If count becomes 10 → show message:
// Maximum limit reached!


import {useState} from "react"


const Problem5 = () => {
let [counter , setCounter] = useState(0);
let increase = () =>{ if(counter < 10 ) {setCounter(counter +1 )}}
let decrease = () =>{ if(counter > 0){setCounter(counter - 1 )} }
let reset = () =>{setCounter(0)}

  return (
    <div>
        <h1>
            {counter}
            {counter === 10 && <p>Maximum limit reached </p>}
             <button onClick ={increase}> increase [+]</button>
            <button onClick ={decrease}>decrease [-] </button>
            <button onClick ={reset}>reset [0]</button>
        </h1>
    </div>
  )
}

export default Problem5