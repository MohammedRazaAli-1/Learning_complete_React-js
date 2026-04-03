import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";


const HandleRouting = () => {
  return (
    <BrowserRouter>
    
    <NavLink to="/p1" style={({isActive}) => ({ color : isActive ? "blue" : "black" })}> Page 1 </NavLink> -
    <NavLink to="/p2" style={({isActive}) => ({ color : isActive ? "blue" : "black" })}> Page 2 </NavLink>-
    <NavLink to="/p3" style={({isActive}) => ({ color : isActive ? "blue" : "black" })}> Page 3 </NavLink>-
    <NavLink to="/p4" style={({isActive}) => ({ color : isActive ? "blue" : "black" })}> Page 4 </NavLink>-
    <Routes>
        <Route path="/p1" element={<Page1/>}/>
        <Route path="/p2" element={<Page2/>}/>
        <Route path="/p3" element={<Page3/>}/>
        <Route path="/p4" element={<Page4/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default HandleRouting