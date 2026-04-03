import { useNavigate } from "react-router-dom"


const Login_Page = (e) => {
    e.preventDefault()
    let Mynavigate = useNavigate()
    let HandleSubmit = () =>{
        alert("Logged in successfully .... ")
        Mynavigate("/dashboard")

    }
  return (
    <div>
        <form onSubmit={HandleSubmit}>
            <h1>Log in </h1>
            Enter your name : <input type="text"  />
            Enter your password : <input type="text" />
            <button>Log in </button>
        </form>
    </div>
  )
}

export default Login_Page