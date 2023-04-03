import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
const UseEffect = () => {
    const [count, setCount] = useState(0)
    const [calculation, setCalculation] = useState(0)

    useEffect(() => {
      setCalculation(()=>count*2); 
    // setCalculation(count*2)
    }
    ,[count])

    const handleClick = () =>{
        
    }
    
      
    console.log("useEffect")
  return (
    <div>
        {count}
        <button onClick={() => setCount((name) => name + 1)}>Click</button>
        {/* <button onClick={()=> setCount(count+1)}>Click</button> */}
        {calculation}
    </div>
  )
}

export default UseEffect