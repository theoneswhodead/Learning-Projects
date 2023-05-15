import React from 'react'
import { Button } from '../components';

const Started = () => {
  return (
    <div className="bg-intro text-center bg-[url('/images/bg-curvy-mobile.svg')] xs:bg-[url('/images/bg-curvy-desktop.svg')] bg-contain bg-no-repeat bg-[center_top_14rem] xs:bg-[bottom] text-white flex flex-col items-center"   >

      <img className="p-[32px] sm:max-w-[720px] sm:max-h-[532px] " src="/images/illustration-intro.png" alt="intro" />

      <h1 className='sm:max-w-[700px] px-[32px]text-lg sm:text-[2rem] font-bold font-raleway'>All your files in one secure location, accessible anywhere.</h1>
      
      <div className=' bg-main xs:bg-transparent px-[32px]'>
        
        <p className='sm:max-w-[600px] ss:max-w-[450px] text-xs sm:text-[1rem] px-[0.6rem] py-[22px] leading-5'>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>

        <Button text={"Get Started"}/>
      </div>

    </div>
  )
}

export default Started
