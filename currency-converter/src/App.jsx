import { useState } from 'react'
import './App.css'
import {Inputbox} from './components/Inputbox.jsx'

function App() {

  return (
    <div className='w-full h-screen bg-[url("./assets/currency-bg.jpg")] flex justify-center items-center'>
      <div className='w-2/5 h-1/2 bg-black/30 backdrop-blur-sm border-solid border-white/40 border-2 rounded-xl'>
        <Inputbox/>
        <Inputbox/>
      </div>
    </div>
  )
}

export default App
