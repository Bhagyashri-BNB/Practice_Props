import React from 'react'

export const Component3 = () => {
    const Component=React.memo(()=>{
        console.log("Component 3 Rendered");
    })

    // console.log("Component 3 rendered")
  return (
    <div>Component3</div>
  )
}
