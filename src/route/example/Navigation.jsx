import React from 'react'
import { Link } from'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/accueil">Accueil</Link></li>
        <li><Link to="/about">À propos</Link></li>
        <li><Link to="/users">Users</Link></li>      
      </ul>
    </nav>
  )
}