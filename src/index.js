import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import your main App component
// import './index.css'; // If you had a separate CSS file for global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
