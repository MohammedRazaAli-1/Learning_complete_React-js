
import { Navigate } from 'react-router-dom'
const RouteProtection = ({children}) => {
    let checklog = localStorage.getItem("admin")
    if(!checklog) {
        return <Navigate to="/" />
    }
    return children
}
export default RouteProtection