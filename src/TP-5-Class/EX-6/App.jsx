import React, { Component } from 'react';
import './App.css'; // Assuming you have a CSS file named App.css

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {name : '' , email : '' , message : '' , click : false}
    }

    handleName(e){
        let newName = e.target.value;
        this.setState({name : newName})
    }

    handleEmail(e){
        let newEmail = e.target.value;
        this.setState({email : newEmail})
    }

    handleMessage(e){
        let newMessage = e.target.value;
        this.setState({message : newMessage})
    }
 
    handleClick = () => {
        this.setState({click : true})
    }
  render() {
    return (
      <div className='app'>
        <div className='input-group'>
          <label>Prenom:</label>
          <input type='text' onChange={(e) => this.handleName(e)} />
        </div>

        <div className='input-group'>
          <label>Email:</label>
          <input type='text' onChange={(e) => this.handleEmail(e)} />
        </div>

        <div className='input-group'>
          <label>Message:</label>
          <textarea onChange={(e) => this.handleMessage(e)} />
        </div>

        <input type='button' onClick={this.handleClick} value={'Click'} />

        {this.state.click && (
          <div className='output'>
            <h2>Output:</h2>
            <p>Name: {this.state.name}</p>
            <p>Email: {this.state.email}</p>
            <p>Message: {this.state.message}</p>
          </div>
        )}
      </div>
    );
  }
}
