import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const Setting17 = () => {

    let formData = JSON.parse(localStorage.getItem("admin"))
     let mynavigate = useNavigate()
    useCallback( ()=>{     
    if(!formData){
        mynavigate("/")
    }
    } ,[])
   
    let HandleDashboard = () =>{
        mynavigate("/dashboard")

    }
  return (
    <div>
        <h1> kya re ? setting kiya hai ....</h1>
        <h2>Venge ka beta akela khada hai ! </h2>
        <h1>agar himmat hai ? to sab ek saath aao  --</h1>

        <button onClick={HandleDashboard}>go to dashboard</button>
    </div>
  )
}

export default Setting17