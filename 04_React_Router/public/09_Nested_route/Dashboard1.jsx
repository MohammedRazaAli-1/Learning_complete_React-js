import { Link, Outlet } from "react-router-dom"


const Dashboard1 = () => {
  return (
    <div>
        <h1>Dashboard</h1>
        <h2>Welcome to the Dashboard Raza</h2>


        <nav>
            <Link to="profile"> <h1>Profile</h1> </Link>
            <Link to="setting"> <h1>setting </h1></Link>
            <Link to="support"> <h1>support</h1></Link>
        </nav>
        <hr />
        <Outlet />
        <b>Fotter</b>
        <p>All rights reserved</p>
        
    </div>
  )
}

export default Dashboard1