
import { NavLink, Outlet } from 'react-router-dom'

const TeacherDashboard = () => {
    let user = localStorage.getItem("user")
  return (
    <>
    <h1>welcome to dashboard Mr. {user} </h1>

    <hr />
    <nav>
        <NavLink to="dashboard"> -- Dashboard --</NavLink>
        <br />
        <NavLink to="result"> Result</NavLink> <br />
        <NavLink to="student"> Students </NavLink> <br />

    </nav>

    <Outlet/>
    </>

  )
}

export default TeacherDashboard