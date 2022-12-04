import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { AuthContextProvider, RouterProvider, UserContextProvider } from './providers';

import './css/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import { PostsContextProvider } from './providers/PostsContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostsContextProvider>
      <AuthContextProvider>
        <UserContextProvider>
          <RouterProvider>
            <App />
          </RouterProvider>
        </UserContextProvider>
      </AuthContextProvider>
    </PostsContextProvider>
  </React.StrictMode>
);
