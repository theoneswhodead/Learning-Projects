import React from 'react'
import { Navbar } from '../Components'

const Header = () => {
  return (
    <div className="bg-hero-mobile sm:bg-[url('./images/desktop/image-hero.jpg')] bg-cover bg-center flex flex-col">
      <Navbar />
      <div className='border-2 border-white mx-8 w-[276px] sm:w-[574px] mt-[164px] mb-[230px]'>
        <h1 className='text-[30px] sm:text-[56px] p-[28px] sm:p-[38px] text-white uppercase font-josefin'>Immersive experiences that deliver</h1>
      </div>
    </div>
  )
}

export default Header
