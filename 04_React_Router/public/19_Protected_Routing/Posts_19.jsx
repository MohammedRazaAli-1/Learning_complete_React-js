import React from 'react'
import { NavLink } from 'react-router-dom'

const Posts_19 = () => {
  return (
    <div>
        <NavLink to="/admin" style={ ( {isActive}) => ({color : isActive ? "red" : "purple"})} > go to admin</NavLink>

        <div style={{
            height:"300px" , 
            width : "250px",
            backgroundColor:"yellow",
            color:"white"
        }}> <h1> box 1 </h1>
        </div>

        <div style={{
            height:"300px" , 
            width : "250px",
            backgroundColor:"pink",
            color:"black"
        }}> <h1> box 2 </h1>
        </div>

        <div style={{
            height:"300px" , 
            width : "250px",
            backgroundColor:"red",
            color:"white"
        }}> <h1> box 3 </h1>
        </div>

        <div style={{
            height:"300px" , 
            width : "250px",
            backgroundColor:"blue",
            color:"black"
        }}> <h1> box 4  </h1>
        </div>

    </div>
  
    
    
    
  )
}

export default Posts_19