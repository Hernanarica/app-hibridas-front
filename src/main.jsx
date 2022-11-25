import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from './providers/RouterProvider';
import { App } from './App';

import './css/tailwind.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
