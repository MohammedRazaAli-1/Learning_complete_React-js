import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard1 from "./Dashboard1"
import Profile1 from "./Profile1"
import Setting1 from "./setting1"
import Support1 from "./supprts1"

const Routing9 = () => {
  return (
    
    <BrowserRouter>
    <Routes>
        <Route path="/dashboard"  element={<Dashboard1 />}> 
        <Route path="profile" element={<Profile1 />} />
        <Route path="setting" element={<Setting1 />} />
        <Route path="support" element={<Support1 />} />
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Routing9