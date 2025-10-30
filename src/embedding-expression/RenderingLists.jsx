import React from 'react'

const RenderingLists = () => {
    const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
    return (
    <div>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
    </div>
  )
}

export default RenderingLists