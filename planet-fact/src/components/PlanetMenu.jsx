import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const PlanetMenu = () => {
    const location = useLocation();
    return (
        <div className='font-spartan text-white font-bold uppercase tracking-[1.93px] leading-[10px] text-[9px]  flex justify-between px-6 py-[20px] border-b-[1px] border-white_opacity sm:hidden'>

          <NavLink to={`/${location.pathname.split('/')[1]}/overview`}  
        className={({isActive}) => isActive ? 'opacity-100 itemMenu ' : "hover:opacity-100 opacity-50 itemMenu-hover"} >Overview</NavLink>

          <NavLink to={`/${location.pathname.split('/')[1]}/structure`} className={({isActive}) => isActive ? 'opacity-100 itemMenu' : "hover:opacity-100 opacity-50 itemMenu-hover"}>Structure</NavLink>
          <NavLink to={`/${location.pathname.split('/')[1]}/surface`} className={({isActive}) => isActive ? 'opacity-100 itemMenu' : "hover:opacity-100 opacity-50 itemMenu-hover"}>Surface</NavLink>
        </div>
      )
}

export default PlanetMenu
