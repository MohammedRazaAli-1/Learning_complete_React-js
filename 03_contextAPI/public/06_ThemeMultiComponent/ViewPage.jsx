import { useContext } from "react"
import { loadContext } from "./Load"



const ViewPage = () => {
    let [theme ] = useContext(loadContext)
    
  return (
    <div>
        <h1>current theme is : {theme}</h1>
    </div>
  )
}

export default ViewPage