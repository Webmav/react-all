import { useState, useEffect } from 'react';

import Navbar from "./assets/NavBar";
import Footer from "./assets/Footer";

export default function All() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("changed"), []
  })

  return(
      <div>
        <div>
          <Navbar />
        </div>

        <button onClick={() => {setCount(count + 1)}}>{count}</button> hi
        <button onClick={() => {setCount(count + 1)}}>{count}</button>

        <div>
          <Footer />
        </div>
      </div>
  )
};