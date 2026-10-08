import { useState, useEffect } from 'react';

export default function All() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("changed"), []
  })

  return(
    <div>
      <button onClick={() => {setCount(count + 1)}}>{count}</button> hi
      <button onClick={() => {setCount(count + 1)}}>{count}</button> 
    </div>
  )
};