import React from 'react'

import { Outlet, } from 'react-router-dom'
import Navbar from '../components/Navbar'


const RootLayout = () => {
  return (
    <div>
        <Navbar />
        <div className='pages'>
            <Outlet />
        </div>
      
    </div>
  )
}

export default RootLayout
