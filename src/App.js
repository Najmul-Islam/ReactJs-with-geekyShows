import React, { Component } from 'react';
import Student from './Student'

class App extends Component {
    // constructor(props){
    //     super(props);
    //     console.log("APP - Constructor Called");
    //     console.log(props);
    //     this.state = {
    //         roll: "101"
    //     }
    // }

    // static getDerivedStateFromProps(props, state){
    //     console.log("App - Get Derived State From Props");
    //     console.log(props, state);

    //     return null
    // }

    render() {
        return (
            <div>
                <Student />
            </div>
        );
    }
}

export default App;