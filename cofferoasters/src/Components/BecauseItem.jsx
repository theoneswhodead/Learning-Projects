import React from 'react'

const BecauseItem = ({img, name, text}) => {
  return (
    <div className='bg-dark_cyan h-[382px] sm:h-[180px] lg:h-[382px] rounded-lg sm:flex lg:flex-col'>
        <div className='flex justify-center mt-[72px] mb-[56px] sm:my-[62px] sm:ml-[70px] sm:mr-[55px] lg:ml-0 lg:mt-[72px] lg:mb-[56px]'>
            <img src={img} alt="img" className='h-[72px] w-[72px]'/>
        </div>
        <div className='text-center sm:text-left lg:text-center lg:ml-[55px] lg:mr-[48px] my-[41px] lg:my-0'>
            <h2 className='font-fraunces text-[24px] font-black leading-[28px] text-cream'>{name}</h2>
            <p className='font-barlow text-[15px] lg:text-[16px] text-cream_opacity leading-[25px] mx-[33px] sm:mx-0 mt-[24px] sm:mr-[48px]'>{text}</p>
        </div>
    </div>
  )
}

export default BecauseItem