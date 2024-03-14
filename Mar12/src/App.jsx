import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Selector from "./components/Selector";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
      </div>
      <h1>Selector</h1>
      <div className="card">
        <Selector />
        <h1> Vite + React + MUI </h1>
        <p> imported components from MUI</p>
      </div>
      <p className="read-the-docs">
       
      </p>
    </>
  )
}

export default App
