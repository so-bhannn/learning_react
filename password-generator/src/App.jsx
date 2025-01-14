import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState('5')

  return (
    <>
    <div className='bg-slate-800 justify-self-center rounded-3xl shadow-lg shadow-slate-600 my-20 py-10 px-5'>
      <h1 className='text-center text-2xl'>Password Generator</h1>
        <div className='flex shadow overflow-hidden rounded-3xl mb-3 mt-8 mx-10'>
          <input type="text" className='outline-none w-full py-1 px-3' readOnly placeholder='Password' value={password}/>
          <button className='bg-orange-500 text-black px-3 py-0.5 font-mono'>copy</button>
        </div>
        <div className='flex justify-center space-x-3'>
          <label htmlFor="length">Length: {length}</label>
          <input type="range"  min={5} max={15} name="" id="" />
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Numbers</label>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Special Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
