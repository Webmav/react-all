import { useState } from 'react';

export default function All() {
  const [count, setCount] = useState(0);

  return(
    <div>
      <h1>Hi alllll</h1>
      <h3>Count : { count }</h3>
      <button onClick={() => { setCount(count + 1) }}>Increment</button>
      <button onClick={() => { setCount(count - 1) }}>Decrement</button>
      <button onClick={() => { setCount(0) }}>Reset</button>
    </div>
  )
};