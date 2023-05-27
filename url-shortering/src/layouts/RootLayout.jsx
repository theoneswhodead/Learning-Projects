import React from 'react'
import { NavBar } from '../components'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='font-poppins'>
      <NavBar />

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
