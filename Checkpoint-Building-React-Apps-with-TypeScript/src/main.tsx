import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// src/index.ts

import { Car } from './car';

// Create an instance of the Car class
const myCar = new Car('Toyota', 'Corolla', 2020);

// Call the start method to verify the output
myCar.start(); // Expected output: "Car engine started"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
