import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login_181 from "./Login_181"
import Dashboard181 from "./Dashboard181"
import Profile181 from "./Profile181"
import ProtectedRoute from "./Protecting181"


const Routing_181 = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login_181 />}/>
        
        
        <Route path="/dashboard" element= {
            <ProtectedRoute>
                <Dashboard181 />
                </ProtectedRoute>
            } />
        


        
        <Route path="/profile" element={
            <ProtectedRoute>
                <Profile181 />
                 </ProtectedRoute>
                } />
       
        
    </Routes>
    </BrowserRouter>
  )
}

export default Routing_181