import React, { Component } from "react";

// Class component
// try some changes
class Welcome extends Component{
    render(){
        const {name,heroName} = this.props
        const {state1, state2} = this.state
       return (
        <div>
        <h1>Welcome {name} a.k.a {heroName}</h1>
        <p>{this.props.children}</p>
       </div>
       )
    }
}

export default Welcome