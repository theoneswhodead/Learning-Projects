import React from 'react'

const Quality = () => {
  return (
    <div className='bg-dark_gray text-center mx-[24px] relative mt-[200px] rounded-xl flex flex-col items-center lg:items-start pt-[140px] sm:pt-[300px] lg:pt-[90px] lg:pb-[140px] lg:text-left'>
        
          {/* <img src="../../assets/about/mobile/image-quality.jpg" alt="quality" className=''/> */}
          <div className='bg-[url("../../assets/about/mobile/image-quality.jpg")] sm:bg-[url("../../assets/about/tablet/image-quality.jpg")] lg:bg-[url("../../assets/about/desktop/image-quality.jpg")] px-[24px] w-[279px] h-[156px] sm:w-[573px] sm:h-[320px] lg:w-[445px] lg:h-[474px] bg-center bg-cover rounded-xl  absolute top-[-75px] lg:right-[80px]'>

          </div>
        

        <h2 className='font-fraunces text-[28px] sm:text-[32px] lg:text-[40px] font-black leading-[28px] sm:leading-[48px] text-cream mx-[24px] mb-[24px] lg:ml-[80px]'> Uncompromising quality</h2>

        <p className='font-barlow text-[15px] lg:text-[16px] text-cream_opacity leading-[25px] mx-[24px] sm:mx-[120px] pb-[56px] lg:w-[540px] lg:ml-[80px]'>Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
    </div>
  )
}

export default Quality