import React from 'react'

function TopNavbar(props) {
    const { currency, selectedVal, onChangeCurrency} = props
    return (
        <div>
           <select value={selectedVal} onChange={onChangeCurrency}>
               {currency.map((option, index)=>{
                 <options key={index}val={option}>{option}</options>
               })}
             
           </select> 
        </div>
    )
}

export default TopNavbar
