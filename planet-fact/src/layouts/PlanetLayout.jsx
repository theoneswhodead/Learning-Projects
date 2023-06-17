import React from 'react'
import { Outlet } from 'react-router-dom';
import { PlanetMenu } from '../components';

const PlanetLayout = () => {
  return (
    
    <div>
        <PlanetMenu />
        <Outlet/>
    </div>
  )
}

export default PlanetLayout
