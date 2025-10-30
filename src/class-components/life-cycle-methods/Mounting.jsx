import React, { Component } from 'react'

export default class Mounting extends Component {
    componentDidMount() { //life-cycle method, which is automatically called after the component is mounted
        console.log('Component mounted!');
    }
    render() {
        return <p>Component has been mounted!</p>
    }
}
