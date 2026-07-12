import React from 'react'
import { Outlet } from 'react-router'

const Rootlayout = ({children}) => {
  return (
    <>
    <Outlet></Outlet>
    </>
  )
}

export default Rootlayout