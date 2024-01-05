import React from 'react';
import Navigation from './navigation';

const flexCenterColumn = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
};

const Home = () => {
  return (
    <div style={flexCenterColumn}>
      <h1 className='font-mono  mb-6 text-4xl uppercase underline'>Welcome to home page !</h1>
      <Navigation />
    </div>
  );
};

export default Home;
