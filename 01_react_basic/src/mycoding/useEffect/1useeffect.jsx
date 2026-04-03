
// 🧩 Your First useEffect Practice
// Create a component:
// Requirements
// 1️⃣ Create state:
// const [count, setCount] = useState(0)
// 2️⃣ Add button:
// Increase
// 3️⃣ Add useEffect that logs:
// Count changed!
// every time count changes.
// Example behavior:
// click button → count increases → console logs "Count changed!"
// Goal
// Use:
// useState
// useEffect
// dependency array
import {useState , useEffect} from "react"
export const Useeffect1 = () => {
    const [ count , setcount] = useState(0)
    let incfunction = () =>{
        setcount(count + 1)
    }

        useEffect(()=>{
            console.log("count changed " , count);
            
        } , [count] )
    
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={incfunction}>Increase</button>

    </div>
  )
}

export const Useeffect2 = () => {
    const [ count , setcount] = useState(0)
    let incfunction = () =>{
        setcount(prev => prev+count)
    }
    
    useEffect( ()=>{
        console.log("component mounted ...");
        
    } , [])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={incfunction}>Increase</button>

    </div>
  )
}

export const Useeffect3 = () => {
    const [ count , setcount] = useState(0)
    let incfunction = () =>{
        setcount(count + 1)
    }

        // useEffect(()=>{
        //     console.log("count changed " , count);
            
        // } , [count] )
        
    
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={incfunction}>Increase</button>

    </div>
  )
}