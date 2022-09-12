import React, { useState } from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Catalog } from './pages';
import { Navbar } from './components/navbar/navbar.jsx';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="*" element={<div>Pagina non trovata</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
