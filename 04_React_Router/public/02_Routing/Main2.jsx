import { BrowserRouter, Route, Routes , Link} from "react-router-dom";
import About2 from "./About2";
import Home2 from "./Home2";
import Contact2 from "./Contact2";
import Career2 from "./Career2";
import Profile2 from "./Profile2";

const Main2 = () => {
  return (
    <BrowserRouter>
    <nav>
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/contact"> Contact</Link>
        <Link to="/career"> Career</Link>
        <Link to="/profile"> Profile</Link>
    </nav>

    <Routes>
        
        <Route path="/" element={ <Home2 />} />
        <Route path="/about" element={< About2 />} />
        <Route path="/Contact" element={ <Contact2 />} />
        <Route path="/career" element={< Career2 />} />
        <Route path="/profile" element={< Profile2 />} />



    </Routes>
    </BrowserRouter>
  )
}

export default Main2