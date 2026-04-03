// Auto Select Input Text
// Create an input with some default text
// UI:
// [Hello Raza]
// [Select Text Button]
// When clicking Select Text Button, the entire text inside the input should be selected.
// Hint
// inputRef.current.select()

import { useRef } from "react"



const Useref_problem6 = () => {
    const textRef = useRef(null)

    let select_text_function = () =>{
        textRef.current.select()
    }

  return (
    <div>
        <input type="text"
        value={"hello raza"}
        ref={textRef} />

        <button onClick={select_text_function}>Select Text</button>
    </div>

    
  )
}

export default Useref_problem6