import { useState,useEffect, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [isClicked, setIsClicked]= useState(false)

  const generatePassword=useCallback(()=>{
    let pass=""
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) str+='0123456789'
    if (charAllowed) str+='!@#$%^&+_-'
    for (let i = 0; i < length; i++) {
      pass+=str.charAt(Math.floor(Math.random()*str.length+1))
    }

    setPassword(pass)
  },[length,numberAllowed,charAllowed])

  useEffect(()=>{
    generatePassword()
    setIsClicked(false)
  },[length,numberAllowed,charAllowed])

  const copyToClipboard= () => {
    window.navigator.clipboard.writeText(password)
  }

  const handleClick=()=>{
    copyToClipboard()
    setIsClicked(true)
  }

  return (
    <div className='bg-slate-800 justify-self-center rounded-3xl shadow-lg shadow-slate-600 my-20 py-10 px-5 w-auto'>
      <h1 className='text-center text-2xl'>Password Generator</h1>
        <div className='flex shadow overflow-hidden rounded-3xl mb-3 mt-8 md:mx-10'>
          <input type="text" className='outline-none w-full py-2 px-3 cursor-not-allowed' readOnly placeholder='Password' value={password}/>
          <button className={`min-w-24 text-black px-3 py-0.5 font-mono overflow-hidden ${!isClicked ? 'bg-orange-500' : 'bg-green-500'}`} onClick={handleClick}>{isClicked?'copied!':'copy'}</button>
        </div>
        <div className='table-auto justify-self-center border-spacing-2 md:flex md:gap-x-2 '>
          <tr>
            <td className='w-24'><label htmlFor="length">Length: {length}</label></td>
            <td><input
            className='w-44 cursor-grabbing'
            type="range"
            min={5}
            max={15}
            name="length"
            value={length}
            onChange={(e)=>setLength(e.target.value)}
            /></td>
          </tr>
          <tr>
            <td className='text-right'>
              <input className='cursor-pointer'
              type="checkbox"
              name="num"
              defaultChecked={numberAllowed}
              onChange={()=>{
                setNumberAllowed((prev) => !prev)
              }}
               />
              </td>
            <td>
              <label htmlFor="num">Numbers</label>
              </td>
          </tr>
          <tr>
            <td className='text-right'>
              <input
              className='cursor-pointer'
              type="checkbox"
              name="spl"
              defaultChecked={charAllowed}
              onChange={()=>{
                setCharAllowed((prev)=> !prev)
              }}
              />
              </td>
            <td>
              <label htmlFor="spl">Special Characters</label>
              </td>
          </tr>
        </div>
      </div>
  )
}

export default App
