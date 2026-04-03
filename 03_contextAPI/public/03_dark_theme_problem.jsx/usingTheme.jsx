import DisplayTheme from "./DisplayTheme"
import { myDarkTheme } from "./step1"

const UsingTheme = () => {
  let myTheme = "Dark"
  return (
   <myDarkTheme.Provider value={myTheme}>
    <DisplayTheme/>
   </myDarkTheme.Provider>  
    
  )
}

export default UsingTheme