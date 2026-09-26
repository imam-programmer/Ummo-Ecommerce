import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from "../Footer"
import ScrollToTop from './scrolltotop/ScrollToTop'

const Rootlayout = () => {
  return (
    <main>
      <ScrollToTop/>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </main>
  )
}

export default Rootlayout