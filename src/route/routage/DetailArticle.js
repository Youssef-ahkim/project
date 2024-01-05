import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DetailArticle = () => {
  const { id } = useParams();
  const data = JSON.parse(localStorage.getItem('data')) || [];
  const detailsData = data.filter((e) => e.id === id)[0];
  return (
    <div>
      <h1>Détail de l'article #{id}</h1>
      {detailsData && (
        <div>
          <p>ID: {detailsData.id}</p>
          <p>Prix: {detailsData.prix}</p>
          <p>Designation: {detailsData.designation}</p>
          <p>Description: {detailsData.description}</p>
        </div>
      )}
       <p>
        <Link to="/">retour</Link>
      </p>
    </div>
  );
};

export default DetailArticle;
