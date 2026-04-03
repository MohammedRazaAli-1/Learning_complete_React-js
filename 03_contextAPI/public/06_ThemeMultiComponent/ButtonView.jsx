import { useContext } from "react"
import { loadContext } from "./Load"



const ButtonView = () => {
    let [theme , settheme] = useContext(loadContext)
    let handleTheme = () =>{
        theme ==="light" ? settheme("dark") : settheme("light")
    }

  return (

    <div>
        <button onClick={handleTheme}>toggle theme </button>
    </div>
  )
}

export default ButtonView