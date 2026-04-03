import { useContext } from "react"
import { UserContext } from "./Step1-createContext"

function Profile() {
  const user = useContext(UserContext)

  return <h1>User: {user}</h1>
}

export default Profile