import React, { createContext, useState } from 'react';
import './style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Category, ErrorPage, Recipe, TestPage } from './pages';
import { Navbar } from './components/navbar/navbar.jsx';
import { YouTubePlayer } from './components/youtube-player/youtube.jsx';

export const CounterContext = createContext(0);

export default function App() {
  const [state, setState] = useState(0);
  return (
    <CounterContext.Provider value={{ state, setState }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/catalogo">
            <Route index element={<Home />} />

            <Route path=":categoryName">
              <Route path="" element={<Category />} />

              <Route path=":recipeName/:id" element={<Recipe />}>
                <Route path="" element={'Sei nella index della ricetta'} />
                <Route path="youtube" element={<YouTubePlayer />} />
              </Route>
            </Route>
          </Route>

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
