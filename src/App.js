import React, { Component } from 'react';

class App extends Component {
    state = {
        users: [
            {id: 101, name: "Rahul", password: "3423ssdf"},
            {id: 102, name: "Sonam", password: "456ssdf"},
            {id: 103, name: "Sumit", password: "3344ssdf"}
         
        ],
        isLoggedIn: false
    }

    render() {
        const newUsers = this.state.users.map((user) => {
            return <h1>ID: {user.id} Name: {user.name} Password: {user.password} </h1>
        })
        return (
            <div>
                {newUsers}
            </div>
        );
    }
}

export default App;