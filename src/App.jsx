import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Rootlayout from './components/layout/Rootlayout';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ShopSingle from './pages/ShopSingle';
import CartPage from './pages/CartPage';
import WishListPage from './pages/WishListPage';
import Register from './pages/Register';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import ShopDynamicPage from './pages/ShopDynamicPage';

import FAQPage from './pages/FAQPage';
import AboutPage from './pages/AboutPage';
import TermsConditionPage from './pages/TermsConditionPage';
import BlogPage from './pages/Blogpage';
import ContactPage from './pages/ContactPage';
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
       {path:"wish",Component:WishListPage},
       {path:"register",Component:Register},
       {path:"login",Component:LoginPage},
       {path:"wishlist",Component:WishListPage},
       {path:"blog",Component:BlogPage},
       {path:"faq",Component:FAQPage},
       {path:"about",Component:AboutPage},
       {path:"terms",Component:TermsConditionPage},
       {path:"contact",Component:ContactPage},
       
   
    ],
  },
   {path:"*",Component:NotFoundPage},
   {path:"/shop/:id",Component:ShopDynamicPage},
]);

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App