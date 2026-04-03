
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login17 from './Login17'
import Dashboard17 from './Dashboard17'
import Setting17 from './Setting17'

const Rotuing17 = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login17 />}/>
    <Route path='/dashboard' element={<Dashboard17 />} />
    <Route path='/setting' element={<Setting17 />} />
   </Routes>
   
   </BrowserRouter>
  )
}

export default Rotuing17