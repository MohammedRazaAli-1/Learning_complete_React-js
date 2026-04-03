// Challenge: Build a useFetch Custom Hook
// Goal: Create a reusable hook that fetches data from an API.
// Example usage:
// const { data, loading, error } = useFetch(url)
// Then your component can display:
// loading state
// error state
// fetched data
// Step 1 — Create the Hook
// Create a file:
// useFetch.js
// Inside it create the hook:
// useFetch(url)
// Step 2 — States Needed
// Your hook must manage three states:
// data
// loading
// error
// Example:
// const [data, setData] = useState([])
// const [loading, setLoading] = useState(true)
// const [error, setError] = useState(null)
// Step 3 — Fetch Data with useEffect
// Use:
// useEffect(() => {
//    // fetch logic
// }, [url])
// Inside it:
// fetch the API
// convert response to JSON
// update data
// set loading false
// catch errors
// Step 4 — Return the Result
// Your hook should return an object:
// return { data, loading, error }
// Step 5 — Use the Hook in a Component
// Example component:
// const Users = () => {
//   const { data, loading, error } =
//     useFetch("https://jsonplaceholder.typicode.com/users")
//   if (loading) return <h1>Loading...</h1>
//   if (error) return <h1>Error loading data</h1>
//   return (
//     <ul>
//       {data.map(user => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   )
// }
// Expected UI
// Initially:
// Loading...
// After API loads:
// Leanne Graham
// Ervin Howell
// Clementine Bauch
// ...

import { useEffect, useState } from "react"



const realUseFetch = ({data}) => {
    const [ loading , setLoading ] = useState(true)
    const [ error , setError] = useState("")
    
    const [ users , setUsers] = useState([])

    useEffect( ()=>{
        fetch(data)
        .then(res => res.json)
        .then(data => setUsers(data))
        .catch( error =>setError(error))
        setLoading(false)
        
} , [])
  
return ( loading , error , users)
}

export default realUseFetch
