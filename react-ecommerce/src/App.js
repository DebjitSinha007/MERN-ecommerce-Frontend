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
]);


function App() {
  return (
    <div className="App">
   <RouterProvider router={router} />
    </div>
  );
}

export default App;
