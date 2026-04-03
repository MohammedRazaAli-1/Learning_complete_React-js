import { useEffect, useState } from "react"

const Posts_02 = () => {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/post")

      .then((res) => {
        if(!res.ok){
          throw new Error("Failed to fetch posts")
        }
        return res.json()
      })

      .then((data) => {
        setPosts(data)
        setLoading(false)
      })

      .catch((err) => {
        setError(err)
        setLoading(false)
      })

  }, [])

  if(loading){
    return <h2>Loading posts...</h2>
  }

  if(error){
    return <h2>Error: {error}</h2>
  }

  return (

    <div>

      <h1>Posts</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

    </div>

  )
}

export default Posts_02