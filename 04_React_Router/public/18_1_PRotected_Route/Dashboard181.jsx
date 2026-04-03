import { useNavigate } from "react-router-dom"


const Dashboard181 = () => {
    let mynavigate = useNavigate()
    let username = localStorage.getItem("admin")

    let HandleProfile = () =>{
        mynavigate("/profile")

    }
    let HandleLogout = () =>{
        confirm("do you want to Log out ? ")
        localStorage.removeItem("user")
        mynavigate("/")

    }

  return (
    <div>
        <h1> Hello , {username}</h1>
        <h3>welcome to dashboard </h3>
        <hr />
        <button onClick={HandleProfile}>go to profile</button>

        <hr />
        <br />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, quod.</p>
        <br />
        <h1>Lorem, ipsum dolor.</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus placeat sint quam nemo sit, vel enim ut. Dicta, commodi reprehenderit!</p>
        <br />
        <br /><hr />

        <button onClick={HandleLogout}>Log out </button>


    </div>
  )
}

export default Dashboard181