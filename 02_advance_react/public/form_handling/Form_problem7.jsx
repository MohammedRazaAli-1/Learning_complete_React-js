// Mega Problem: User Registration For
// Create a form with these fields:
// Inputs
// Full Name
// Email
// Password
// Confirm Password
// Gender (radio)
// Subscribe to newsletter (checkbox)
// Country (select dropdown)
// Required State
// {
//   name: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
//   gender: "",
//   subscribe: false,
//   country: ""
// }
// Features Required
// 1️⃣ Controlled inputs
// All fields must use:
// value
// checked
// onChange
// 2️⃣ Radio buttons
// Example:
// Male
// Female
// Other
// 3️⃣ Validation (NEW)
// On submit check:
// password === confirmPassword
// If not:
// alert("Passwords do not match")
// 4️⃣ Prevent page reload
// Use:
// e.preventDefault()
// 5️⃣ Console output
// Example output:
// {
//   name: "Raza",
//   email: "raza@gmail.com",
//   gender: "male",
//   subscribe: true,
//   country: "India"
// }
// ⭐ Bonus (Optional)
// After submission:
// clear the form

import { useState } from "react"

const Form_problem7 = () => {
    let  [ formData , setFormData] = useState(
        {
            name : "",
            email : "",
            password :"",
            confirmPassword : "",
            gender : "",
            subscribe : false,
            country : ""

        }
    )

    let onFormSubmit = (e) =>{
        e.preventDefault()
        if(formData.password !== formData.confirmPassword){
            alert("Password do not match")
        }
        else{
            console.log(formData);
            alert("form submitted successfully ...")
            setFormData({name :"" , email :"" , password : "" , confirmPassword :"" , gender :"" , subscribe : false , country : ""})
        }
    }

    let handleForm = (e) =>{
        let {name , value , type , checked } = e.target 
        setFormData(
            prev =>( {
                ...prev ,
                [name]:type ==="checkbox"? checked : value 

            })
        )
    }
  return (
    <div>
        <form action="#" method="post" onSubmit={onFormSubmit}>
            <label> Enter Name : 
            <input type="text" name="name" value={formData.name} onChange={handleForm} />
            </label>
            <br />

            <label> Enter Email : 
                <input type="email" name="email" value={formData.email} onChange={handleForm} />
            </label>
            <br />

            <label> password : 
                <input type="text" name="password" value={formData.password} onChange={handleForm} />
            </label>
            <br />

            <label> confirm Password : 
                <input type="text" name="confirmPassword" value={formData.confirmPassword} onChange={handleForm} />
            </label>
            <br />

            <label> Gender : 
                
                Male : <input type="radio"  value="male" checked={formData.gender ==="male"} name="gender" onChange={handleForm} />
                Female : <input type="radio"  value="female" checked={formData.gender==="female"} name="gender" onChange={handleForm}/>
                other : <input type="radio"  value="other" checked={formData.gender ==="other"} name="gender" onChange={handleForm}/>
                
            </label>
            <br />

            <label>
                subscribe <input type="checkbox" name="subscribe" checked={formData.subscribe} value={formData.subscribe} onChange={handleForm}/>
            </label>
            <br />

            <label>
                <select name="country" value={formData.country} onChange={handleForm}>Country : 
                    <option value=""> --Select country --</option>
                    <option value="India"> India</option>
                    <option value="USA">USA</option>
                    <option value="Chaina">Chaina</option>
                    <option value="Japan">Japan</option>
                    <option value="Russia">Russia</option>
                </select>
            </label>
            <br />

            <button>submit</button>

        </form>
    </div>
  )
}

export default Form_problem7