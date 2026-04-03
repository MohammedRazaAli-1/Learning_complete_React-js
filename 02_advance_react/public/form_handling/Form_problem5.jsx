
// Create a login form using <form> tag:
// Fields:
// Email
// Password
// Button:
// Login
// Rules:
// 1️⃣ Use <form onSubmit={handleSubmit}>
// 2️⃣ Use event.preventDefault()
// 3️⃣ Print form data in console
// Example output:
// {
//   email: "raza@gmail.com",
//   password: "123456"
// }

import { useState } from "react"


const Form_problem5 = () => {
    let [formData , setFormData] = useState({
        email : "",
        password : ""
    })

    // let handleform = (e) =>{
    //     setFormData(
    //         {
    //             ...formData , 
    //             [e.target.name] : e.target.value
                
    //         }
    //     )
    // }

    let handleform = (e) =>{
        let {name , value} = e.target
        setFormData( prev => ({
            ...prev , 
            [name] : value
        }))
    }
    let DisplayLog = (e) =>{

        e.preventDefault()
        console.log(formData);
        alert("form submitted ...")   
    }
  return (
    <div>
        <form action="#" onSubmit={DisplayLog}>
            <input type="email" name="email" id="email" placeholder="abc@xyz.com" onChange={handleform} value={formData.email}/>
            <input type="number" name="password" id="number" placeholder="********" onChange={handleform} value={formData.password}/>

            <button >Login</button>

        </form>

    </div>
  )
}

export default Form_problem5