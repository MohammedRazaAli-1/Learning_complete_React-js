import {  useNavigate } from "react-router-dom"


const Dashboard15 = () => {
    let mynavigate = useNavigate()
    let userInfo = localStorage.getItem("user")
    let HandleLogout = () =>{
        localStorage.removeItem("user")
        alert("you logged out ")
        mynavigate("/")
        

    }
  return (
    <div>
        <h1>Dashboard</h1>
        <hr />
        <h2>Welcome {userInfo} </h2>
        <hr />
        

       <hr />
       <hr />

       <button onClick={HandleLogout}>Log out </button>
    </div>
  )
}

export default Dashboard15