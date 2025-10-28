import React from 'react'

const calling_function = () => {

  function getGreeting(name){
       return `Hello, ${name}` ;
       }
  function Greetings(){
       return <h1>{getGreeting('hima')}</h1>;
       }
       
  return (
    <div>

       
    </div>
  )
}

export default calling_function