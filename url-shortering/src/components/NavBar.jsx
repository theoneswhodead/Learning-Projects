import React, {useState} from 'react'
import logo from '../../images/logo.svg'
import hamburger from '../../images/icon-hamburger.svg'
import close from '../../images/icon-close.svg'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const [isActive, setIsActive] = useState(false);
  return (
    <div className='flex justify-between px-[24px] pt-[38px] sm:mx-[40px] lg:mx-[168px] sm:mt-[38px] lg:mt-[48px]'>
        <div className='flex gap-[46px]' >
            <NavLink to="/">
                <img src={logo} alt="Shortly" />
            </NavLink>
            <div className='hidden sm:flex font-bold text-gray gap-[32px]'>
                <NavLink to="features" >Features</NavLink>
                <NavLink to="pricing" >Pricing</NavLink>
                <NavLink to="resources" >Resources</NavLink>
            </div>
            
        </div>
        <div className='sm:hidden'>

            {
                isActive
                ? <img src={close} alt="Close Menu" onClick={() => setIsActive((prev)=> !prev)}/>
                : <img src={hamburger} alt="Menu" onClick={() => setIsActive((prev)=> !prev)}/>
            }
            
        </div>
        <div className='hidden sm:block font-bold text-gray space-x-[38px]'>
            <NavLink to="login">Login</NavLink>
            <NavLink to="register" className="text-white px-[24px] py-[12px] bg-cyan rounded-full">Sign Up</NavLink>
        </div>
        {
            isActive && 
            <div className='absolute inset-x-[24px] top-[96px] bg-violet flex flex-col items-center gap-[39px] py-[45px] font-bold text-white rounded-xl' >
                <NavLink to="features" >Features</NavLink>
                <NavLink to="pricing" >Pricing</NavLink>
                <NavLink to="resources">Resources</NavLink>
                <div className='h-[1px] w-[85%] bg-grayish_violet opacity-30 px-[48px]'></div>
                <NavLink to="login">Login</NavLink>
                 <NavLink to="register" className="py-[16px] px-[107px] bg-cyan rounded-full">Sign Up</NavLink>
            </div>
        }
    </div>
  )
}

export default NavBar
