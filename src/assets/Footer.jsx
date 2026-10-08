import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import Home from "./Home";
import About from './About';
import Project from './Project';
import Contact from './Contact';

export default function Footer() {
    return(
        <Router>
            <footer style={{ marginTop:'20px', backgroundColor:'grey', padding:'10px'}}>
                <ul style= {{ display: 'flex', gap: '10px', listStyleType: 'none'}}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/project">Project</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </footer>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/project" element={<Project />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </Router>
    )
}