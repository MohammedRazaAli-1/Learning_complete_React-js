import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home2 from "../02_Routing/Home2"
import Product from "./Product"



const Main3 = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home2/> } />
        <Route path="/product/:id" element={<Product />} />
        
    </Routes>
    </BrowserRouter>
  )
}

export default Main3



