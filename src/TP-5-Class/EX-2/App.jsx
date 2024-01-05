import React, { Component } from "react";
import './App.css'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            message: ''
        }
    }

    checkPass = (e) => {
        const newPassword = e.target.value;
        this.setState({ password: newPassword }, () => {
            if (newPassword.length >= 4) {
                this.setState({ message: 'This password is valid' })
            } else {
                this.setState({ message: 'The password must be at least 4 characters' })
            }
        });
    }

    render() {
        return (
            <div className="container">
                <h1>Password Checker</h1>
                <div className="input-container">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" onChange={(e) => this.checkPass(e)} />
                </div>
                <div className="message">
                    <h2>{this.state.message}</h2>
                </div>
            </div>
        )
    }
}
