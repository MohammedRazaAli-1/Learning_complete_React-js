import React, { useState } from 'react'

const Posts_03 = () => {
    let [posts , setPosts] = useState([])
    let [loading , setLoading] = useState(true)
    let [error , setError] = useState(null)

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then( (resp) => { 
        if(!resp.ok){
            throw new Error("error occured")
        }
        return resp.json})

    .then((data) =>{ 
        setPosts(data)
        setLoading(false)}
    )
    .catch((e) => {
        setError(e.message)
        setLoading(false)
    })


  return (
    <></>
  )
}

export default Posts_03