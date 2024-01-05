import React, { useState } from 'react';

export default function EX1() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  function handleName(event) {
    setName(event.target.value);
  }

  function handleLastName(event) {
    setLastName(event.target.value);
  }

  function handleMessage() {
    setMessage("Your name is: " + name + " " + lastName);
  }

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '400px',
      margin: 'auto',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f7f7f7',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '5px 0',
      boxSizing: 'border-box',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    button: {
      width: '100%',
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '12px',
      margin: '8px 0',
      boxSizing: 'border-box',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
    },
    message: {
      marginTop: '20px',
      fontStyle: 'italic',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <label>Name:</label>
      <input
        type='text'
        onChange={(event) => handleName(event)}
        style={styles.input}
      />
      <label>Lastname:</label>
      <input
        type='text'
        onChange={(event) => handleLastName(event)}
        style={styles.input}
      />
      <button onClick={handleMessage} style={styles.button}>
        Click
      </button>
      <div style={styles.message}>{message}</div>
    </div>
  );
}
