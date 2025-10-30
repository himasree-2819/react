// // import React from 'react';
// import Conditional from './conditional.jsx'; // if you need it

// function CallingFunction() {

//   function getGreeting(name) {
//     return `Hello, ${name}`;
//   }

//   function Greetings() {
//     return <h1>{getGreeting('Hima')}</h1>;
//   }

//   return (
//     <div>
//       <Greetings />
//     </div>
//   );
// }

// export default CallingFunction;

import React from 'react';
import Conditional from './conditional.jsx'; // if you need it

function CallingFunction() {

  function getGreeting(name) {
    return `Hello, ${name}`;
  }

  function Greetings() {
    return <h1>{getGreeting('Hima')}</h1>;
  }

  return (
    <div>
      <Greetings />
    </div>
  );
}

export default CallingFunction;
