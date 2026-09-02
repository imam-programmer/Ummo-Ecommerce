import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Rootlayout from './components/layout/Rootlayout';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import Breadcrumb from './components/layout/common/Breadcrumb';
import ShopSingle from './pages/ShopSingle';
import CartPage from './pages/CartPage';
const App = () => {
  const router=createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      { index: true, Component: HomePage },
      {path:"shop",Component:ShopPage},
       {path:"shopsingle",Component:ShopSingle},
       {path:"cart",Component:CartPage},
   
    ],
  },
]);

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App