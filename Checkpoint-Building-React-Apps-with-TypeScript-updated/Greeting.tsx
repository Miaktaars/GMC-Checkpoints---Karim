import React from "react";

// Define the type for props
interface GreetingProps {
  name: string; // 'name' must be a string
}

// Functional component with TypeScript
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
