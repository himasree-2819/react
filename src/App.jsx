// import './App.css'
// import Basic from './Class-components/Basic'
// import RenderingLists from './embedding-expression/RenderingLists'
// import Welcome from './embedding-expression/welcome'
// import Calling_function from './embedding-expression/calling_function'
// import Conditional from './embedding-expression/Conditional'
// import Counter from "./Class-components/Counter"
// const App = () => {
  

  // return (
    // <>
    {/* <Welcome/> */}
    {/* <Calling_function/> */}
    {/* <Conditional/> */}
    {/* <RenderingLists/> */}

{/* .......class components...... */}
{/* <Basic/> */}
    
    
    
    {/* </> */}
  // )
// }

import React, { Component } from 'react'
import Should_update from './class-components/life-cycle-methods/Should_update'
// import CounterTask from './class-components/task/ConterTask'
// import Mounting from './class-components/life-cycle-methods/Mounting'
// import Updating from './class-components/life-cycle-methods/Updating'
// import UnMounting from './class-components/life-cycle-methods/UnMounting'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <CounterTask/> */}
        {/* <Mounting/> */}
        {/* <Updating/> */}
        {/* <UnMounting/> */}
        {/* <ButtonUnMount/> */}
        <Should_update/>
      </div>
    )
  }
}
