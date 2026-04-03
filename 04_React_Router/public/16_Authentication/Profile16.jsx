import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile16 = () => {
    let userInfo = JSON.parse(localStorage.getItem("admin"))
    if(!userInfo){
      return <h1> please log in first </h1>
    }
    let mynavigate = useNavigate()

    let HandleDashboard = () =>{
        mynavigate("/dashboard")

    }

  return (
    <div>
        <h1> welcome to profile </h1>
        <hr />
        <br />
        <h1> Your name : {userInfo.username}</h1>
        <br />
        <h1> your passowrd : {userInfo.password }</h1>
        <hr />
        <button onClick={HandleDashboard}>go to Dashboard </button>
    </div>
  )
}

export default Profile16