import React, { Component } from 'react'
import User from './User'
import Styles from "./App.module.css"

class App extends Component {
    
    render() {
        return (
            <React.Fragment>
                <button type="button" className="btn btn-primary">Normal Button</button>
            </React.Fragment>
        );
    }
}

export default App;