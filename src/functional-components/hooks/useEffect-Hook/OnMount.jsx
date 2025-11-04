import React, { useEffect } from 'react'

const OnMount = () => {
  useEffect(() => {
    console.log("Component mounted!");
  }, []);  // empty dependency array

  return (
    <div>
      <h2 >  Runs only once when mounted!  </  h2  >
    </div>
  )
}

export default OnMount