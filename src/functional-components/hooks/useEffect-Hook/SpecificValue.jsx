import React, { useEffect, useState } from 'react'

const SpecificValue = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`Count changed to  ${count}  `);
  }, [count]);  // runs only when count changes

  return (
    <div>
      <  h2  >  Count: {count}  </  h2  >
      <  button onClick={() => setCount(count + 1)}>Increase  </  button >
    </div>
  )
}

export default SpecificValue