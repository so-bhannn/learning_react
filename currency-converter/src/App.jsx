import { useEffect, useState } from 'react'
import { Inputbox } from './components/index.js'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const[amount,setAmount]=useState(1)
  const[convertedAmount,setConvertedAmount]=useState(0)
  const[from,setFrom]=useState('usd')
  const[to,setTo]=useState('inr')

  const currencyInfo = useCurrencyInfo(from);
  const options=Object.keys(currencyInfo)

  const convert=()=>{
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2))
  }
  useEffect(()=>{
    convert()
  },[to, from, amount, currencyInfo])

  const swap=()=>{
    setFrom(to)
    setTo(from)
  }

  return (
  <div className='w-full h-screen bg-[url("./assets/currency-bg.jpg")] flex justify-center items-center'>
    <div className='w-2/5 h-1/2 bg-black/30 backdrop-blur-sm border-solid border-white/40 border-2 rounded-xl'>
      <Inputbox
      label="from"
      amount={amount}
      onCurrencyChange={(currency)=>setFrom(currency)}
      onAmountChange={(amount)=>setAmount(amount)}
      availableCurrency={options}
      selectedCurrency={from}
      />
      <div className='relative w-full h-0.5'>
          <button
          className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
          onClick={swap}
          >Swap</button>
        </div>
      <Inputbox
      label="to"
      amount={convertedAmount}
      onCurrencyChange={(currency)=>setTo(currency)}
      availableCurrency={options}
      selectedCurrency={to}
      amountDisabled={true}
      />
      </div>
    </div>
  )
}

export default App
