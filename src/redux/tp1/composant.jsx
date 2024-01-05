import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct } from './actions';

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '1em',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  input: {
    margin: '8px 0',
    padding: '8px',
    borderRadius : '7px',
    border : "1px solid black",
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    padding: '8px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  productList: {
    listStyle: 'none',
    padding: '0',
  },
  listItem: {
    marginBottom: '8px',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteButton: {
    padding: '8px',
    backgroundColor: '#ff6666',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }
};

const Composant = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productId, setProductId] = useState('');

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const handleAddProduct = () => {
    dispatch(addProduct(productId, productName, parseFloat(productPrice)));
    setProductName('');
    setProductPrice('');
  };

  const handleProductId = (event) => {
    setProductId(event.target.value)
  };

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
  };


  return (
    <div style={styles.container}>
      <h1>Ajouter un produit</h1>
      <label>ID :</label>
      <input
        type="text"
        value={productId}
        onChange={(event) => handleProductId(event)} 
        style={styles.input}
      />
      <label>Nom du produit:</label>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        style={styles.input}
      />
      <br />
      <label>Prix du produit:</label>
      <input
        type="text"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        style={styles.input}
      />
      <br />
      <button onClick={handleAddProduct} style={styles.button}>
        Ajouter le produit
      </button>
      <br />

      <h2>Liste des produits</h2>
      <ul style={styles.productList}>
        {products.map((product) => (
          <li key={product.id} style={styles.listItem}>
            ID : {product.id} -- {product.name} -- {product.price} DH
            <button onClick={() => handleDeleteProduct(product.id)} style={styles.deleteButton}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Composant;
