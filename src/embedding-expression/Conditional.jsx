// import React from 'react'

// const conditional = () => {
// const isLoggedIn = true;
//   return (
//     <div>
//        <p> {isLoggedIn ? "Welcome back!" : "Please sign up."}   </p>
//     </div>
//   )
// }

// export default conditional

import React from 'react';

function Conditional() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome back, Hima!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }
}

export default Conditional;
