import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './style.scss';
import { Navbar } from './components/navbar/navbar.jsx';

export const CounterContext = createContext(0);

export default function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto">
          <Navbar />
        </div>
        <div className="col">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
