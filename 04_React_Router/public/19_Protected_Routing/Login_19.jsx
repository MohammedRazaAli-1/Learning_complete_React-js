// Practice Problem — Blog Admin Panel (Protected Routes)
// You will build a small blog admin system.
// Pages
// /login
// /home
// /admin
// /admin/posts
// 🎯 App Goal
// Some pages should be public, some should be protected.
// Public Page
// /login
// Anyone can open it.
// Protected Pages
// /home
// /admin
// /admin/posts
// User must be logged in to access them.
// If not logged in:
// Redirect → /login
// 📦 Expected Routing Structure
// Your router should look like this conceptually:
// /login → Login Page
// /home → ProtectedRoute → Home
// /admin → ProtectedRoute → AdminLayout
//            │
//            └── /admin/posts → Posts Page
// So you will practice:
// ✔ ProtectedRoute
// ✔ Nested routes
// ✔ Navigation
// ✔ Logout
// 🔐 Login Credentials
// Use this validation:
// username: admin
// password: blog123

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login_19 = () => {
    let [username , setUsername ] = useState("")
    let [password , setPassword ] = useState("") 
    let mynavigate = useNavigate()
    let HandleLogin = () =>{
        if(username === "raza" && password==="9322"){
            localStorage.setItem("admin" , username)
            mynavigate("/admin")

        }else{
            alert("envalid credentials ")
        }
    }
  return (
    <div>
        <h1>Log in page </h1>
        <p> Username :  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /></p>
        <p> Password : <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)}/> </p>
        <button onClick={HandleLogin }>Log in </button>
        
    </div>
  )
}

export default Login_19