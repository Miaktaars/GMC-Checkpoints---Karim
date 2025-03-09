import React, { useState } from 'react';
import Counter from './components/Counter';
import Greeting from './components/Greetings';

// Main application component
function App() {
  // State to store the user's name for Greeting component
  const [userName, setUserName] = useState('John');

  return (
    <div className="App">
      {/* Pass the userName state as a prop to Greeting */}
      <Greeting name={userName} />
      {/* Render Counter component */}
      <Counter />
    </div>
  );
}

export default App;



