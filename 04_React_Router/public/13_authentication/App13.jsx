import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login13 from "./Login13"
import Dashboard13 from "./Dashboard13"


function App13() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login13 />} />

        <Route path="/dashboard" element={<Dashboard13  />} />

      </Routes>

    </BrowserRouter>

  )

}

export default App13