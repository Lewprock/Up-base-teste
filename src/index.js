import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/home';
import NewFlat from './pages/new-flat/new-flat';
import NotFoundPage from './pages/not-found-page/not-found-page';

const router = createBrowserRouter([{
  path: '/',
  element: <Home></Home>,
  errorElement: <NotFoundPage></NotFoundPage>
},
{
  path: '/newflat',
  element: <NewFlat></NewFlat>
}]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
