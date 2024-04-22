import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import Blog from './pages/Blog';
import './styles/tailwind.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AnimatePresence initial="false" mode="wait">
        <App />
      </AnimatePresence>
    ),
    errorElement: React.createElement(NotFoundPage),
  },
  {
    path: '/blog',
    element: (
      <AnimatePresence mode="wait">
        <Blog />
      </AnimatePresence>
    ),
    errorElement: React.createElement(NotFoundPage),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AnimatePresence initial="false" mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  </React.StrictMode>
);