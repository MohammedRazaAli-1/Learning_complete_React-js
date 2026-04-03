import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login15 from "./Login15"
import Dashboard15 from "./Dashboard15"


const Router15 = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login15 />} />
        <Route path="/homePage" element={<Dashboard15/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router15