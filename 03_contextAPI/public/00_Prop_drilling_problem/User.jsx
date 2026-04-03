
import Nav from "./Nav"
const User = () => {
    let username = "Mohammad raza"
  return (
    
        <Nav user ={username} />
        
  )
}

export default User

// this data passing / data drilling is solved by createContext