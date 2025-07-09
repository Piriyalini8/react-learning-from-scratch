import React from "react";

// Functional component

// function Greet(){
//     return <h1>Hello Priya</h1>
// }

// define it as ES6 arrow function
const Greet = props => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            <p>{props.children}</p>
        </div>
    )
}

export default Greet;