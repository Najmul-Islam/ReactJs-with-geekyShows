import React, { Component } from 'react';
import Styles from "./User.module.css";


class User extends Component {
    render() {
        return <h2 className={Styles.txt}>Hello Users</h2>
    }
}

export default User;