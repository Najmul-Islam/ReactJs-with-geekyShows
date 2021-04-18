import React, { Component } from 'react';

class Users extends Component {
    render() {
        return <li>{this.props.value}</li>
    }
}

export default Users;