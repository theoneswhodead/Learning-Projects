import React from 'react'

const Steps = ({step, name, text}) => {
  return (
    <div className='mb-[56px] mx-[24px] sm:mx-[16px] sm:max-w-[223px] lg:max-w-[285px] text-center sm:text-left'>
        <span className='text-[72px] font-fraunces font-black leading-[72px] text-pale_orange'>{step}</span>
        <h2 className='font-fraunces text-[24px] lg:text-[32px] font-black leading-[28px] my-[24px] sm:mr-[50px] lg:leading-[35px] text-cream'>{name}</h2>
        <p className='font-barlow text-[15px] text-cream_opacity lg:text-[16px] lg:leading-[26px]'>{text}</p>
    </div>
  )
}

export default Steps