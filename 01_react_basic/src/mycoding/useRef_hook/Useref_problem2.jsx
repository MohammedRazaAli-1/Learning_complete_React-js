// Practice Problem 1 (Simple)
// Create a component
// When a button is clicked, focus an input field automatically.
// Example:
// [ input field ]
// [ Focus Button ]
// Clicking the button should move the cursor into the input.
// Hint:
// const inputRef = useRef()
// inputRef.current.focus()


import React, { useRef } from 'react'

const Useref_problem2 = () => {

  const inputRef = useRef(null)

  const handleFocus = () => {
    inputRef.current.focus()
  }

  return (
    <div>

      <input
        type="text"
        ref={inputRef}
      />

      <button onClick={handleFocus}>
        Focus Input
      </button>

    </div>
  )

}

export default Useref_problem2