import { useContext } from "react"
import { MyContext } from "./Step1"

const Step3 = () => {
    let name = useContext(MyContext)
  return (
    <>
    <h1> My name is : {name}</h1>
    </>
  )
}
export default Step3