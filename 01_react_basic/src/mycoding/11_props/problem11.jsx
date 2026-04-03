
// Create two components:

import { Destrcuturing2 } from "./destrcuturing"

// App
// <Student name="Ali" course="React" />
// <Student name="Ahmed" course="JavaScript" />
// <Student name="Raza" course="MERN" />
// Student

// It should display:

// Name: Ali
// Course: React
// Name: Ahmed
// Course: JavaScript
// Name: Raza
// Course: MERN

// import Student from "./students11"
const Problem11 = () => {
  return (
    <>
    <Destrcuturing2
 name="Ali" course="React" />
    <Destrcuturing2
 name="Ahmed" course="JavaScript" />
    <Destrcuturing2
 name="Raza" course="MERN" />
   </>
  )
}

export default Problem11