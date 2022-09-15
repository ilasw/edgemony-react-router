import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';
import App from './App.js';
import { Home, Category, ErrorPage, Recipe, TestPage } from './pages';
import { RecipeYouTube } from './components/recipe-youtube/recipe-youtube.jsx';
import { RecipeInstructions } from './components/recipe-instructions/recipe-instructions.jsx';
import { RecipeIngredients } from './components/recipe-ingredients/recipe-ingredients.jsx';

import { ENDPOINTS } from './utils/api/endpoints.js';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: async () => {
          return fetch(ENDPOINTS.CATEGORIES);
        },
      },
      {
        path: '/catalogo',
        element: <Navigate to={'/'} />,
      },
      {
        path: '/catalogo/:categoryName',
        children: [
          {
            path: '',
            element: <Category />,
            loader: ({ params }) => {
              return fetch(`${ENDPOINTS.FILTER}?c=${params?.categoryName}`);
            },
          },
          {
            path: ':recipeName/:id',
            element: <Recipe />,
            children: [
              { path: '', element: <div>Pagina principale</div> },
              { path: 'ingredienti', element: <RecipeIngredients /> },
              { path: 'istruzioni', element: <RecipeInstructions /> },
              { path: 'youtube', element: <RecipeYouTube /> },
            ],
          },
        ],
      },
      { path: '/test', element: <TestPage /> },
      { path: '*', element: <ErrorPage status={404} /> },
    ],
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
