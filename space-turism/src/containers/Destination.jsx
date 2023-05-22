import React, {useState} from 'react'

import data from '../../data.json';

const DestinationLayout = () => {

  const [destination, setDestination] = useState(0)
  return (
    <div>
       <h2 className='text-center sm:text-left uppercase font-barlow_condensed text-white text-[1rem] sm:text-[24px] lg:text-[28px] leading-[19.2px] sm:leading-[24px] lg:leading-[33.6px] tracking-[2.7px] sm:tracking-[3.38px] lg:tracking-[4.72px] sm:ml-[38px] lg:ml-[166px] sm:mt-[40px] lg:mt-[76px]'><span className='opacity-25 mr-[18px]'>01</span>Pick your destination</h2>

       <div className='flex flex-col lg:flex-row items-center lg:justify-around'>
          <div className='mt-[32px] mb-[26px] sm:mt-[60px] sm:mb-[53px] lg:mt-[97px] lg:mb-[112px] lg:ml-[100px]'>
            <img src={data.destinations[destination].images.png} alt="image of planet" className='w-[170px] h-[170px] sm:w-[300px] sm:h-[300px] lg:w-[445px] lg:h-[445px]'/>
          </div>
          <div className='flex flex-col items-center lg:items-start  lg:w-[445px]'>
            <div className='font-barlow_condensed flex gap-[26px]'>
              <button className='uppercase text-[14px] sm:text-[16px] sm:tracking-[2.7px] sm:leading-[19.2px] tracking-[2.36px] leading-[16.8px] text-light menu-planet' 
              onClick={() => setDestination(()=> 0)}
              >Moon
              </button>
              <button className='uppercase text-[14px] sm:text-[16px] sm:tracking-[2.7px] sm:leading-[19.2px] tracking-[2.36px] leading-[16.8px] text-light menu-planet' 
              onClick={() => setDestination(()=> 1)}
              >Mars
              </button>
              <button className='uppercase text-[14px] sm:text-[16px] sm:tracking-[2.7px] sm:leading-[19.2px] tracking-[2.36px] leading-[16.8px] text-light menu-planet' onClick={() => setDestination(()=> 2)}>
              Europa
              </button>
              <button className='uppercase text-[14px] sm:text-[16px] sm:tracking-[2.7px] sm:leading-[19.2px] tracking-[2.36px] leading-[16.8px] text-light menu-planet' onClick={() => setDestination(()=> 3)}
              >Titan
              </button>
            </div>

            <div className='flex flex-col items-center lg:items-start mt-[20px] '>
              <h1 className='font-bellefair text-white uppercase text-[56px] sm:text-[80px] lg:text-[100px]'>{data.destinations[destination].name}</h1>
              <p className='text-light mx-[24px] lg:mx-[0px] pb-[32px] sm:pb-[48px] border-b-gray border-b-2 text-[15px] lg:text-[18px] leading-[25px] sm:leading-[28px] lg:leading-[32px] font-barlow text-center lg:text-left sm:w-[573px] lg:w-[445px]'>{data.destinations[destination].description}</p>
            </div>
            <div className='mt-[32px] sm:mt-[28px] sm:flex sm:justify-around lg:gap-[100px] lg:justify-start sm:w-[573px] lg:w-[445px]'>
              <div className='flex flex-col items-center lg:items-start mb-[32px] uppercase'>
                <p className='text-light font-barlow_condensed text-[14px] leading-[16.8px] tracking-[2.36px] mb-[12px]'>Avg. Distance</p>
                <h2 className='text-white font-bellefair text-[28px] leading-[32.09px]'>{data.destinations[destination].distance}</h2>
              </div>
              <div className='flex flex-col  lg:items-start uppercase pb-[58px]'>
                <p className='text-light font-barlow_condensed text-[14px] leading-[16.8px] tracking-[2.36px] mb-[12px]'>Est. travel time</p>
                <h2 className='text-white font-bellefair text-[28px] leading-[32.09px]'>{data.destinations[destination].travel}</h2>
              </div>
            </div>
            
          </div>
       </div>
    </div>
  )
}

export default DestinationLayout