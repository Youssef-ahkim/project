import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Login from "./Login";
import Home from "./Home"

export default function App() {



  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/"  exact Component={Login}  />
      </Routes>
    </BrowserRouter>
  
    </>
  );
}
