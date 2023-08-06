import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-dark_gray mx-[24px] mt-[120px] lg:flex lg:justify-between lg:px-[85px] lg:mx-[80px] lg:mb-[80px]'>
        <NavLink to="/" className='flex justify-center pt-[54px] pb-[48px]'>
            <img src='../../assets/shared/desktop/Group 5.svg' alt="coffeeroasters" className='h-[24px] w-[218px] sm:w-[236px] sm:h-[26px]'/>
        </NavLink>

        <div className='flex flex-col sm:flex-row sm:justify-center text-gray items-center gap-[24px] text-[12px] leading-[15px] tracking-[0.923px] uppercase font-bold'>
            <NavLink to="/" className="hover:text-cream">Home</NavLink>
            <NavLink to="about" className="hover:text-cream">About Us</NavLink>
            <NavLink to="subscription" className="hover:text-cream">Create your plan</NavLink>
        </div>
        <div className='flex justify-center mt-[48px] pb-[54px] gap-[33px]'>
            <a href="#">
                <img src="../../assets/shared/desktop/icon-facebook.svg" alt="facebook" />
            </a>
            <a href="#">
                <img src="../../assets/shared/desktop/icon-twitter.svg" alt="twitter" />
            </a>
            <a href="#">
                <img src="../../assets/shared/desktop/icon-instagram.svg" alt="instagram" />
            </a>
        </div>
    </div>
  )
}

export default Footer