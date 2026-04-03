// Two States, Two Effects
// Create two states:
// count
// text
// Requirements
// When count changes
// Count updated
// When text changes
// Text updated

import { useEffect, useState } from "react"


const Practice_problem6 = () => {
    let [cnt , setCnt] = useState(0);
    let [ text , setTaxt ] = useState("")

    useEffect(()=>{
        console.log("count updated ... ");
        
    }, [cnt])

    useEffect(()=>{
        console.log("text updated...");
        
    } , [text])
  return (
    <div> 
        <div id="count">
            <h1>{cnt}</h1>
            <button onClick={()=>{setCnt(cnt + 1 )}}>increase</button>
        </div>
        <div id="text">
            <h1>{text}</h1>
            <input type="text"
            value={text}
            onChange={(e) => {setTaxt(e.target.value)}} />

        </div>

    </div>
  )
}

export default Practice_problem6