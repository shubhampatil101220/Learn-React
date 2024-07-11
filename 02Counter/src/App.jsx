import { useState } from 'react'

import './App.css'

function App() {
 let [counter,setCounter] =useState(0);
 const addvalue= ()=>{
 
  console.log("calling addvalue");
  setCounter(counter +1)
 }

  return (
    <>
    
      <h1>Shubham Patil aa| Counter Project</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={()=>{
        setCounter(counter+1)}}>Add Value</button>
      <button onClick={()=>{
        if(counter>0) setCounter(counter-1)}} >Remove Value</button>
    </>
  )
}

export default App
