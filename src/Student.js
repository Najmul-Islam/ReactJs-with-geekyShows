import React, { Component } from 'react'
import Marks from './Marks'

class Student extends Component {
  constructor(){
    super()
    this.state = {
      roll: 101
    }
  }

  clickHandle = () => {
    console.log("button click");
    this.setState({roll: 202})
  }

  render() {
    console.log("student rendered");
    return (
      <div>
        <Marks roll={this.state.roll} />

        <button onClick={this.clickHandle}>Change </button>
      </div>
    )
  }
}

export default Student;