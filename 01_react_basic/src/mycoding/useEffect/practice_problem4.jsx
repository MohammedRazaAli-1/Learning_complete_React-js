// Run Effect Only Once (Component Mount)
// Create a component that prints in the console:
// Component mounted
// But it should run only once when the component loads.
// Requirements
// Use useEffect
// Dependency array must be []
// Expected behavior
// Page loads → "Component mounted"
// Button clicks → nothing

import React, { useEffect, useState } from 'react'

const Practice_problem4 = () => {
    let [ num , setNum ] = useState(0)
    useEffect( ()=>{
        console.log("Component mounted ...");
        
    } , [])
  return (
    <div>
        <h1>hello {num} </h1>
        <button onClick={()=>{console.log("nothing");
        setNum(prev => prev + 1 )
        }}>click</button>
    </div>
  )
}

export default Practice_problem4