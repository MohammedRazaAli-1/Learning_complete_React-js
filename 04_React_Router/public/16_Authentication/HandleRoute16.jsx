import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login16 from "./Login16"
import Dashboard16 from "./Dashboard16"
import Profile16 from "./Profile16"


const HandleRoute16 = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login16 />} />
    <Route path="/dashboard" element={<Dashboard16 />} />
    <Route path="/profile" element={<Profile16 />} />
    <Route path="*" element={<h1> 404 page not found </h1>}/>
   </Routes>
   </BrowserRouter>

  )
}

export default HandleRoute16