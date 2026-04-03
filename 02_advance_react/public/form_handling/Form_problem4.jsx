// Next Exercise (Login Form)
// Create a login form:
// Inputs:
// Email
// Password
// State:
// {
//   email: "",
//   password: ""
// }
// Button:
// Login
// When clicking login:
// console.log(form)
// Example output:
// {
//   email: "raza@gmail.com",
//   password: "123456"
// }

import { useState } from "react"

const Form_problem4 = () => {
    const [ form , setForm] = useState({
        email : "",
        password : ""
    })

    let handleform = (e) =>{
        setForm( prev =>({ ...prev , 
 [e.target.name] : e.target.value
        })
    )
}

    let printform = () =>{
        // let myobj = {
        //     email : form.email,
        //     password : form.password
        // }
        console.log(form);
        
        
    }
        
    return (
    <div>
        Enter Email : <input type="text" name ="email" value={form.email}  onChange={handleform}/>
        Enter Password : <input type="text" name="password" value={form.password} onChange={handleform} />

        <button onClick={printform}>see obj </button>
        

    </div>
  )
}

export default Form_problem4