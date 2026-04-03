

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './01_Homepage';
import About from './01_About';
import Contactus from './01_Contactus';




function MyApp1() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyApp1