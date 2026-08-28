import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from "../Footer"

const Rootlayout = ({children}) => {
  return (
    <main>
      <Header/>
    <Outlet></Outlet>
<Footer/>
    </main>
  )
}

export default Rootlayout