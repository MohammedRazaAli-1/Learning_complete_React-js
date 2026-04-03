import { NavLink, Outlet } from "react-router-dom"



const UserDashboard = () => {

  return (
    <div>
        <h1> welcome to User Dashboard </h1>

        <NavLink to="account" style={({isActive}) => ({color : isActive ? "red" : "green"})} >Account</NavLink>
        <NavLink to="security" style={({isActive}) => ({color : isActive ? "red" : "yellow"})} > Security </NavLink>
        <NavLink to="billing"  style={({isActive}) => ({backgroundColor : isActive ? "red" : "black"})}>  Billing</NavLink>
        <Outlet />
    </div>
  )
}

export default UserDashboard