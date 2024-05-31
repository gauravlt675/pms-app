import React from 'react';
import { createRoot } from 'react-dom/client'; // Import from react-dom/client
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root element

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);