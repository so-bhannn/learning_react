import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setColor] = useState(0)

  return (
    <>
      <div className='bg-red-500 text-blue-200 w-full h-screen'>
        <div className="flex flex-wrap fixed bottom-12 justify-center inset-x-0 px-2">
          <div className="flex flex-wrap justify-center"></div>
          <button>red</button>
          <button>green</button>
          <button>blue</button>
        </div>
      </div>
    </>
  )
}

export default App