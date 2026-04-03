import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login_Page from "./Login_Page"
import DasboardPage from "./DasboardPage"
import Profile_page from "./Profile_page"


const Pages_Routing = () => {
  return (
    <BrowserRouter>

    <Routes>
        <Route path="/" element={<Login_Page />} />
        <Route path="/dashboard" element={<DasboardPage />} />
        <Route path="/profile" element={<Profile_page />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Pages_Routing