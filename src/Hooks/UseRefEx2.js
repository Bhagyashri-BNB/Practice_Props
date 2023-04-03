import React, { useRef } from 'react'
import UseRef from './UseRef';

const UseRefEx2 = () => {
    const myElement=useRef();

    const handleClick=()=>{
        myElement.current.style.background='blue'
    }
  return (
    <div>
        <input ref={myElement}></input>
        <button onClick={handleClick}>Click to Change color</button>
    </div>
  )
}

export default UseRefEx2