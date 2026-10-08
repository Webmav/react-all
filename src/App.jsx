import { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Link, Routes} from 'react-router-dom';
import Home from "./assets/Home";
import About from './assets/About';

export default function All() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("changed"), []
  })

  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <button onClick={() => {setCount(count + 1)}}>{count}</button> hi
        <button onClick={() => {setCount(count + 1)}}>{count}</button>
      </div>

        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
    </Router>
  )
};