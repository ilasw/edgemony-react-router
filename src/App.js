import React, { useState } from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Catalog, ErrorPage } from './pages';
import { Navbar } from './components/navbar/navbar.jsx';
import { ENDPOINTS } from './utils/api/endpoints.js';
import { useFetch } from './utils/api/use-fetch.js';

export default function App() {
  const { data, loading, error } = useFetch(ENDPOINTS.CATEGORIES);
  console.log({ data, loading, error });
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {loading && 'Caricando...'}
        {!!error && 'Si è verificato un errore!'}
        {data ? <div>{JSON.stringify(data)}</div> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="*" element={<ErrorPage name="prova" status={404} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
