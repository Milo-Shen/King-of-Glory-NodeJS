// Import React Framework
import React from 'react';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

// Import Pages
import Home from './Pages/Home/Home.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

export default () => <RouterProvider router={router} />;
