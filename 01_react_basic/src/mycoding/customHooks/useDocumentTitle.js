
// Very Similar Practice Problem
// Now create another custom hook:
// useDocumentTitle
// Goal: automatically update the browser tab title.
// Hook
// const useDocumentTitle(title)
// Usage
// useDocumentTitle("React Learning")
// Result → browser tab shows:
// React Learning
// Requirements
// Inside the hook:
// useEffect
// document.title = title

import { useState, useEffect } from "react"
const useDocumentTitle = (giveTitle) => {
    const [ title , setTitle] = useState("")

    useEffect( ()=>{ 
         setTitle(document.title=giveTitle)

    
    } , [giveTitle])
    return title

}

export default useDocumentTitle