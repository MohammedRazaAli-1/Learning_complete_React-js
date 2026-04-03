import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login_1 from './Login_1'
import Protection from './Protection'
import TeacherDashboard from './TeacherDashboard'
import Dashboard1 from './Dashboard1'
import Students1 from './Students1'
import Results1 from './Results1'

const Routing = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login_1 /> }/>

    <Route path='/teacher/dashboard' 
    element={
        <Protection>
            <TeacherDashboard />
        </Protection>
    } > 
    <Route path='dashboard' element={<Dashboard1 />} /> 
    <Route path='student' element={<Students1 /> } /> 
    <Route path='Result' element={ <Results1 /> } /> 

     </Route>
     <Route path='*' element={<h1> 404 page not found </h1>} /> 

   </Routes>
   </BrowserRouter>
  )
}

export default Routing