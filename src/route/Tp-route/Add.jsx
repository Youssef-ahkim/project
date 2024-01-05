import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Add(props) {
  return (
    <>
      <Nav text="Welcome to the add page" />
      <br />
      <Link to="/">Go to Home Page</Link>
      <br />
      ID : <input type="text" />
      <br />
      Désignation : <input type="text" />
      <br />
      Prix : <input type="text" />
      <br />
      Description : <textarea name="" id="" cols="30" rows="10"></textarea>
      <br />
      <button>Ajouter</button>
    </>
  );
}
