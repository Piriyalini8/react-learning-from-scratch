import React, { Component } from "react";

// Class component
// try some changes
class Welcome extends Component{
    render(){
       return (
        <div>
        <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
        <p>{this.props.children}</p>
       </div>
       )
    }
}

export default Welcome