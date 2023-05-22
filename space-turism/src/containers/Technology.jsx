import React, {useState} from 'react'
import data from '../../data.json';

const Technology = () => {
  const [tech, setTech] = useState(0)
  return (
    <div>
         <h2 className='text-center sm:text-left uppercase font-barlow_condensed text-white text-[1rem] sm:text-[24px] lg:text-[28px] leading-[19.2px] sm:leading-[24px] lg:leading-[33.6px] tracking-[2.7px] sm:tracking-[3.38px] lg:tracking-[4.72px] sm:ml-[38px] lg:ml-[166px] sm:mt-[40px] lg:mt-[76px]'><span className='opacity-25 mr-[18px]'>03</span>SPACE LAUNCH 101</h2>

         <div className='lg:flex lg:flex-row-reverse justify-between lg:ml-[166px]'>
          <div className='mt-[32px]'>
            <img src={data.technology[tech].images.landscape} alt="Image of Tech" className='w-full lg:hidden'/>
            <img src={data.technology[tech].images.portrait} alt="Image of Tech" className='hidden lg:block w-[515px] h-[527px]' />
          </div>
          <div className='lg:flex' >
            <div className='flex lg:flex-col justify-center gap-[16px] mt-[34px] mb-[26px] sm:mt-[56px] sm:mb-[44px]' >
              <button type="button" className='bg-black w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] rounded-full border-2 border-gray hover:bg-white hover:text-black text-white hover:border-white'
              onClick={() => setTech(() => 0)}
              >1</button>
              <button type="button" className='bg-black w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] rounded-full border-2 border-gray hover:bg-white hover:text-black text-white hover:border-white'
              onClick={() => setTech(() => 1)}
              >2</button>
              <button type="button" className='bg-black w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] rounded-full border-2 border-gray hover:bg-white hover:text-black text-white hover:border-white'
              onClick={() => setTech(() => 2)}
              >3</button>
            </div>

            <div className='flex flex-col items-center lg:items-start mx-[24px] sm:mx-[155px] sm:mb-[97px] lg:mr-[156px] lg:ml-[80px] lg:mt-[137px] lg:w-[470px]'>

              <h2 className='text-light uppercase font-barlow_condensed font-[14px] leading-[16.8px] tracking-[2.36px]'>The Terminology...</h2>

              <h1 className='text-white uppercase font-bellefair text-[24px] sm:text-[40px] lg:text-[56px] leading-[27.5px] sm:leading-[54.84px] lg:leading-[64.18px] mb-[16px] mt-[9px] sm:mt-[16px]'>{data.technology[tech].name}</h1>

             <p className='text-light text-center lg:text-left font-barlow text-[15px] leading-[25px] lg:text-[18px] sm:leading-[28px] lg:leading-[32px]'>{data.technology[tech].description}</p>
           </div>
          </div>
         </div>


    </div>
  )
}

export default Technology
