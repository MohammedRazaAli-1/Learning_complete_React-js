import { Navigate } from "react-router-dom"


const Protection = ({children}) => {
    let user = localStorage.getItem("user")

    if(!user){
        return <Navigate to="/"/>
    }
    return children

}

export default Protection