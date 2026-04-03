// Next Practice (Important)
// Now we will practice checkbox and select inputs.
// Create a form with:
// Name input
// Subscribe checkbox
// Country dropdown
// Example UI:
// Name: [input]
// Subscribe to newsletter [✓]
// Country:
// [ India ▼ ]
// Submit
// When submitting, console should print:
// {
//   name: "Raza",
//   subscribe: true,
//   country: "India"
// }

import { useState } from "react"

const Form_problem6 = () => {

    const [ form , setForm ] = useState(
        {
            name : "",
            checkbox : false,
            country : ""
        }
    )
    let handleForm = (e) =>{
        let {name , value , type , checked} = e.target
        setForm(
            prev => ({
                ...prev , 
                [name] : type ==="checkbox" ? checked : value

            })
        )
    }

    let handleSubmit = (e) =>{
        e.preventDefault()
        console.log(form);
        
        

    }

  return (
    <div>
        <form action="#" method="get" onSubmit={handleSubmit} >
        Enter name : <input type="text" name="name"  onChange={handleForm}/>
        <br />
        Subscribe : <input type="checkbox" name="checkbox"  onChange={handleForm}/>
        <br />
        Select Country : <select name="country" onChange={handleForm}>
            <option value="">-- Select an option --</option>
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Nepal">Nepal</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Afganistan">Afanistan</option>
        </select>
        <br />
        <button >submit</button>
        </form>
    </div>
  )
}

export default Form_problem6