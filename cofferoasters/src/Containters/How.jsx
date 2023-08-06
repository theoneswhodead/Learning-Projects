import React, { useState } from 'react'

import { HowAcordeonMenu, Button } from '../Components'

const How = () => {

  const [order, setOrder] = useState({
    howDrink: '',
    typeOf: '',
    howMutch: '',
    grid: '',
    howOften: ''
  })

  return (
    <div className='flex flex-col items-center'>
      {
        [{Headtitle: 'How do you drink your coffee?', subTitle1: 'Capsile', text1: 'Compatible with Nespresso systems and similar brewers', subTitle2: 'Filter', text2: 'For pour over or drip methods like Aeropress, Chemex, and V60', subTitle3: 'Espresso', text3: 'Dense and finely ground beans for an intense, flavorful experience'},
        {Headtitle: 'What type of coffee?', subTitle1: 'Single Origin', text1: 'Distinct, high quality coffee from a specific family-owned farm', subTitle2: 'Decaf', text2: 'Just like regular coffee, except the caffeine has been removed', subTitle3: 'Blended', text3: 'Combination of two or three dark roasted beans of organic coffees'},
        {Headtitle: 'How much would you like?', subTitle1: '250g', text1: 'Perfect for the solo drinker. Yields about 12 delicious cups.', subTitle2: '500g', text2: 'Perfect option for a couple. Yields about 40 delectable cups.', subTitle3: '1000g', text3: 'Perfect for offices and events. Yields about 90 delightful cups.'},
        {Headtitle: 'Want us to grind them?', subTitle1: 'Wholebean', text1: 'Best choice if you cherish the full sensory experience', subTitle2: 'Filter', text2: 'For drip or pour-over coffee methods such as V60 or Aeropress', subTitle3: 'Cafetiére', text3: 'Course ground beans specially suited for french press coffee'},
        {Headtitle: 'How often should we deliver?', subTitle1: 'Every week', text1: '$7.20 per shipment. Includes free first-class shipping.', subTitle2: 'Every 2 weeks', text2: '$9.60 per shipment. Includes free priority shipping.', subTitle3: 'Every month', text3: '$12.00 per shipment. Includes free priority shipping.'}
      ].map(({Headtitle, subTitle1, subTitle2, subTitle3, text1, text2, text3}, index) => {
        return (
          <HowAcordeonMenu Headtitle={Headtitle} subTitle1={subTitle1} subTitle2={subTitle2} subTitle3={subTitle3} text1={text1} text2={text2} text3={text3} key={index}/>
        )
      })
      }
        <div className='bg-dark_gray mx-[24px] px-[24px] rounded-xl'>
          <h3 className='text-cream_opacity uppercase font-barlow text-[16px] leading-[26px]'>Order summary</h3>
          <p className='text-white font-fraunces text-[24px] font-black leading-[40px]'>{`“I drink my coffee as ${order.howDrink}, with a ${order.typeOf} type of bean. ${order.howMutch} ground ala ${order.grid}, sent to me ${order.howOften}.”`}</p>
        </div>
        <button className='font-fraunces text-[18px] font-black leading-[25px] text-cream bg-dark_cyan px-[31px] py-[16px] rounded-lg hover:bg-cyan_hover mt-[60px] w-[220px]'>Create my plan!</button>
    </div>
  )
}

export default How