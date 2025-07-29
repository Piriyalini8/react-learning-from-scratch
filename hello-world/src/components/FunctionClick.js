import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("Button clicked")
    }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      {/* <button onClick={clickHandler}>Click</button>
      this is not event handling. event handling should be a function. Not a function call.
      So should not add parenthesies here */}
    </div>
  )
}

export default FunctionClick
