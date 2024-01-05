import React from 'react';
import Navigation from './Navigation';
const flexCenterColumn = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
};

const Home = () => {
  return (
    <div style={flexCenterColumn}>
      <h1>Bienvenue sur la page d'accueil !</h1>
      <Navigation />
    </div>
  );
};

export default Home;
