
import { Link ,Outlet } from "react-router-dom"

const Dashboard = () => {

  return (
    <div>

      <h1>Dashboard</h1>

      <nav>

        <Link to="profile">Profile</Link> |
        <Link to="order">Orders</Link> |
        <Link to="setting">Settings</Link>

      </nav>

      <hr />

      <Outlet />

    </div>

  )
}

export default Dashboard