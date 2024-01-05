import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./stylesAjoute.css"

const AjouterArticle = () => {
  const [id, setID] = useState(0);
  const [Designation, setDesignation] = useState('');
  const [prix, setprix] = useState(0);
  const [description, setdescription] = useState('');

  const handelSubmit = () => {
    try {
      const existingData = JSON.parse(localStorage.getItem('data')) || [];
      const newData = {
        id: id,
        designation: Designation,
        prix: prix,
        description: description
      };
      const updatedData = [...existingData, newData];
      localStorage.setItem('data', JSON.stringify(updatedData));
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div className="container">
  <h1>Ajouter Nouveaux Article</h1>
  <form>
    <div className="form-group">
      <label htmlFor="id">ID:</label>
      <input
        type="text"
        id="id"
        value={id}
        onChange={(e) => setID(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label htmlFor="designation">Designation:</label>
      <input
        type="text"
        id="designation"
        value={Designation}
        onChange={(e) => setDesignation(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label htmlFor="prix">Prix:</label>
      <input
        type="text"
        id="prix"
        value={prix}
        onChange={(e) => setprix(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />
    </div>
    <button type="button" onClick={handelSubmit}>Insérer</button>
  </form>
  <p>
    <Link to="/">Retour</Link>
  </p>
</div>

  );
};

export default AjouterArticle;
