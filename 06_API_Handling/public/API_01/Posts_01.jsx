import {   useEffect,  useState } from "react"


const Posts_01 = () => {
    let [myApi , setMyapi] = useState([])
    useEffect( ()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((resp) =>  resp.json())
    .then((data) => setMyapi(data))
       
    } , [])

  return (
    <div>
        <h1> Posts </h1>

        <ul> {myApi.map( ( value , key) => (<li key={key}>{value.title}</li>))}</ul>
    </div>
  )
}

export default Posts_01