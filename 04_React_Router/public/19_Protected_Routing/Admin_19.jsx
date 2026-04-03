import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

const Admin_19 = () => {
    let admin = localStorage.getItem("admin")
    let mynavigate = useNavigate()
       
    let  HandleLogout = () =>{
       let check =  confirm("are you sure to logging off ! ")
       if(check) { 
        localStorage.removeItem("admin")
        mynavigate("/")
       }



    }
  return (
    <div>
        <h1> welcome to admin page </h1>
        <hr />
        <h1> {admin}</h1>
        <br />
        <hr />
        <br />

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde consequatur tempore suscipit doloribus esse aperiam, repellat neque voluptas consequuntur porro.</p>
        <nav>
            <NavLink to="posts" style={({isActive}) => ({color:  isActive ? "red" : "green" }) }>go to posts </NavLink>
            

        </nav>

        <hr />
        <br />
        <button onClick={HandleLogout}>log out </button>
        <Outlet />
    </div>
  )
}

export default Admin_19