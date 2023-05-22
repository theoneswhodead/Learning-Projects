import React from 'react'

import { Link } from 'react-router-dom'

import { Nav } from '../components'

const Hero = () => {
  return (
    <div className='text-white flex flex-col items-center mx-[24px] sm:mx-[159px] pt-[24px] sm:pt-[106px] lg:pt-[251px] pb-[48px] sm:pb-[90px] lg:pb-[131px] lg:flex-row lg:justify-between'>
        
        <div className='flex flex-col items-center lg:items lg:w-[450px]'>
          <h2 className="font-barlow_condensed uppercase text-[1rem] text-light tracking-[2.7px] leading-[19.2px] sm:text-[20px] sm:tracking-[3.38px] sm:leading-[24px] lg:text-[28px] lg:tracking-[4.72px] lg:leading-[33.6px]">So, you want to travel to</h2>

          <h1 className="font-bellefair uppercase text-[80px] sm:text-[150px] my-[1rem]">Space</h1>
          
          <p className='font-barlow text-[15px] sm:text-[16px] text-light text-center lg:text-left leading-[25px] sm:leading-[28px]' >Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>

        <button type='button' 
        className="font-bellefair text-[20px] sm:text-[32px] tracking-[1.15px] sm:tracking-[2px] sm:leading-[36.67px] lg:leading-[32px] text-dark bg-white mt-[81px] sm:mt-[156px] uppercase btn-hover w-[150px] h-[150px] sm:w-[242px] sm:h-[242px] lg:w-[274px] lg:h-[274px] rounded-full">
          <Link to="destination">Explore</Link>
        </button>
    </div>
  )
}

export default Hero
