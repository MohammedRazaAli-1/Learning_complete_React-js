import { useNavigate } from "react-router-dom"

function Dashboard13() {

  const navigate = useNavigate()

  const logout = () => {

    navigate("/")

  }

  return (

    <div>

      <h1>Welcome to Dashboard</h1>

      <button onClick={logout}>
        Logout
      </button>

    </div>

  )

}

export default Dashboard13