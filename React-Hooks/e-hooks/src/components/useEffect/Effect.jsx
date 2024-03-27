import React from 'react'
import { useEffect,useState } from 'react'
const Effect = () => {

    const [count , setCount] = useState(0)

    useEffect(()=>{
        console.log("hello World")
    },[])

    useEffect(()=>{
        console.log("Suraj" + " " + count);
    },[count])
  return (

    <div>
    <h1>Effect - {count}</h1>
    <button onClick={() => setCount(count+1)}>Update</button>
    </div>
  )
}

export default Effect