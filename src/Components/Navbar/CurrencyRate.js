import axios from 'axios'
import React,{useState, useEffect} from 'react'
import TopNavbar from "./TopNavbar"

function CurrencyRate() {
    const [currency, setCurrency] = useState([])
    const [firstVal, setfirstVal] = useState("")
    const [secondVal, setSecondVal] = useState("")
    
    const handleCurrency =(e)=>{
        setSecondVal(e.target.value)
    }

    useEffect(()=>{
        axios({
            method:"GET",
            url: "https://api.exchangeratesapi.io/v1/latest?access_key=79f8d2fa3a38f5adf9ed8da6c0e8667f"
        }).then(response=>response.json())
        .then(data=>{
            console.log(data)
            setCurrency([data.base, ...Object.keys(data.rates)])
            const first = Object.keys(data.rates)[0]
            setfirstVal(data.base)
            setSecondVal(first)
        })

        .then(err => console.log(err))
    }, [])

    return (
        <div style={{display: "flex", justifyContent:'space-around', width: "10%"}}>
           <TopNavbar  currency={currency} selectedVal={firstVal}/>
           <TopNavbar currency={currency} selectedVal ={secondVal} onChangeCurrency={handleCurrency}/> 
        </div>
    )
}

export default CurrencyRate
