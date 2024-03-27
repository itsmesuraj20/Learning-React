import React from 'react'
import { useState } from 'react';



const CounterComponent = () => {

    const [count,setCount] = useState(0);
    // const[value,setValue] = useState("Suraj Singh");
  return (
    <div>
    <p>CounterComponent = {count}</p>
    <h6>Number is {count % 2 === 0? "Even" : "Odd"}</h6>
    <button onClick={()=>setCount(count+1)}>Increase</button>
    <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}

export default CounterComponent;