import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'

const Rootlayout = ({children}) => {
  return (
    <main>
      <Header/>
    <Outlet></Outlet>
    </main>
  )
}

export default Rootlayout