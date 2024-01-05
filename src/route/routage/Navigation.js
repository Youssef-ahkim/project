import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='list'>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/ajouter-article">Ajouter un article</Link></li>
        <li><Link to="/liste-articles">Liste des articles</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
