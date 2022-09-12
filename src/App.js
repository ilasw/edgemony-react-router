import React, { useState } from 'react';
import './style.css';

import { Home, Catalog } from './pages';

export default function App() {
  const [route, setRoute] = useState('home');

  return (
    <div>
      <nav>
        <ul>
          {['home', 'catalog'].map((key) => (
            <li key={key}>
              <button disabled={route === key} onClick={() => setRoute(key)}>
                {key}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {route === 'home' && <Home />}
      {route === 'catalog' && <Catalog />}
      {route === 'recipe' && <Recipe />}
    </div>
  );
}
