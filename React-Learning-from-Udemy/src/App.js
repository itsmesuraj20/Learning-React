import React from 'react'

function App({name , gender, age, college,contactNumber}) { //instead of sending Props , we can destruct it 
  return (
    <div>
        <h1 style={{color:"red", fontFamily:"arial" , fontSize : 100 }}>{name}</h1>
        <h1 style={{color:"red", fontFamily:"arial" , fontSize : 100 }}>{contactNumber}</h1>
        <h1 style={{color:"green", fontFamily:"arial" , fontSize : 100 }}>{gender}</h1>
        <h1 style={{color:"red", fontFamily:"arial" , fontSize : 100 }}>{age}</h1>
        <h1 style={{color:"red", fontFamily:"arial" , fontSize : 100 }}>{college}</h1>
    </div>
  )
}

export default App