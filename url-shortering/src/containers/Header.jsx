import React from 'react'
import ilustration from '../../images/illustration-working.svg'

const Header = () => {
  return (
    <div className='overflow-hidden  flex flex-col ss:items-center ss:justify-center  lg:flex-row-reverse lg:ml-[168px] lg:mt-[80px] gap-[100px]'>
      <div className='h-[335px] w-[500px] lg:w-[750px] lg:h-[485px] mt-6'>
        <img src={ilustration} alt="Ilustration of Working" className='ml-6 h-[335px] w-[600px] lg:w-[750px] lg:h-[485px]'/>
      </div>
      <div className='text-center lg:text-left mx-8 mt-[55px]  space-y-[2rem] lg:space-y-[20px]'>
        <h1 className='text-[2rem] lg:text-[58px] font-bold leading-10 lg:leading-snug'>More than just shorter links</h1>
        <p className='text-[15px] lg:text-[17px] text-gray'>Build your brand’s recognition and get detailed insights 
  on how your links are performing.</p>
        <button type="button" className='px-[40px] py-[20px] bg-cyan rounded-full text-white font-bold text-[18px] tracking-wider hover:bg-cyan_hover'>Get Started</button>
      </div>
    </div>
  )
}

export default Header
