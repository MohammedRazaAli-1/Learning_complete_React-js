import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom";


const Login17 = () => {
    let mynavigate = useNavigate()
    let [formData , setFormData] = useState(
        {
           name : "",
           email : "",
           password : ""

        }
    );

    let HandleForm = (e) =>{
        let {name , value} = e.target
      
            setFormData(
        prev => ({
            ...prev , 
            [name] : value
    })
        )
        }
        
    




    let HandleSubmit = (e) =>{
        e.preventDefault()
        if(formData.email ==="mohammadraza@gmail.com" && formData.password ==="Mdraza@9322"){
        localStorage.setItem("admin" ,  JSON.stringify(formData))
            mynavigate("/dashboard")
        }else{
            alert("invalid username of pasword ")
        }

    }
  return (

    <>
    <h1>welcome to Quick Collab </h1>

    <form action="#" method="get" onSubmit={HandleSubmit}>
        <label>Enter your name : 
            <input type="text" name="name" value={formData.name} onChange={HandleForm}/>
        </label>
        <label >enter email ID :
            <input type="email"  name="email" value={formData.email} onChange={HandleForm}/>
        </label>
        <label > enter password : 
            <input type="password" name="password" value={formData.password} onChange={HandleForm}/>
        </label>
        <button>Log in </button>
        

    </form>
    </>
  )
}

export default Login17