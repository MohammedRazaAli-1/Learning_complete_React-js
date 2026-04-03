// Stop Double Click Timer
// Create a button:
// [Start Timer
// When clicked:
// start a timer that logs every second
// If clicked again:
// do not start a second timer
// You must store the timer ID in useRef.
// Hint
// const timerRef = useRef(null)

import { useEffect, useRef, useState } from "react"

const Useref_problem8 = () => {
    const [ timer , setTimer] = useState(0)
    const timerRef = useRef(null)
   

    


    function clickStart () {
        if (timerRef.current != null) return
        
        
        timerRef.current = setInterval( ()=>{
            setTimer ( timer  => timer + 1  );
        } , 1000)

        console.log(timerRef.current);
        
    }
    function clickStop () {
        clearInterval(timerRef.current)
        timerRef.current = null

       

    }
    function clickClear () {
        clickStop()
        setTimer(0)
    }
        


     

  return (
    <div>
       
        <h1>{timer}</h1>
      <button  onClick={clickStart} >Start Timer</button>
      <button  onClick={clickStop} >Start Timer</button>
      <button  onClick={clickClear} >Reset</button>
    </div>
  )}

  export default Useref_problem8
    