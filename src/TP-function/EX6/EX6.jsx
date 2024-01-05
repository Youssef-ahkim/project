import React, { useState } from 'react';
import "./EX6.css"

export default function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [click, setClick] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const handleClick = () => {
        setClick(true);
    }

    return (
        <div className='app'>
            <div className='input-group'>
                <label>Prenom:</label>
                <input type='text' onChange={handleName} />
            </div>

            <div className='input-group'>
                <label>Email:</label>
                <input type='text' onChange={handleEmail} />
            </div>

            <div className='input-group'>
                <label>Message:</label>
                <textarea onChange={handleMessage} />
            </div>

            <input type='button' onClick={handleClick} value={'Click'} />

            {click && (
                <div className='output'>
                    <h2>Output:</h2>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Message: {message}</p>
                </div>
            )}
        </div>
    );
}
