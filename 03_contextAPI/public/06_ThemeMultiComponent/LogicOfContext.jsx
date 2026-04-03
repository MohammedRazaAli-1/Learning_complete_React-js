
import { useState } from "react"
import { loadContext } from "./Load"
import ViewPage from "./ViewPage"
import ButtonView from "./ButtonView"

const LogicOfContext = () => {
    let [theme , setTheme]  = useState("light")
  return (
    <div>
        <loadContext.Provider value={[theme , setTheme]}>
            <ViewPage />
            <ButtonView />
        </loadContext.Provider>
    </div>
  )
}

export default LogicOfContext