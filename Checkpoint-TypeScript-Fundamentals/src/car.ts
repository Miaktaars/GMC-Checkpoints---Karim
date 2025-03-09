// src/car.ts

import { Vehicle } from "./vehicles";

// Implement the Car class that implements the Vehicle interface
export class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  // Constructor to initialize make, model, and year
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Implement the start method that logs a message to the console
  start(): void {
    console.log('Car engine started');
  }
}
