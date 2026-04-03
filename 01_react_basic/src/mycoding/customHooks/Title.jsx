import useDocumentTitle from "./useDocumentTitle"

import { useState } from "react"
const Title = () => {
    const [mytitle , setMytitle] = useState("hello raza")
    useDocumentTitle(mytitle)

    
  return (
    <div>
        <input type="text"
        value={mytitle}
        onChange={(e) => setMytitle(e.target.value)} />
        <h1>{mytitle}</h1>

        

    </div>
  )
}

export default Title