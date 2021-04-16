import React, { Component } from 'react';

class App extends Component {
    componentDidMount(){
        console.log("App Mounted");
    }

    componentWillUnmount(){
        console.log("App Unmounted");
    }

    render() {
        console.log("App Rendered");
        
        return (
            <div>
                <h1>Hello App Component</h1>
            </div>
        );
    }
}

export default App;