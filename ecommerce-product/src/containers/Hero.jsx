import React from 'react'
import { Slider, AddToCart } from '../components'

const Hero = () => {



  return (
    <div className='pb-[88px]'>
        <div className='md:w-[445px] md:h-445px'>
         <Slider/>
        </div>
        <AddToCart />
        
    
    </div>
  )
}

export default Hero
