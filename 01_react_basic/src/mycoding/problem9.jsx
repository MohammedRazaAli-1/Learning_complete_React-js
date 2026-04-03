// New Problem: Simple Notes App (Mini Version)
// Requirements:
// State:
// const [note, setNote] = useState("")
// const [notes, setNotes] = useState([])
// Input field
// "Save Note" button
// When clicked:
// Add note to list
// Clear input
// Do NOT allow empty notes
// Render notes as:
// • Note text
// 🚨 Important Rule:
// You must use functional update:
// setNotes(prev => [...prev, note])


import {useState} from "react"
const Problem9 = () => {
let [noteinput , setNoteinput] = useState("")
let [displayNote , setDsiplayNote] = useState([])

let notefunction = () =>{
    if(noteinput.trim() !== ""){
        setDsiplayNote( prev => [...prev , noteinput])
        setNoteinput("")
    }
}
// here i am deleting note by its index value not bu its content 
// let delfunction =(index ) =>{
//     let newarr = displayNote.filter( (value, index) => index !==input)
//     setDsiplayNote(newarr)
// }

let delfunction = (input) =>{
    let newarr =displayNote.filter((value) =>{value !== input})
    setDsiplayNote(newarr)

}
  return (
    <div>
    <input 
    type ="text"
    value ={noteinput}
    onChange={(e) =>{setNoteinput(e.target.value)}}
/>
<p>{noteinput}</p>
<button onClick={notefunction}>save note</button>
<ul>{displayNote.map((input , index) =>(<li key={index}>{input} <button onClick={() => delfunction(input)}>Delete</button></li>)
    )}</ul>
    </div>
  )
}

export default Problem9