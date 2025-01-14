import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('white')
  const [selectedColor, setSelectedColor] = useState('')

  const handleColorChange = (color) => {
    setColor(color)
    setSelectedColor(color)
  }

  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor: color}}>
        <div className='grid justify-center content-center h-screen'>
          <div className='bg-white px-3 py-2 rounded-3xl shadow-lg font-mono text-lg'>{selectedColor}</div>
          </div>
        <div className="flex flex-wrap fixed bottom-12 justify-center inset-x-0 px-2">
          <div className="flex flex-wrap justify-center space-x-3 bg-white px-3 py-2 rounded-3xl shadow-lg">
            <button 
              className={`bg-gray-300 h-8 outline-none px-4 py-1 rounded-full text-black shadow-lg ${selectedColor === '#d1d5db ' ? 'outline outline-2 outline-blue-400' : ''}`} 
              onClick={()=>{handleColorChange('#d1d5db ')}}
            ></button>
            <button 
              className={`bg-red-600 h-8 outline-none px-4 py-1 rounded-full text-black shadow-lg ${selectedColor === '#dc2626' ? 'outline outline-2 outline-blue-400' : ''}`} 
              onClick={()=>{handleColorChange('#dc2626')}}
            ></button>
            <button 
              className={`bg-green-600 outline-none px-4 py-1 rounded-full text-black shadow-lg ${selectedColor === '#16a34a' ? 'outline outline-2 outline-blue-400' : ''}`} 
              onClick={()=>{handleColorChange('#16a34a')}}
            ></button>
            <button 
              className={`bg-blue-600 outline-none px-4 py-1 rounded-full text-black shadow-lg ${selectedColor === '#2563eb' ? 'outline outline-2 outline-blue-400' : ''}`} 
              onClick={()=>{handleColorChange('#2563eb')}}
            ></button>
            <button 
              className={`bg-slate-800 outline-none px-4 py-1 rounded-full text-black shadow-lg ${selectedColor === '#1e293b' ? 'outline outline-2 outline-blue-400' : ''}`} 
              onClick={()=>{handleColorChange('#1e293b')}}
            ></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App