import React from 'react'



const Coffee = ({img, name, text}) => {
  return (
    <div className='flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center sm:justify-center mb-[48px]'>
        <img src={img} className='w-[200px] sm:w-[255px] mt-[13px] sm:mt-0 mb-[24px] sm-mb-0 lg:mb-[71px]'/>

        <div className='w-[282px] lg:w-[255px] sm:text-left lg:text-center'>
          <h2 className='font-fraunces text-[24px] text-dark_gray font-black leading-[32px]'>{name}</h2>
          <p className='font-barlow text-[15px] leading-[25px] mx-[47px] sm:mx-0 mt-[16px] sm:mt-[24px]'>{text}</p>
        </div>
        
    </div>
  )
}

export default Coffee