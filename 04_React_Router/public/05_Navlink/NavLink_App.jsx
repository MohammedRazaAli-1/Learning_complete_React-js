import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import AboutUs from "./AboutUs"
import Contact_us from "./Contact_us"


const NavLink_App = () => {
  return (
    <BrowserRouter>
    <nav>

      <NavLink to="/"   style={({ isActive }) => ({
    color: isActive ? "blue" : "black"
  })}>Home</NavLink> |

      <NavLink to="/about"   style={({ isActive }) => ({color: isActive ? "blue" : "black"})}>About</NavLink> |

      <NavLink to="/contact"  style={({ isActive }) => ({
    color: isActive ? "blue" : "black"
  })}>Contact</NavLink>

    </nav>
    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact_us />} />

    </Routes>
    
    </BrowserRouter>
  )
}

export default NavLink_App