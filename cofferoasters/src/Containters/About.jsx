import React from 'react'

const About = () => {
  return (
    <div className='mx-[24px]'>

      <div className='bg-[url("../../assets/about/mobile/image-hero-whitecup.jpg")] sm:bg-[url("../../assets/about/tablet/image-hero-whitecup.jpg")] lg:bg-[url("../../assets/about/desktop/image-hero-whitecup.jpg")] bg-cover bg-center rounded-xl text-center sm:text-left' >
        <h2 className='font-fraunces text-[28px] sm:text-[32px] font-black leading-[28px] sm:leading-[48px] text-cream pt-[111px] pb-[24px] sm:pl-[58px]'>About Us</h2>

        <p className='font-barlow text-[15px] lg:text-[16px] text-cream_opacity leading-[25px] px-[24px] pb-[87px] sm:pl-[58px] sm:w-[482px] lg:max-w-[445px] lg:pr-0'>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</p>
      </div>

      <div className='flex flex-col sm:flex-row sm:gap-[60px] mt-[120px] justify-center lg:items-center'>

        <div className=''>
          <img src="../../assets/about/mobile/image-commitment.jpg" alt="" className='sm:hidden rounded-lg'/>

          <img src="../../assets/about/tablet/image-commitment.jpg" alt="" className='hidden sm:block lg:hidden rounded-lg'/>

          <img src="../../assets/about/desktop/image-commitment.jpg" alt="" className='hidden lg:block rounded-lg'/>
        </div>


        <div className='text-center sm:w-[340px] lg:w-[540px] sm:text-left'>
          <h2 className='font-fraunces text-[32px] sm:text-[32px] font-black leading-[48px] sm:leading-[48px] text-dark_gray my-[30px]'>Our commitment</h2>

          <p className='font-barlow text-[15px] lg:text-[16px] text-dark_gray_opacity leading-[25px] '>We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
        </div>
      </div>
        
    </div>
  )
}

export default About