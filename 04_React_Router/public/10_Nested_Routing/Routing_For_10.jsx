import { BrowserRouter, Route, Routes } from "react-router-dom"
import Account from "./Account"
import Billing from "./Billing"
import Security from "./Security"
import UserDashboard from "./UserDashboard"



const Routing_For_10 = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/dashboard" element={<UserDashboard />}>

        <Route index element={<Account />} />
        
        <Route path="account" element={<Account />} />
        <Route path="billing" element={<Billing />} />
        <Route path="security" element={<Security/>} />
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Routing_For_10