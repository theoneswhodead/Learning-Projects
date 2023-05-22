import React, {useState} from 'react'

import data from '../../data.json';

const Crew = () => {

  const [crew, setCrew] = useState(0)
  return (
    <div>
       <h2 className='text-center sm:text-left uppercase font-barlow_condensed text-white text-[1rem] sm:text-[24px] lg:text-[28px] leading-[19.2px] sm:leading-[24px] lg:leading-[33.6px] tracking-[2.7px] sm:tracking-[3.38px] lg:tracking-[4.72px] sm:ml-[38px] lg:ml-[166px] sm:mt-[40px] lg:mt-[76px]'><span className='opacity-25 mr-[18px]'>02</span>Meet your crew</h2>

       <div className='sm:flex sm:flex-col-reverse lg:justify-between lg:flex-row-reverse lg:items-start lg:mr-[90px]'>
        <div className='flex justify-center my-[2rem] mx-[24px] border-b-gray border-b-2'>
          <img src={data.crew[crew].images.png} alt="Image of crew" className='h-[222px] sm:h-[532px] '/>
        </div>
        <div className='flex flex-col sm:flex-col-reverse items-center text-center lg:items-start lg:text-left mx-[24px] sm:mx-[155px] lg:mx-[0px]  sm:mt-[100px] lg:mt-[154px] lg:ml-[165px]'>

          <div className='flex gap-[1rem] mb-[32px] sm:mb-[0px] lg:absolute lg:bottom-[94px] lg:left-[167px]'>
            <div className='w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] rounded-full bg-gray hover:bg-white hover:cursor-pointer' onClick={()=> setCrew(() => 0)}></div>
            <div className='w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] rounded-full bg-gray hover:bg-white hover:cursor-pointer' onClick={()=> setCrew(() => 1)}></div>
            <div className='w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] rounded-full bg-gray hover:bg-white hover:cursor-pointer' onClick={()=> setCrew(() => 2)}></div>
            <div className='w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] rounded-full bg-gray hover:bg-white hover:cursor-pointer' onClick={()=> setCrew(() => 3)}></div>
{/* Checkbox  */}
          </div>
          <div>
            <h2 className='text-role font-bellefair uppercase text-[16px] sm:text-[24px] lg:text=[32px] leading-[18.34px] lg:leading-[36.67px] sm:leading-[27.5px] '>{data.crew[crew].role}</h2>
            <h1 className='text-white uppercase font-bellefair text-[24px] sm:text-[40px] lg:text-[56px] leading-[27.5px] sm:leading-[54.84px] lg:leading-[64.18px] mt-[8px] lg:mt-[15px]'>{data.crew[crew].name}</h1>
            <p className='text-light font-barlow text-[15px] leading-[25px] lg:text-[18px] sm:leading-[28px] lg:leading-[32px] mt-[16px] lg:mt-[27px] sm:mb-[40px] lg:max-w-[444px]'>{data.crew[crew].bio}</p>
          </div>
        </div>
        
       </div>
    </div>
  )
}

export default Crew