import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Product from './routes/product';
import Dashboard from './routes/dashboard';
import ProductTable from './components/ProductTable';
import { loader as productLoader } from './components/ProductTable';
import {loader as updateProductLoader} from './components/UpdateProductForm';
import ProductErrorPage from './errors/productErrorPage';
import { AddProductForm } from './components/AddProductForm';
import { UpdateProductForm } from './components/UpdateProductForm';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
    {
      index: true,
      element: <Dashboard></Dashboard>
    },
    {
      path: "product",
      element: <ProductTable></ProductTable>,
      loader: productLoader,
      errorElement: <ProductErrorPage></ProductErrorPage>
    },
    {
      path: "form",
      element: <AddProductForm></AddProductForm>,
    }, {
      path: "updateForm/:productId",
      element: <UpdateProductForm></UpdateProductForm>,
      loader: updateProductLoader
    }
  ]
  }
])

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//     children: [
//       {
//         index: true,
//         element: <Dashboard></Dashboard>
//       },
//       {
//         path:"/product",
//         element: <Product></Product>
//       }
//     ]
//   }
// ])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
