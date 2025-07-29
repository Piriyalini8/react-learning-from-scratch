import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    
  render() {
    // // 1. if/else for conditional rendering
    // if(this.state.isLoggedIn){
    //     return(
    //         <div>Hello Priya</div>
    //     )
    // } else{
    //     return(
    //         <div>Hello Guest</div>
    //     )
    // }

    // // 2. Element variables
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Hello Priya</div>
    // } else {
    //     message = <div>Hello Guest</div>
    // }
    // return <div>{message}</div>
    
    // // 3. Ternery Conditional Operator
    // return this.state.isLoggedIn ? (
    //     <div>Welcome Priya</div>
    // ) : (
    //     <div>Welcome Guest</div>
    // )

    // 4. Short Curcuit Operator
    return this.state.isLoggedIn && <div>Welcome Priya</div>
  }
}

export default UserGreeting
