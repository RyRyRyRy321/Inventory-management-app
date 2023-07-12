import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Product from './routes/product';
import Dashboard from './routes/dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path:"/product",
        element: <Product></Product>
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
