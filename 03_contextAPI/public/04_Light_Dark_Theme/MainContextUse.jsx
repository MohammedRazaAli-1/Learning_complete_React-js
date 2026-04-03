import { useState } from "react"
import { CreateContext } from "./CreateContext"
import DisplayThemeLogic from "./DisplayThemeLogic"


const MainContextUse = () => {
    const [theme , setTheme] = useState("light")
  return (
    <>
    <CreateContext.Provider value={[theme , setTheme ] }>
        <DisplayThemeLogic />
    </CreateContext.Provider>
    </>
  )
}

export default MainContextUse