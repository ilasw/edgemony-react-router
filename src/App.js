import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './style.scss';
import { Navbar } from './components/navbar/navbar.jsx';

export const CounterContext = createContext(0);

export default function App() {
  const [state, setState] = useState(0);
  return (
    <CounterContext.Provider value={{ state, setState }}>
      <Navbar />
      <Outlet />
    </CounterContext.Provider>
  );
}
