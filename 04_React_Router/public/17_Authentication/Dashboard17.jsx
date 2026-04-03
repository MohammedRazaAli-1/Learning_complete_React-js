import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const Dashboard17 = () => {
    let mynavigate = useNavigate()
useEffect( ()=>{
    let FormData = JSON.parse(localStorage.getItem("admin"))
    if(!FormData) {
        mynavigate("/")
    }
},[])

    let HandleSetting = () =>{
        mynavigate("/setting")

    }
    let HandleLogout = () =>{
        localStorage.removeItem("admin")
        mynavigate("/")
    }
  return (
    <div>
        <h1> welcome to dashboard </h1>
        <h1>your name is : {FormData.name}</h1>
        <hr />
        <h2>your email is : {FormData.email}</h2>

        <button onClick={HandleSetting}>go to setting </button>
        <hr />
        <br />
        <button onClick={HandleLogout}>Log out </button>
    </div>
  )
}

export default Dashboard17