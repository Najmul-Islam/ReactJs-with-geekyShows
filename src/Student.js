import React, { Component } from 'react';

class Student extends Component {
  componentDidMount(){
    console.log("Studnet Mounted");
  }
  render() {
    console.log("Sutdent Rendered");

    return (
      <div>
        <h1>Hello Studnet Component</h1>
      </div>
    );
  }
}

export default Student;