// Next Practice (Very Useful)
// Create a stopwatch.
// Example:
// 0
// 1
// 2
// 3
// Buttons:
// Start
// Stop
// Reset
// Rules:
// useRef should store the interval
// useState should store the time
// Hint:
// const intervalRef = useRef(null)

import { useRef, useState } from "react"


const Useref_problem4 = () => {

  const [time, setTime] = useState(0)
  const intervalRef = useRef(null)

  const start = () => {
    if (intervalRef.current !== null) {return}
    else {
    intervalRef.current = setInterval(() => {
      setTime(prev => prev + 1)
    }, 1000)}
  }

  const stop = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  const reset = () => {
    stop()
    setTime(0)
  }

  return (
    <div>

      <h1>{time}</h1>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>

    </div>
  )
}

export default Useref_problem4