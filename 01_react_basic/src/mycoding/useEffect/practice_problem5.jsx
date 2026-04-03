// Track State Change
// Create a counter.
// When the count changes, console should log:
// Count changed to: X
// Requirements
// State:
// const [count, setCount] = useState(0)
// useEffect should run only when count changes

import { useEffect, useState } from "react"

const Practice_problem5 = () => {
    const [ count , setCount] = useState(0)
    useEffect( ()=>{
        console.log("count changed to : " , count);

        
    }, [count])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count + 1 )}}>change count </button>

    </div>
  )
}

export default Practice_problem5