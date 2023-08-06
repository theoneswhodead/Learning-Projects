import React, { useState } from 'react'

const HowAcordeonMenu = ({Headtitle, subTitle1, subTitle2, subTitle3, text1, text2, text3}) => {

    const [isActive, setIsActive] = useState(false);


    const AccordeonHandler = () => {
        setIsActive(prev => !prev)
    }

  return (
    <div>
        <div className='mx-[24px] mb-[32px] mt-[110px] flex justify-between items-center'>
        <button className='text-gray font-fraunces text-[24px] font-black leading-[28px] w-[240px] ' onClick={AccordeonHandler}>{Headtitle}</button>
        <img src="../../assets/plan/desktop/icon-arrow.svg" alt="" className='w-[19px] h-[12px]' />
        </div>
        { // wartość do ariallabel czy co s?
            isActive && 
            <div className='mx-[24px] flex flex-col gap-[16px]'>
            <div className='bg-light_gray px-[25px] py-[24px] rounded-xl'>
                <h2 className='text-[24px] leading-[32px] font-black font-fraunces mb-[8px]'>{subTitle1}</h2>
                <p className='text-[16px] leading-[26px font-barlow]'>{text1}</p>
            </div>
            <div className='bg-light_gray px-[25px] py-[24px] rounded-xl'>
                <h2 className='text-[24px] leading-[32px] font-black font-fraunces mb-[8px]'>{subTitle2}</h2>
                <p>{text2}</p>
            </div>
            <div className='bg-light_gray px-[25px] py-[24px] rounded-xl'>
                <h2 className='text-[24px] leading-[32px] font-black font-fraunces mb-[8px]'>{subTitle3}</h2>
                <p>{text3}</p>
            </div>
        </div>
        }
        
    </div>
  )
}

export default HowAcordeonMenu