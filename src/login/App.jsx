// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import userData from './Data';


const Home = () => {
  return <h1>Welcome to the Home Page!</h1>;
};

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    const user = userData.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setLoggedIn(true);
    } else {
      setErrorMessage('Incorrect username or password');
    }
  };

  return (
    <Router>
      <div>
        <h1>Login Page</h1>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>

      {loggedIn && <Navigate to="./home" />}

        <Routes>
          <Route path="./home" component={Home} />
        </Routes>

    </Router>
    
  );
}

export default App;
