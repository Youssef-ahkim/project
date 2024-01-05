// ListeArticles.js

import React from 'react';
import { Link } from 'react-router-dom';
import './stylesList.css'; // Import the CSS file

const ListeArticles = () => {
  const data = JSON.parse(localStorage.getItem('data')) || [];

  return (
    <div className="container">
      <h1>Liste des articles</h1>
      <ul>
        {data.map((el) => (
          <li key={el.id}>
            ID: {el.id} | Prix: {el.prix} DH | Designation: {el.designation} | 
            <Link to={`/detail/${el.id}`}>Détails</Link>
          </li>
        ))}
      </ul>
      <p>
        <Link to="/">retour</Link>
      </p>
    </div>
  );
};

export default ListeArticles;
