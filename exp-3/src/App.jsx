import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ArmaanCafe from './components/ArmaanCafe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ArmaanCafe />
      

      <p className="read-the-docs">
        Have a Good Day!!!
      </p>
    </>
  )
}

export default App
