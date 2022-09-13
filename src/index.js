import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';

import './utils/api/endpoints.js';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
