// Exercise: Fetch Users from API
// You will fetch users from this API:
// https://jsonplaceholder.typicode.com/users
// This is a fake API used for learning.
// 🎯 Requirements
// 1️⃣ Create two states
// const [users, setUsers] = useState([])
// const [loading, setLoading] = useState(true)
// users → store API data
// loading → track if data is still loading
// 2️⃣ Use useEffect to fetch data
// Inside useEffect:
// Fetch the data
// Convert it to JSON
// Store it in users
// Set loading to false
// Hint:
// fetch("https://jsonplaceholder.typicode.com/users")
// 3️⃣ Show loading text first
// Before the data arrives, show:
// Loading users...
// Use conditional rendering.
// 4️⃣ Display users
// After data loads, show:
// • Leanne Graham
// • Ervin Howell
// • Clementine Bauch
// ...
// Use:
// users.map()
// 🖼 Expected UI
// Initially:
// Loading users...
// After data loads:
// User List
// • Leanne Graham
// • Ervin Howell
// • Clementine Bauch
// ...
// 🧠 Concepts This Exercise Uses
// You will combine:
// useState
// useEffect
// API fetching
// conditional rendering
// map()
// key
// These are core React skills used in real applications.
// 🔧 Small Hint Structure
// useEffect(() => {

//   fetch("API_URL")
//     .then(res => res.json())
//     .then(data => {
//        setUsers(data)
//        setLoading(false)
//     })

// }, [])
// 🚀 Your Task
// Create a component called:
// UserList


import { useState , useEffect } from "react"
import HandleUser from "./HandleUser"

const Api_main = () => {
     const [users, setUsers] = useState([])
     const [loading, setLoading] = useState(true)
      useEffect(() => {

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
       setUsers(data)
       setLoading(false)
    })

}, [])

  return (
    <div>
        {loading &&  <h1>Loading users </h1>}
        <ul>
            {users.map(value => <li key={value.id}> <HandleUser {...value} /> </li>)}
            
            
             
        </ul>

    </div>
  )
}

export default Api_main