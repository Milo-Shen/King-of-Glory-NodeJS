// Import React Framework
import React from 'react';
import {
  createHashRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

// Import Pages
import Home from './Pages/Home/Home.tsx';

const router = createHashRouter(
  createRoutesFromElements(<Route path="/" element={<Home />}></Route>),
);

export default () => <RouterProvider router={router} />;
