import React from 'react'

import { Coffee } from '../Components'

const Collection = () => {
  return (
    <div className='flex flex-col text-center'>
        <h2 className='text-gray font-fraunces text-[40px] sm:text-[96px] lg:text-[150px] font-black leading-[72px]   
        text-transparent bg-clip-text bg-gradient-to-b from-gray to-white pt-[120px]'>our collection</h2>
        <div className='lg:flex lg:justify-center lg:gap-[30px]'>
          {
            [{img: '../../assets/home/desktop/image-gran-espresso.png', name: 'Gran Espresso', text: 'Light and flavorful blend with cocoa and black pepper for an intense experience'},
          
            {img: '../../assets/home/desktop/image-planalto.png', name: 'Planalto', text: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts'},
            {img: '../../assets/home/desktop/image-piccollo.png', name: 'Piccollo', text: 'Mild and smooth blend featuring notes of toasted almond and dried cherry '},
            {img: '../../assets/home/desktop/image-danche.png', name: 'Danche', text: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes'}].map(({img, text, name}, index) => {
              return (
                <Coffee img={img} name={name} text={text} key={index} />
              )
            })
          }
        </div>
        
        
    </div>
  )
}

export default Collection