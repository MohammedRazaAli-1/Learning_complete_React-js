// Create a component:
// State:
// const [fruits, setFruits] = useState(["Apple", "Banana"])
// Add button: "Add Mango"
// When clicked:
// Mango should be added to list
// But Mango should not be added more than once
// Render list using .map()

import {useState} from "react"
const Problem7 = () => {
    const [fruits, setFruits] = useState(["Apple", "Banana"])
    let addmango = () =>{
        if(!fruits.includes("Mango")){
        setFruits([...fruits , "Mango"])}
    }

  return (
    <div>
        <ul>
            {fruits.map((fruit , index ) => (<li key={index}>{fruit}</li>))}
        </ul>
        <button onClick={addmango}>Add Mango</button>

    </div>
  )
}

export default Problem7