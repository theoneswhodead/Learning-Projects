import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import hamburger from '../../assets/shared/icon-hamburger.svg'
import close from '../../assets/shared/icon-close.svg'



const Nav = () => {
    const [isActive, setIsActive] = useState(true);
  return (
    <div className='flex justify-between  items-center text-white uppercase  w-full font-barlow_condensed'>
        <div>
            <img src="../../assets/shared/logo.svg" alt="Logo Space Turism" className='w-[40px] m-[24px] sm:ml-[39px] md:mt-[64px] md:ml-[55px] h-[40px] sm:w-[48px] sm:h-[48px]' />
        </div>
        {
            isActive ? <img src={hamburger} alt="Hamburger Menu" onClick={() => setIsActive((prev) => !prev)} className='sm:hidden w-[24px] h-[21px] mr-[24px]'/>
            : ''
        }
        

        
        {/* <img src={close} alt="Close Menu" onClick={() => setIsActive((prev) => !prev)} /> */}
   
         <div className='hidden sm:flex py-[39px] px-[46px] gap-[37px] w-[450px]  bg-dark_opacity backdrop-blur-[40.7742px] text-[14px] tracking-[2.36px] leading-[16.8px] md:w-[830px] md:justify-center md:mt-[40px]'>
         
             <NavLink to="/" className="menu-item flex">
                <span className='font-bold mr-[12px] sm:hidden md:inline-block'>00</span>Home
             </NavLink>
             <NavLink to="destination" className="menu-item flex">
                <span className='font-bold mr-[12px] sm:hidden md:inline-block'>01</span>Destination
             </NavLink>
             <NavLink to="crew" className="menu-item flex">
                 <span className='font-bold mr-[12px] sm:hidden md:inline-block'>02</span>Crew
             </NavLink>
             <NavLink to="technology" className="menu-item flex">
                <span className='font-bold mr-[12px] sm:hidden md:inline-block'>03</span>Technology
             </NavLink>
        </div>
        {
            isActive
            ? ''
            :
           <div className='backdrop-blur-[40.7742px] bg-dark_opacity absolute flex flex-col items-end inset-1 left-[40%] sm:hidden'>
                <img src={close} alt="Close Menu" onClick={() => setIsActive((prev) => !prev)} className='w-[20px] h-[20px] m-[24px]'/>

                <div className='flex flex-col text-white absolute left-2 top-[118px] gap-[32px] ml-[32px] tracking-[2.7px] leading-[19.2px]' >
                 <NavLink to="/">
                    <span className='font-bold mr-[12px]'>00</span>Home
                </NavLink>
                 <NavLink to="destination">
                    <span className='font-bold mr-[12px]'>01</span>Destination
                </NavLink>
                 <NavLink to="mars">
                    <span className='font-bold mr-[12px]'>02</span>Crew
                 </NavLink>
                 <NavLink to="mars">
                    <span className='font-bold mr-[12px]'>03</span>Technology
                 </NavLink>
                </div>
           </div> 
           
        }
        
    </div>
  )
}

export default Nav
