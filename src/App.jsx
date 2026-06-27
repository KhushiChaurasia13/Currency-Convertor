import { useEffect, useState } from "react";
import { CurrencyInfo } from "./CurrencyInfo";
import InputBox from "./InputBox";

function App(){
  const [from ,setFrom] = useState("USD");
  const [to ,setTo] = useState("INR");
  const [amount ,setAmount] = useState("");
  const [convertedAmount ,setConvertedAmount] = useState("");

  const currency = CurrencyInfo(from);
  const option = Object.keys(currency)
  console.log(option)

  useEffect(()=>{
    const convert = (amount)=>{
     if(from == to) {
      setConvertedAmount(amount);
     } else {
      let change = currency[to];
      change *= amount;
      setConvertedAmount(change);
    }}
    convert(amount)
  },[amount , from , to])
  
  return(
    <>
      <h1 className="text-center mt-5 text-body-secondary">Currency Convertor</h1>
      <InputBox amount={amount} label="From" onAmountChange={setAmount} onCurrencyChange={setFrom} selected={from} options={option}/>
      <InputBox amount={convertedAmount} label="To"  onCurrencyChange={setTo} selected={to} disable={true} options={option}/>
    </>
  );
}

export default App 