import React from 'react'

const InputBox = ({amount , label , onAmountChange , options=[] , disable=false , onCurrencyChange , selected}) => {
  return (
    <>
    <form className="mx-5 mt-5" >
      <label htmlFor="amount"  className="form-label fs-2 ">{label}</label>
      <input className="form-control mb-2" placeholder='0' id ="amount" type="number" value={amount} onChange={(e)=>{
        onAmountChange && onAmountChange(Number(e.target.value))
       }} disabled={disable} />
      <select class="form-select" value={selected} onChange={(e)=>{
        onCurrencyChange && onCurrencyChange(e.target.value)
      }}>
       { options.map((curr) => {
         return ( <option value={curr} key={curr}>{curr}</option>)
        })}
      </select>
    </form>
    </>
  )
}

export default InputBox