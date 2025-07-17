import React from "react";

// Functional component

// function Greet(){
//     return <h1>Hello Priya</h1>
// }

// define it as ES6 arrow function
// const Greet = ({name,heroName}) => { //way one of destructuring props
const Greet = props =>{
    const {name, heroName} = props // way two of destructuring props
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1> 
            {/* in both ways of destructuring, we can directly use name & heroName. No need to use it as props.name like wise */}
        </div>
    )
}

export default Greet;