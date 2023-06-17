import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';
const RootLayout = () => {
  return (
    <div className='bg-[url("../../assets/background-stars.svg")] bg-dark'>
      <Navbar />
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default RootLayout
