// Import React Framework
import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';

// Import Pages
import Home from './Pages/Home/Home.tsx';

const router = createHashRouter([
  {
    path: '/categories/:type',
    element: <Home />,
  },
  {
    path: '/',
    element: <Home />,
  },
]);

export default () => <RouterProvider router={router} />;
