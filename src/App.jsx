import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './embedding-expression/Welcome.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Welcome/>
    </>
  )
}

export default App
