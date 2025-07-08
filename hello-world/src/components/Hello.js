import React from "react";

const Hello = () => {
    // // Component with JSX
    // return <div className="dummyClass" id="hello">
    //     <h1>Hello Priya....</h1>
    // </div>

    // Component without jsx
    return React.createElement(
        'div', 
        {id:'hello', className:'dummyClass'}, 
        React.createElement('h1', null, 'Hello Priya...')
    )
}

export default Hello