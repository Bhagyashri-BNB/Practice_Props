import React from 'react'
import { useState } from 'react'
import Component2 from './Component2'
import { Component3 } from './Component3'
export const Component1 = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h3>{count}</h3>
        <button type='text' onClick={()=> setCount(count+1)}>Click</button>
        <Component2/>
        <Component3/>
    </div>
  )
}
