

import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./MainPage"



const URl_handle = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/:id" element={<MainPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default URl_handle