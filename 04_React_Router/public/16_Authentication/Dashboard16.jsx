import { useNavigate } from "react-router-dom"


const Dashboard16 = () => {
    let userInfo = JSON.parse( localStorage.getItem("admin"))
    if(!userInfo){
      return <h1> please log in first </h1>
    }
    let mynavigate = useNavigate()

    let HandleLogout = () =>{
        localStorage.removeItem("admin")
        alert("you logged out ")
        mynavigate("/")
        
    } 
    let HandleProfile = () =>{
        mynavigate("/profile")
    }

  return (
    <div>
        <h1>Dasboard </h1>

        <h1>your name is : {userInfo.username}</h1>

       <hr />
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, atque?</p>

       <hr />

       <button onClick={HandleProfile}> go to Profile </button>

       <br />
       <br />
       <button onClick={HandleLogout}>Logout</button>

    </div>
  )
}

export default Dashboard16