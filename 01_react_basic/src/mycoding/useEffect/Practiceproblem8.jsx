// Timer (Important Real Use Case)
// Create a timer that increases every second.
// Example output:
// 0
// 1
// 2
// 3
// 4
// Requirements
// Use setInterval
// Use useEffect
// Cleanup interval properly
// Hint cleanup:
// return () => clearInterval(interval)

import { useEffect, useState } from "react"

const Practiceproblem8 = () => {
    let [timer , settimer] = useState(0)
    useEffect( ()=>{
    let myint = setInterval(() => {
        settimer(timer + 1 )
    }, 1000);

    return ()=>{clearInterval(myint)}

}, [])
  return (
    <div>
        <h1>{timer}</h1>
    </div>
  )
}

export default Practiceproblem8