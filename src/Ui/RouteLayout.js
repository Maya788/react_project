import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Foot from './Foot'

const RouteLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Foot/>
    </div>
  )
}

export default RouteLayout
