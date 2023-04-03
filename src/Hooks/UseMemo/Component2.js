import React from 'react'

const Component2 = () => {
    const Component2= React.memo(()=>{
        console.log("Component 2 rendered");

    });
    // console.log("Component 2 rendered");
  return (
    <div>Component2</div>
  )
}

export default Component2