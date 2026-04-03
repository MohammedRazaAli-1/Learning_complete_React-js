import { MyContext } from "./Step1";
import Step3 from "./step3";




const Step2 = () => {
    let myname ="Aayat ullah Ali khaminie";
  return (
    <MyContext.Provider value ={myname} >
    <Step3/>
    </MyContext.Provider>
  )
}

export default Step2