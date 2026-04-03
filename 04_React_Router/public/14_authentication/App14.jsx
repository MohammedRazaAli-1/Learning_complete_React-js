import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard14 from "./Dashboard14"
import Login14 from "./Login14"


const App14 = () => {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login14 />} />
        <Route path="/dashboard" element={<Dashboard14 />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App14