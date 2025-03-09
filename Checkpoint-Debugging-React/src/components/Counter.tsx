import { useState } from 'react';

// Counter component to demonstrate state handling
function Counter() {
  // State to track the count value
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      {/* Button to increment the count state */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;