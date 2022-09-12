import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      {/* todo: implementare aria-label */}
      <Link to="/catalogo" title="Vedi tutte le ricette">
        Vai al catalogo
      </Link>
    </div>
  );
};

export default Home;
