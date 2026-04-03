// import { useState } from "react"
// import { useParams } from "react-router-dom"


// const Product = () => {
//     let [ myid , setMyid] = useState("")


    
//     const {id} = useParams()


//   return (
//     <div>
//         <h1> Enter ID : <input type="text" value={myid}  onChange={e =>setMyid(e.target.value)}/> </h1>
        
//         <br />
//         <br />
//         <h1>User id is : {id}</h1>
//     </div>
//   )
// }

// export default Product
import { useParams } from "react-router-dom"

function Product() {

  const { id } = useParams()

  return <h1>User ID is {id}</h1>

}

export default Product