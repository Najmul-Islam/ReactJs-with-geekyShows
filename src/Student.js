import React, { Component } from 'react';
import Marks from './Marks'

class Student extends Component {
  constructor(){
    super()
    this.state = {
      roll: 101
    }
  }

  clickHandle = () => {
    console.log("Button Clicked");
    this.setState({
      roll: this.state.roll + 2
    })
  }

  render() {
    console.log("Student Rendered");
    return (
      <div>
        <Marks roll={this.state.roll} />
        {/* <h1>{this.state.roll}</h1> */}
        <button onClick={this.clickHandle}>Change</button>
      </div>
    );
  }
}

export default Student;