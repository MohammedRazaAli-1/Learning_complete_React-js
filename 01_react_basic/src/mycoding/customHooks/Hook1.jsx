
// Your Task
// Create a custom hook:
// useWindowWidth()
// Requirements:
// Use useState
// Use useEffect
// Track window.innerWidth
// Update when the window resizes
// Remove the event listener in cleanup
// Return the width

import useWindowWidth from "./useWindowWidth"

const Hook1 = () => {
    

    const mywidth = useWindowWidth()

  return (
    <div>
 <h1> width : {mywidth}</h1>
    </div>
  )
}

export default Hook1