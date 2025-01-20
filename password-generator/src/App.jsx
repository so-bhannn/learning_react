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
        <div className='flex shadow overflow-hidden rounded-3xl mb-3 mt-8 md:mx-10'>
          <input type="text" className='outline-none w-full py-2 px-3 cursor-not-allowed' readOnly placeholder='Password' value={password}/>
          <button className='bg-orange-500 text-black px-3 py-0.5 font-mono'>copy</button>
        </div>
        <div className='table-auto justify-self-center border-spacing-2 md:flex md:gap-x-2 '>
          <tr>
            <td><label htmlFor="length">Length: {length}</label></td>
            <td><input className='w-44 cursor-grabbing' type="range" min={5} max={15} name="length" id="" /></td>
          </tr>
          <tr>
            <td className='text-right'><input className='cursor-pointer' type="checkbox" name="num" id="" /></td>
            <td><label htmlFor="num">Numbers</label></td>
          </tr>
          <tr>
            <td className='text-right'><input className='cursor-pointer' type="checkbox" name="spl" id="" /></td>
            <td><label htmlFor="spl">Special Characters</label></td>
          </tr>
        </div>
      </div>
    </>
  )
}

export default App
