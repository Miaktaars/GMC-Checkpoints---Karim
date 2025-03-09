// src/vehicle.ts

// Define the Vehicle interface
export interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void; // method that logs "Engine started" to the console
  }
  