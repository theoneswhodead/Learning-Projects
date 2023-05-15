import React from 'react'
import logo from '../../images/logo.svg'

const Nav = () => {
  return (
    <div className='bg-intro flex justify-between px-[16px] xs:px-[55px] py-[20px] xs:py-[72px]'>
        <div className='w-[75px] h-[25px] xs:w-[178px] xs:h-[55px] '>
            <img src={logo} alt="logo" />
        </div>
        <div className='text-white text-xs xs:text-sm flex justify-between w-[152px] ss:w-[270px]'>
            <a href="#features">Features</a>
            <a href="#Team">Team</a>
            <a href="#">Sign In</a>
        </div>
    </div>
  )
}

export default Nav
