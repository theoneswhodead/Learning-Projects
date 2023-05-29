import React from 'react'

const Features = ({img, title, text, className}) => {
  return (
    <div className={`bg-white relative mx-[24px] rounded-xl mb-[90px] lg:mb-0 lg:h-[270px] ${className} `}>
        <div className='bg-violet w-[90px] h-[90px] rounded-full flex justify-center items-center absolute top-[-45px] left-[50%] translate-x-[-50%]'>
            <img src={img} alt="" className='w-[44px] h-[44px]'/>
        </div>
        <div className='text-center pt-[82px] pb-8'>
            <h2 className='text-violet mb-[24px] text-[18px] font-bold'>{title}</h2>
            <p className='mx-[24px] text-grayish_violet'>{text}</p>
        </div>
        
    </div>
  )
}

export default Features
