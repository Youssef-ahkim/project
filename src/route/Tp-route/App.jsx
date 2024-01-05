import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Add from "./Add";
import Nav from "./Nav";

export default function App() {
  return (
    <BrowserRouter>
      <Nav text="Welcome to the app page" />

      {/* Routes */}
          <Link to="/add">Go to add</Link><br />
      <Routes>
        <Route path="/add" element={<Add />} />

      </Routes>
    </BrowserRouter>
  );
}
