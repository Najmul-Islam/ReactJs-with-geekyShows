import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <>
                <h1>Welcome Rahul</h1>
                <button onClick={this.props.clickData}>Logout</button>
            </>
        );
    }
}

export default User;