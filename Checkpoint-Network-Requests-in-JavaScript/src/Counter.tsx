import React, { Component } from "react";

// Define an interface for the state
interface CounterState {
  count: number;
}

// Class component with TypeScript
class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0,
  };

  increment = (): void => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
