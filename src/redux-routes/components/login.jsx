import React, { useState } from 'react';
import "../index.css"
import { useNavigate } from 'react-router-dom';
import { users } from '../data';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleLogin = () => {
    const matchedUser = users.find(user => user.username === username && user.password === password);

    if (matchedUser) {
      setError('');
      console.log('Login successful!');
      navigate("/Home"); 
    } else if (username === '' || password === '') {
      setError('Both username and password are required');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='flex justify-center items-center flex-col'>
      <h1 className="font-mono mb-6 text-4xl uppercase underline">Login</h1>
      <div className="w-2/5 m-8 border-2 rounded-xl p-10 border-gray-600 shadow-gray-500 shadow-2xl">
        <label htmlFor="username" className="mb-2 block text-gray-700 text-sm font-bold mb-2">
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-6 w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-700 focus:outline-none focus:shadow-xl focus:shadow-gray-500"
          placeholder="Enter your username"
        />
      
        <label htmlFor="password" className="mb-2 block text-gray-700 text-sm font-bold mb-2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6 w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-700 focus:outline-none focus:shadow-xl focus:shadow-gray-500"
          placeholder="Enter your password"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        >
          Login
        </button>
      </div>

      {error && <p className="absolute left-0 bottom-0 p-5 bg-red-300 rounded-lg mb-9">{error}</p>}
    </div>
  );
};

export default LoginPage;
