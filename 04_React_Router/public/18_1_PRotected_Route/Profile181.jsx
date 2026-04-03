import { useNavigate } from "react-router-dom"


const Profile181 = () => {
    let mynavigate = useNavigate()
    let HandleDashboard = () =>{
        mynavigate("/dashboard")


    }
  return (
    <div>
        <h1> hello user </h1>
        <hr />

        <button onClick={HandleDashboard }> go to dashboard </button>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto rem, corporis vero impedit hic ut quia nesciunt modi ducimus molestias.

        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, minus!

        <br />

        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio omnis earum eius consectetur obcaecati, quae culpa veritatis laboriosam adipisci voluptate illo corrupti vitae placeat, perspiciatis, similique itaque totam eos accusamus. Sit accusantium mollitia rerum laudantium tenetur, necessitatibus, quasi eligendi, laborum eos dignissimos ad commodi alias officia quidem fugiat unde officiis?

        <hr />
    </div>
  )
}

export default Profile181