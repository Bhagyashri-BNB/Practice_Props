import React from 'react'
import { useState } from 'react'
const UseStateHook = () => {
    const [counter, setCounter] = useState(0)

    const Increment=()=>{
        setCounter(counter+1);
    }
    const Decrement=()=>{
        setCounter(counter-1);
    }
  return (
    <div>
        {counter}<br></br>
        <button onClick={Increment}>Increment</button><br></br>
        <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default UseStateHook