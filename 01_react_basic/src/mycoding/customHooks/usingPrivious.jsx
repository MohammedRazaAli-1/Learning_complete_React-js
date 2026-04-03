import { useState } from "react"
import usePrevious from "./usePrevious"

const UsingPrevious = () => {

  const [value, setValue] = useState(0)
  const previous = usePrevious(value)

  return (
    <div>

      <h1>Current: {value}</h1>
      <h2>Previous: {previous}</h2>

      <button onClick={() => setValue(value + 1)}>
        Increase
      </button>

    </div>
  )
}

export default UsingPrevious