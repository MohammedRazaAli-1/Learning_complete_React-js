// Problem: Create a usePrevious Custom Hook
// Goal:
// Create a custom hook that remembers the previous value of a state.
// Example behavior:
// Current: 5
// Previous: 4
// When the value changes, the hook should store the last value.
// Requirements
// Create a hook:
// usePrevious(value)
// It should return the previous value of the passed state.
// Example Usage
// import { useState } from "react"
// import usePrevious from "./usePrevious"
// const Example = () => {
//   const [count, setCount] = useState(0)
//   const prevCount = usePrevious(count)
//   return (
//     <div>
//       <h1>Current: {count}</h1>
//       <h2>Previous: {prevCount}</h2>
//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </div>
//   )
// }
// Expected Behavior
// Initial render:
// Current: 0
// Previous: undefined
// Click Increase:
// Current: 1
// Previous: 0
// Click again:
// Current: 2
// Previous: 1
// Hint
// You will need:
// useEffect
// useRef
// useRef will store the previous value.


import { useEffect, useRef } from "react"

const usePrevious = (value) => {

  const ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default usePrevious