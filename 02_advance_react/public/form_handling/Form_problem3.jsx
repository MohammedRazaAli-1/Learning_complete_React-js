// Create a form with three inputs:
// Name
// Email
// Password
// Rules:
// 1️⃣ Use one state object
// const [form, setForm] = useState({
//   name: "",
//   email: "",
//   password: ""
// })
// 2️⃣ Use one onChange function
// 3️⃣ Display the data below:
// Name: ___
// Email: ___
// Password: ___
// Hint
// Use the input name attribute:
// <input name="name" />
// <input name="email" />
// <input name="password" />
// Then inside handler:
// e.target.name
// e.target.value

import { useState } from "react"



const Form_problem3 = () => {
    const [form , setForm] = useState({
        name : "",
        email : "",
        password : "",
    })

    let hadleInput = (e) =>{
        setForm(
            {
                ...form,
                [e.target.name] : e.target.value
            }
        )

    }
  return (
    <div>
        name : <input type="text" name="name" value={form.name} onChange={hadleInput}/>
        <br /> 
        email : <input type="text" name="email" value={form.email} onChange={hadleInput}/>
        <br />
        password : <input type="text" name="password" value={form.password} onChange={hadleInput}/>

        <h1>
            name is : {form.name}
            <br />
            email is : {form.email}
            <br />
            password is : {form.password}
        </h1>

    </div>
  )
}

export default Form_problem3