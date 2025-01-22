import React from "react";
import { useState } from "react";

function Inputbox({

}){
    return(
        <div className="h-2/5 bg-black/30 text-md m-6 p-5 flex rounded-xl">
            <div className="w-1/2">
            <div className="flex flex-wrap">
                <label htmlFor=""
                className="inline-block m-2 text-white"
                >
                    from
                </label>
                <input type="number"
                className="outline-none border-solid border-black/20 w-full bg-white/80 rounded-lg"
                name=""
                id="" />
                </div>
            </div>
            <div className="w-1/2">
            <div className="flex flex-wrap text-right justify-end">
                <label htmlFor=""
                className="inline-block m-2 text-white">
                    Currency Type
                </label>
                <select 
                className="outline-none border-solid border-black/20 w-5/6 bg-white/80 rounded-lg"
                name="" 
                id="">
                    <option key="usd" value="usd" className="bg-green-600 hover:bg-red-600">usd</option>
                    <option key="inr" value="inr" className="bg-transparent hover:bg-red-600">inr</option>
                </select>
                </div>
            </div>
        </div>
        
    )
}

export {Inputbox}