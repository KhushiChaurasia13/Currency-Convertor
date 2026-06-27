import React, { useEffect, useState } from 'react'

export const CurrencyInfo = (currency) => {
  const [data , setData] = useState({});
  useEffect(()=>{  
    const fetchData = async()=>{
        const response = await fetch(`https://open.er-api.com/v6/latest/${currency}`);
        const json = await response.json();
        setData(json.rates);
    }
    fetchData();
  },[currency]);  
  return data;
}
