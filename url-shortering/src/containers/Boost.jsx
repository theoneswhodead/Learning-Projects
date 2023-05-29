import React from 'react'

const Boost = () => {
  return (
    <div className="bg-violet bg-[url('../../images/bg-boost-mobile.svg')] lg:bg-[url('../../images/bg-boost-desktop.svg')] bg-no-repeat bg-center bg-cover py-[100px] lg:py-[64px] flex flex-col items-center">
      <h2 className='text-[22px] lg:text-[34px] font-bold text-white mb-[24px]'>Boost your links today</h2>
      <button type="button" className='px-[40px] py-[20px] bg-cyan rounded-full text-white font-bold text-[18px] tracking-wider hover:bg-cyan_hover'><a href="#">Get Started</a></button>
    </div>
  )
}

export default Boost
