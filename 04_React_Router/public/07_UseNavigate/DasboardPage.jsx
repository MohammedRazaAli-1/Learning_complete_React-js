import { useNavigate } from "react-router-dom"


const DasboardPage = () => {
    let Mynavigte = useNavigate()
    let VisitProfile = () =>{
        Mynavigte("/profile")

    }

  return (
    <div>
        <h1>Welcome to DashBoard</h1>
        <button onClick={VisitProfile}>Profile</button>
        <p>click above to see profile details </p>

        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, eos?</p>
        <br />
        <h3>Lorem ipsum dolor sit amet.</h3>
        <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit corporis amet saepe perspiciatis, aspernatur corrupti adipisci expedita modi eligendi quae.</b>

    </div>
  )
}

export default DasboardPage