import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Link from './component/Link';
import Home from './component/Home';
import { Routes, Route } from "react-router-dom"
import Contact from './component/Contact';



function App() {
  return (
    <div className="App">
      
      {/* <Home/> */}

      <Routes>
        
        <Route path="/home" element={ <Home/> } />
        <Route path="/link" element={ <Link/> } />
        <Route path="/contact" element={ <Contact/> } />
        
      </Routes>

    {/* <Link/> */}
    {/* <Contact/> */}
    </div>
  );
}

export default App;
