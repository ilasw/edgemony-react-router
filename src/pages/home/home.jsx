import React from 'react';

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <a
        href="/catalogo"
        title="Vedi tutte le ricette"
        ariaLabel="Vedi tutte le ricette"
      >
        Vai al catalogo
      </a>
    </div>
  );
};

export default Home;
