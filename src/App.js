import React, { createContext, useState } from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Category, ErrorPage, TestPage } from './pages';
import { Navbar } from './components/navbar/navbar.jsx';

export const CounterContext = createContext(0);

export default function App() {
  const [state, setState] = useState(0)
  return (
    <CounterContext.Provider value={{state, setState}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Home />} />
          <Route path="/catalogo/:categoryName" element={<Category />} />
          <Route
            path="/catalogo/:categoryName/:status/:name"
            element={<Category />}
          />
          <Route
            path="/catalogo/:categoryName/new"
            element={<ErrorPage status={500} />}
          />
          <Route path="/test" element={<TestPage />} />
          <Route path="*" element={<ErrorPage name="prova" status={404} />} />
        </Routes>
      </BrowserRouter>
    </CounterContext.Provider>
  );
}
