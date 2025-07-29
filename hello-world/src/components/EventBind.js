import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }
      {/* 3. bind handler inside constructor */}
    //   this.clickHandler = this.clickHandler.bind(this)
    }

    // used for methods 1,2,3
    // clickHandler(){
    //     this.setState({
    //         message:'Good Bye'
    //     })
    //     console.log('clicked')
    // }

    // 4. use an arrow function as class property
    clickHandler = () => {
        this.setState({
            message:'Good Bye'
        })
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* 1. bind handler inside render method */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button>         */}

        {/* 2. use arrow function in the render method */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* 3. bind handler inside constructor. Mostly useful and accepted way*/}
        {/* <button onClick={this.clickHandler}>Click</button> */}

        {/* 4. use an arrow function as class property */}
        <button onClick={this.clickHandler}>Click</button>

      </div>
    )
  }
}

export default EventBind
