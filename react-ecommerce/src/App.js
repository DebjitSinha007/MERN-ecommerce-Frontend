import React from 'react';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPages from './pages/SignupPages';

// import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from './features/cart/Cart';
import CartPage from './pages/cartPage';
import Checkout from './pages/checkout';
import ProductDetailPage from './pages/ProductDetailPage';






const router = createBrowserRouter([
  {
    path: "/",
    element:  <Home></Home>,
  } ,
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
   {
    path: "/signup",
    element: <SignupPages></SignupPages>,
  },
   {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
    {
    path: "/checkout",
    element: <Checkout></Checkout> ,
  },
      {
    path: "/product-detail",
    element: <ProductDetailPage></ProductDetailPage> ,
  },
 
 

]);


function App() {
  return (
    <div className="App">
   <RouterProvider router={router} />
    </div>
  );
}

export default App;
