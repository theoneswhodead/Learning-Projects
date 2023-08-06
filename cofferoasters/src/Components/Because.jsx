import React from 'react'

import BecauseItem from './BecauseItem'

const Because = () => {
  return (
    <div className='mx-[24px] sm:mx-[74px] flex  flex-col lg:flex-row gap-[24px]'>
        {
            [{img: '../../assets/home/desktop/icon-coffee-bean.svg', name: 'Best quality', text: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.'}, {img: '../../assets/home/desktop/icon-gift.svg', name: 'Exclusive benefits', text: 'Special offers and swag when you subscribe, including 30% off your first shipment.'}, {img: '../../assets/home/desktop/icon-truck.svg', name: 'Free shipping', text: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.'}].map(({img, name, text,}, index) => {
                return(
                    <BecauseItem img={img} name={name} text= {text} key={index}/>
                )
            })
        }
    </div>
  )
}

export default Because