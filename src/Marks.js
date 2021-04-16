import React, { Component } from 'react';

class Marks extends Component {
    render() {
        console.log("Marks - Rendered [Child of Student]");
        return (
            <div>
                <h1>Marks Component</h1>
            </div>
        );
    }
}

export default Marks;