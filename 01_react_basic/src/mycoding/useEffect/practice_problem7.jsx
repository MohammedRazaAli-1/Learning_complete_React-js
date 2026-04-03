import { useEffect, useState } from "react"
const Practice_problem7 = () => {
    let [writeText , setWriteText] = useState("")
    let [displayText , setDisplayText] =useState("")
    let displayfunction = () =>{
        if(writeText.trim() !== "") {
        setDisplayText(writeText);
        setWriteText("")
        }
    }
    
    useEffect( ()=>{
        document.title =displayText
        console.log("title changed ...");
        
    }, [displayText])

  return (
    <div>
        <input type="text"
        value={writeText}
        onChange={(e) =>{setWriteText(e.target.value)}} />

        <h1>{displayText}</h1>
        <button onClick={displayfunction}> [Add text] </button>

    </div>
  )
}

export default Practice_problem7