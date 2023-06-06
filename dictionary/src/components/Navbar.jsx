import React,{ useState, useContext } from 'react'
import logo from '../../assets/images/logo.svg';
import { ThemeContext } from '../helpers/themecontext';

let font = "Sans Serif"


const Navbar = ({setIsDarkMode}) => {

    const theme= useContext(ThemeContext);

    console.log(theme)
  return (
    <div className='flex justify-between p-[24px]'>
        <div>
            <img src={logo} alt="Logo" className=' w-[28px] h-[32px]'/>
        </div>
        <div className='flex items-center'>
            <span className='mr-[16px] font-bold text-[14px] dark:text-white'>{font}</span>
            <img src="../../assets/images/icon-arrow-down.svg" alt="Click me" className='mr-[16px] pr-[16px]' />

          
                <input type="checkbox" id="darkmode-toggle" onChange={()=> setIsDarkMode((prev) => !prev)}/>
                <label htmlFor="darkmode-toggle" className='toggler w-[40px] h-[20px] relative block bg-gray_100 rounded-full hover:cursor-pointer mr-[12px]'></label>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z" className='stroke-[#838383] dark:stroke-[#a445ed]'/></svg>
    
        </div>
    </div>
  )
}

export default Navbar
