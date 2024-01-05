import React, { useState } from "react";

export default function App() {
    const [, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const checkPass = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        if (newPassword.length >= 4) {
            setMessage('This password is valid');
        } else {
            setMessage('The password must be at least 4 characters');
        }
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            fontFamily: 'Arial, sans-serif',
        },
        title: {
            fontSize: '2rem',
            marginBottom: '20px',
            color: '#333',
        },
        inputContainer: {
            marginBottom: '20px',
        },
        label: {
            fontSize: '1rem',
            marginRight: '10px',
            color: '#333',
        },
        input: {
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            width: '200px',
        },
        message: {
            fontSize: '1rem',
            color: '#333',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Password Checker</h1>
            <div style={styles.inputContainer}>
                <label htmlFor="password" style={styles.label}>Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={checkPass}
                    style={styles.input}
                />
            </div>
            <div style={styles.message}>
                <h2>{message}</h2>
            </div>
        </div>
    );
}
