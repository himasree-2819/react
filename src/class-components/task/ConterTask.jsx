// import React, { Component } from 'react';


// export default class CounterTask extends Component {
//   // Step 1: initialize state in constructor
//   constructor(props) {
//     super(props); // call super with props
//     this.state = { count: 0 }; // initialize state object
//   }

//   // Step 2: methods to update state
//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   decrement = () => {
//     this.setState({ count: this.state.count - 1 });
//   };

//   render() {
//     return (
//       <div style={{ textAlign: 'center', marginTop: '50px' }}>
//         <h2>Count: {this.state.count}</h2>
//         <button onClick={this.increment}>+</button>
//         <button onClick={this.decrement}>-</button>
//       </div>
//     );
//   }
// }
import React, { Component } from 'react';

export default class Counter_homework extends Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decrement = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 });
        }
        if (this.state.count <= 0) {
            alert('alertt');
        }
    }

    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }
}