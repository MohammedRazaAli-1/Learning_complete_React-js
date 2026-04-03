import { useContext } from "react"
import { myDarkTheme } from "./step1"



const DisplayTheme = () => {
    let theme = useContext(myDarkTheme)
  return (
    
    <div>
        <h1>Current Theme is : {theme}</h1>
    </div>
  )
}

export default DisplayTheme