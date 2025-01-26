import React, { useId } from "react";

function Inputbox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  availableCurrency=[],
  selectedCurrency='usd',
  amountDisabled=false,
}){
  const id=useId()
    return(
      <div className="h-2/5 bg-black/30 text-md m-6 p-5 flex rounded-xl">
        <div className="w-1/2">
        <div className="flex flex-wrap">
          <label htmlFor={id}
          className="inline-block m-2 text-white"
          >
            {label}
          </label>
          <input type="number"
          className="outline-none border-solid border-black/20 w-full bg-white/80 rounded-lg"
          name=""
          id={id}
          value={amount}
          disabled={amountDisabled}
          onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} />
          </div>
        </div>
        <div className="w-1/2">
        <div className="flex flex-wrap text-right justify-end">
          <label htmlFor={id}
          className="inline-block m-2 text-white">
            Currency Type
          </label>
          <select 
          className="outline-none border-solid border-black/20 w-5/6 bg-white/80 rounded-lg"
          name="" 
          id={id}
          onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
          value={selectedCurrency}
          >
              {availableCurrency.map((currency)=>(
                <option value={currency} key={currency}>{currency}</option>)
              )}
          </select>
          </div>
        </div>
      </div>
      
    )
}

export default Inputbox