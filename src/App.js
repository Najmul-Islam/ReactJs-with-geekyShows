import React, { Component } from 'react';
import Users from './Users'

class App extends Component {
    render() {
        const arr = this.props.numbers

        const newArr = arr.map((num) => {
            return <Users key={num} value={num}/>
        })

        return (
            <div>
                <ul>{newArr}</ul>
            </div>
        );
    }
}

export default App;