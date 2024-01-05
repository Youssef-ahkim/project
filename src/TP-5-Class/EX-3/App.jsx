// Counter component
import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount,
      steps: props.steps
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + this.state.steps });
  }

  handleDecrement = () => {
    this.setState({ count: this.state.count - this.state.steps });
  }

  render() {
    const containerStyle = {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      maxWidth: '300px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff'
    };

    const headingStyle = {
      fontSize: '24px',
      marginBottom: '20px',
      color: '#333'
    };

    const countStyle = {
      fontSize: '36px',
      marginBottom: '20px',
      color: '#333'
    };

    const buttonStyle = {
      padding: '10px 20px',
      fontSize: '16px',
      margin: '0 10px',
      cursor: 'pointer',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      outline: 'none'
    };

    return (
      <div style={containerStyle}>
        <h1 style={headingStyle}>Counter</h1>
        <p style={countStyle}>Count: {this.state.count}</p>
        <button style={buttonStyle} onClick={this.handleIncrement}>Increment</button>
        <button style={buttonStyle} onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}
