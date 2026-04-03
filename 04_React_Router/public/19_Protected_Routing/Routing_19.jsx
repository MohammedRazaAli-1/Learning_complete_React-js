
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login_19 from './Login_19'
import Admin_19 from './Admin_19'
import Posts_19 from './Posts_19'
import RouteProtection from './Protection_19'
const Routing_19 = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login_19 />} /> 
    <Route path='/admin' element={
        <RouteProtection>
        <Admin_19 />
        </RouteProtection> 
        } >
    <Route path='posts' element={<Posts_19 />} />
    </Route>
    </Routes> 
    </BrowserRouter>
  )
}
export default Routing_19