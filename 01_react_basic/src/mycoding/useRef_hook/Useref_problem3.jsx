// Simple Practice for You
// Create a component:
// When clicking Clear Input, the input should:
// become empty
// get focus again
// Example UI:
// [input field]
// [Clear Input]
// Hint:
// inputRef.current.value = ""
// inputRef.current.focus()

import { useRef } from "react"


const Useref_problem3 = () => {
    const myref = useRef(null)
    const clickFunction = () =>{
        myref.current.focus()
        myref.current.value = ""

    }
  return (
    <div>
        <h1>
            <input type="text"
            ref={myref}
             />

            <button onClick={clickFunction}>clear</button>

        </h1>
    </div>
  )
}

export default Useref_problem3