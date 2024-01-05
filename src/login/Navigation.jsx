import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='list'>
        <li><Link to="/">Log in</Link></li>
        <li><Link to="./home">Home</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
