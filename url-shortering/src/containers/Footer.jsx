import React from 'react'
import logo from '../../images/logo.svg'

import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-footer text-gray text-center text-[16px] flex flex-col lg:flex-row  items-center lg:items-start justify-between pb-[50px] lg:px-[165px] lg:pt-[80px]'>
      <NavLink to="/" className="my-[54px] lg:my-0">
                <img src={logo} alt="Shortly" className='white w-[123px] h-[36px]' />
      </NavLink>

      <div>
        <h3 className='text-white font-bold'>Features</h3>
        <div className='flex flex-col gap-[16px] my-[2rem] '>
            <a href="#" className='hover:text-cyan'>Link Shortering</a>
            <a href="#" className='hover:text-cyan'>Branded Links</a>
            <a href="#" className='hover:text-cyan'>Analitics</a>
        </div>
      </div>

      <div>
        <h3 className='text-white font-bold'>Resources</h3>
        <div className='flex flex-col gap-[16px] my-[2rem]'>
            <a href="#" className='hover:text-cyan'>Blog</a>
            <a href="#" className='hover:text-cyan'>Developers</a>
            <a href="#" className='hover:text-cyan'>Support</a>
        </div>
      </div>

      <div>
        <h3 className='text-white font-bold'>Company</h3>
        <div className='flex flex-col gap-[16px] my-[2rem]'>
            <a href="#" className='hover:text-cyan'>About</a>
            <a href="#" className='hover:text-cyan'>Our Team</a>
            <a href="#" className='hover:text-cyan'>Careers</a>
            <a href="#" className='hover:text-cyan'>Contact</a>
        </div>
      </div>

      <div className='flex gap-[20px]'>
        <a href="#">
          <img src="../../images/icon-facebook.svg" alt="facebook" />
        </a>
        <a href="#">
          <img src="../../images/icon-twitter.svg" alt="twitter" />
        </a>
        <a href="#">
          <img src="../../images/icon-pinterest.svg" alt="pinterest" />
        </a>
        <a href="#">
          <img src="../../images/icon-instagram.svg" alt="instagram" />
        </a>
        
      </div>
    </div>
  )
}

export default Footer
