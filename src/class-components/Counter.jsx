import React, { Component } from 'react'


export default class Counter extends Component {
    // steps1: initialize state in constructor
    constructor(props) {  // accept props as parameter
        super(props); // call super with props
        this.state = { count: 0 }; // initialize state object
    }


    // step2: create method to update state
    increment = () => {
        this.setState({ count: this.state.count + 1 });

    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    }
    //
    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onclick={this.increment}>+</button>
                <button onclick={this.decrement}>-</button>
            </div>
        )
    }
}
