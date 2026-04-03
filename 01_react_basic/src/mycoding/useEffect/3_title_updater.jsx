import { useState } from "react"

const Title_updater = () => {
    let [count , setCount] = useState(0);    
       document.title=count
    
    let titlechangfunction = () =>{
        setCount(count + 1 )
    }
    
  return (
    <div>
        <button onClick={titlechangfunction}>change</button>
    </div>
  )
}

export default Title_updater