import React from 'react'

import { HowItWorksItem, Button } from '../Components'

const HowItWorks = () => {
  return (
    <div className='mt-[600px] sm:mt-[400px] text-center sm:text-left sm:mx-[40px] lg:mx-[165px]'>
        <h2 className='text-gray font-fraunces text-[24px] leading-[32px] font-black mb-[80px] sm:mb-[40px] pt-[120px] sm:pt-0'>How it works</h2>

        <div className='hidden sm:flex items-center sm:mb-[48px]'>
            <div className='w-[31px] h-[31px] border-2 rounded-full border-dark_cyan'></div>
            <div className='w-[218px] lg:w-[364px] h-[2px] bg-pale_orange'></div>
            <div className='w-[31px] h-[31px] border-2 rounded-full border-dark_cyan'></div>
            <div className='w-[218px] lg:w-[364px] h-[2px] bg-pale_orange'></div>
            <div className='w-[31px] h-[31px] border-2 rounded-full border-dark_cyan'></div>
        </div>

        <div className='mb-[80px] sm:mb-0 sm:flex sm:gap-[10px]'>

            {
                [{step: '01', name: 'Pick your coffee', text: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'}, {step: '02', name: 'Choose the frequency', text: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.'}, {step: '03', name: 'Receive and enjoy!', text: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."}].map(({step, name, text}, index) => {
                    return(
                        <HowItWorksItem step={step} name={name} text={text} key={index}/>
                    )
                })
            }
     
        </div>
        

        <Button  text="Create your plan" />
    </div>
  )
}

export default HowItWorks