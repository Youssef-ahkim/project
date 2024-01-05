import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from "./About"; // Fix the import statement here
import Users from "./Users";
import Navigation from "./Navigation";
export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}
