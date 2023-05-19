import React from 'react'

const Leader = () => {
  return (
    <div className='my-[100px] sm:my-[160px] md:mx-auto md:relative md:max-w-[1210px] md:max-w[500px]'>
      <div className='mx-[24px] ss:mx-[50px]  '>
        <img src="../../images/mobile/image-interactive.jpg" alt="man in vr" className='sm:hidden sm:mx-auto'/>
        <img src="../../images/desktop/image-interactive.jpg" alt="man in vr" className='hidden sm:block sm:mx-auto'/>
      </div>

      <div className='mx-[50px] mt-[50px] sm:mx-[200px]  md:mx-[0px] md:mt-[0px] md:absolute bottom-[0] right-[0] bg-white md:w-[610px] md:h-[315px]'>
            <h2 className='font-josefin uppercase text-[26px] md:text-[38px] font-bold text-center md:text-left mb-[24px] md:px-[95px] md:pt-[80px]'>The leader in interactive VR</h2>
            <p className='text-center md:text-left text-[14px] md:px-[96px]'>  Founded in 2011, Loopstudios has been producing world-class virtual reality 
                projects for some of the best companies around the globe. Our award-winning 
                creations have transformed businesses through digital experiences that bind 
                to their brand.
            </p>
      </div>
    </div>
  )
}

export default Leader
