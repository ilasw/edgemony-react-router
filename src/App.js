import React, { createContext, useState } from 'react';
import './style.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home, Category, ErrorPage, Recipe, TestPage } from './pages';
import { Navbar } from './components/navbar/navbar.jsx';
import { RecipeYouTube } from './components/recipe-youtube/recipe-youtube.jsx';
import { RecipeInstructions } from './components/recipe-instructions/recipe-instructions.jsx';
import { RecipeIngredients } from './components/recipe-ingredients/recipe-ingredients.jsx';

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
            <Route index element={<Navigate to="/" />} />

            <Route path=":categoryName">
              <Route path="" element={<Category />} />

              <Route path=":recipeName/:id" element={<Recipe />}>
                <Route path="" element={<Navigate to="./istruzioni" />} />
                <Route path="istruzioni" element={<RecipeInstructions />} />
                <Route path="youtube" element={<RecipeYouTube />} />
                <Route path="ingredienti" element={<RecipeIngredients />} />
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
