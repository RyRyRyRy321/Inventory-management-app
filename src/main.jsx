import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Dashboard from './routes/dashboard';
import ProductTable from './components/ProductTable';
import { loader as productLoader } from './components/ProductTable';
import {loader as updateProductLoader} from './components/UpdateProductForm';
import ProductErrorPage from './errors/productErrorPage';
import { AddProductForm } from './components/AddProductForm';
import { UpdateProductForm } from './components/UpdateProductForm';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

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


root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-bul4ijkz2e3u7ruq.us.auth0.com'
      clientId='HRCtvedtvbz5G0cpMzNLganjSg2Wng2Q'
      authorizationParams={{
        redirect_uri: window.location.origin
      }}      
    >
      <RouterProvider router={router}></RouterProvider>
    </Auth0Provider>
  </React.StrictMode>,
)
