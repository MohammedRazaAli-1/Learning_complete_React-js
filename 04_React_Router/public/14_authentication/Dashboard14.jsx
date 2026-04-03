import { useNavigate } from "react-router-dom"



const Dashboard14 = () => {
   
    let mynavigate = useNavigate()
    let HandleLogout = () =>{
        alert("you logged out ")
        mynavigate("/")
        }

    
  return (
    <div>
        <h1>welcome to Dashboard</h1>
        <button onClick={HandleLogout}>Logout</button>


    </div>
  )

}
export default Dashboard14