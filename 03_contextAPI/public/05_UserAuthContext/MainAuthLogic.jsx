import { useState } from "react"
import { createAuthContext } from "./createAuthContext"
import ViewAuth from "./ViewAuth"


const MainAuthLogic = () => {
    const [ logIn , setLogIn] = useState(false)
    const [username , setUsername] = useState("")
  return (
    <div>
        <createAuthContext.Provider value={[logIn , setLogIn , username , setUsername]}>
            <ViewAuth/>
        </createAuthContext.Provider>

    </div>
  )
}

export default MainAuthLogic