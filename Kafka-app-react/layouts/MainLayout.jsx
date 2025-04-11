import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../src/components/navbar'

const MainLayout = () => {
  return (
    <>
      <div className="px-5 pt-2 py-4 h-screen">
        <NavBar/>
        <Outlet/>
      </div>
    </>
  )
}

export default MainLayout