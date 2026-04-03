
// Practice 3 — Timer
// Create a timer that increases every second.
// Example:
// Seconds: 0
// Seconds: 1
// Seconds: 2
// Seconds: 3
// Hint:
// setInterval()


import {useEffect, useState} from "react"
const Timer = () => {
const [num , setNum] = useState(0)
useEffect( ()=>{
  let myinterval = setInterval(()=>{
        setNum(prev => prev + 1  )
       
    } ,1000)
    return clearInterval(myinterval)
   
},[])
    

    


  return (
    <div>
        {num}

    </div>
  )
}

export default Timer