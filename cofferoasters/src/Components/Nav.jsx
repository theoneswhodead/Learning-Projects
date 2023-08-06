import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const logo  = '../../assets/shared/desktop/logo.svg'

const Nav = () => {

    const [isActiveMenu, setIsActiveMenu] = useState(false);

  return (
    <div className='relative' >
        <div className='flex justify-between items-center mx-6 mt-[32px] mb-[40px] sm:mx-[40px] sm:mt-[40px] sm:mb-[52px] lg:mx-[80px] lg:my-[43px]'>
            <NavLink to='/'>
                <img src={logo} alt="cofferoasters" className='w-[163px] h-[18px] sm:w-[236px] sm:h-[26px]'/>  
            </NavLink>
            <div>
                {
                    isActiveMenu 
                    ? <img src="../../assets/shared/mobile/icon-close.svg" alt="menu" className='sm:hidden w-[14px] h-[13px] cursor-pointer' onClick={() => setIsActiveMenu( prev => !prev)}/>
                    : <img src="../../assets/shared/mobile/icon-hamburger.svg" alt="menu" className='sm:hidden w-[16px] h-[15px] cursor-pointer' onClick={() => setIsActiveMenu( prev => !prev)}/>
                }
                
                <div className='hidden sm:flex gap-[33px] font-barlow text-[12px] font-bold leading-[15px] uppercase text-gray '>
                    
                    <NavLink to="/" className="hover:text-dark_gray">Home</NavLink>
                    <NavLink to="about" className="hover:text-dark_gray">About Us</NavLink>
                    <NavLink to="subscribe" className="hover:text-dark_gray">Create Your Plan</NavLink>
                </div>


            </div>
        </div>

        {
                isActiveMenu && <div className='flex flex-col gap-[32px] mt-[80px] sm:hidden font-fraunces text-[24px] font-bold leading-[32px] text-center absolute bg-white w-full h-screen  gradient top-[-30px] pt-[40px] '>
                    
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About Us</NavLink>
                    <NavLink to="subscribe">Create Your Plan</NavLink>

                    
                </div>

        }

    </div>
  )
}

export default Nav