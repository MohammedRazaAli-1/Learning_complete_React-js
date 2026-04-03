import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import Page1 from "./Page1"
import Page2 from "./Page2"
import Page3 from "./Page3"
import Page4 from "./Page4"


const HandleRouting2 = () => {
  return (
    <BrowserRouter>
    <NavLink to="/page1"  style={({isActive }) => ({color : isActive  ? "red" : "black"})}> page 1 </NavLink> <hr />
    <NavLink to="/page2" style={({isActive }) => ({color : isActive  ? "red" : "black"})}> Page 2  </NavLink> <hr />
    <NavLink to="/page3" style={({isActive }) => ({color : isActive  ? "yellow" : "black"})}> Page 3 </NavLink> <hr />
    <NavLink to="/page4" style={({isActive }) => ({color : isActive  ? "purple" : "black"})}> Page 4 </NavLink> <hr />
    
    
    
            <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
    </Routes>
    </BrowserRouter>
  )
}

export default HandleRouting2