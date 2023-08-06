import React from 'react'

const HowItWorksItem = ({step, name, text}) => {
  return (
    <div className='mb-[56px] mx-[24px] sm:mx-[16px] sm:max-w-[223px] lg:max-w-[285px]'>
        <span className='text-[72px] font-fraunces font-black leading-[72px] text-pale_orange'>{step}</span>
        <h2 className='font-fraunces text-[24px] lg:text-[32px] font-black leading-[28px] my-[24px] sm:mr-[50px]'>{name}</h2>
        <p className='font-barlow text-[15px] lg:text-[16px]'>{text}</p>
    </div>
  )
}

export default HowItWorksItem