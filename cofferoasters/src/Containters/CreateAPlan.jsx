import React from 'react'

import { Steps } from '../Components'

const CreateAPlan = () => {
  return (
    <div>
        <div className='bg-[url("../../assets/plan/mobile/image-hero-blackcup.jpg")] sm:bg-[url("../../assets/plan/tablet/image-hero-blackcup.jpg")] lg:bg-[url("../../assets/plan/desktop/image-hero-blackcup.jpg")] bg-center bg-cover mx-[24px] sm:mx-[40px] rounded-xl text-center sm:text-left sm:px-[48px] lg:px-[86px] lg:mx-[80px]'>
            <h2 className='font-fraunces text-[40px] lg:text-[72px] font-black leading[40px] text-cream pb-[22px] pt-[101px]'>Create a plan</h2>
            <p className='font-barlow text-[15px] lg:text-[16px] text-cream_opacity leading-[25px] mx-[24px] sm:mx-0 sm:w-[400px] lg:w-[445px] pb-[136px]'>Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.</p>
        </div>
        

        <div className='bg-dark_gray mt-[120px] py-[80px] lg:pb-[40px] rounded-xl px-[24px] lg:mx-[80px] '>
        <div className='hidden sm:flex items-center sm:mb-[48px] sm:px-[40px] lg:px-[85px]'>
            <div className='w-[31px] h-[31px] border-2 rounded-full border-dark_cyan'></div>
            <div className='w-[218px] lg:w-[364px] h-[2px] bg-pale_orange'></div>
            <div className='w-[31px] h-[31px] border-2 rounded-full border-dark_cyan'></div>
            <div className='w-[218px] lg:w-[364px] h-[2px] bg-pale_orange'></div>
            <div className='w-[31px] h-[31px] border-2 rounded-full border-dark_cyan'></div>
        </div>
        <div className='sm:flex sm:px-[25px] lg:px-[70px]'>
        {
                [{step: '01', name: 'Pick your coffee', text: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'}, {step: '02', name: 'Choose the frequency', text: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.'}, {step: '03', name: 'Receive and enjoy!', text: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."}].map(({step, name, text}, index) => {
                    return(
                        <Steps step={step} name={name} text={text} key={index}/>
                    )
                })
            }
        </div>
        
        </div>

    </div>
  )
}

export default CreateAPlan