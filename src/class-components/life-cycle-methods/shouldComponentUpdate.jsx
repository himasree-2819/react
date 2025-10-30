import React, { Component } from 'react';

class Counter extends Component {
  state = { count: 0 };

  shouldComponentUpdate(nextProps, nextState) {
    // Only update if count has changed
    if (this.state.count !== nextState.count) {
      return true;  // allow re-render
    }
    return false;   // skip re-render
  }

  render() {
    console.log("Rendering...");
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
