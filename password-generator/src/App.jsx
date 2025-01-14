import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center items-center mt-5 '>
      <h1 className='text-2xl'>Password Generator</h1>
    </div>
    </>
  )
}

export default App
