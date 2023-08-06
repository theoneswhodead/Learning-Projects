import React from 'react'

import { Because } from '../Components'

const Why = () => {
  return (
    <div className='bg-why mx-6 lg:mx-[80px] rounded-xl h-[902px] sm:h-[573px] lg:-[577px] relative'>
        <div className='text-center px-[24px] lg:mx-[310px] sm:mx-[200px]'>
            <h2 className='font-fraunces text-[28px] sm:text-[32px] font-black leading-[28px] sm:leading-[48px] text-cream pt-[60px] pb-[24px]'>Why choose us?</h2>

            <p className='font-barlow text-[15px] lg:text-[16px] text-cream_opacity leading-[25px] mb-[64px]'>A large part of our role is choosing which particular coffees will be featured  in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
        </div>
        <Because />
        
    </div>
  )
}

export default Why