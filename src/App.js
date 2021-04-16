import React, { Component } from 'react';
import Student from './Student'

class App extends Component {
    constructor(props){
        super(props);
        console.log("app - constructor called");
        console.log(props);

        this.state = {
            roll: "101"
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log("App - Get derived state from props");
        console.log(props, state);
        return null;
    }

    componentDidMount(){
        // Get data from server and st the data to
        console.log("App - componentDidMount - Mounted");
    }

    render() {
        console.log("App - Rendered");
        return (
            <div>
                <Student name="Rahul" />
            </div>
        );
    }
}

export default App;