import { useRef } from "react"


const Useref_problem1 = () => {
    let myvar = useRef(0)

    let change_funtion = () =>{
        myvar.current += 1 
        console.log(myvar.current);

    }
    


  return (
    <div>
        <button onClick={change_funtion}>increase</button>
    </div>
  )
}

export default Useref_problem1