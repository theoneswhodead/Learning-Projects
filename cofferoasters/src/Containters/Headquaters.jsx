import React from 'react'

import { HeadquatersItem } from '../Components'

const Headquaters = () => {
  return (
    <div className='mt-[100px]'>
      <h2 className='text-gray font-fraunces text-[24px] leading-[32px] font-black text-center sm:text-left sm:ml-[40px]'>Our Headquaters</h2>

      <div className='sm:flex sm:mx-[40px] lg:mx-[165px] sm:justify-between'>
        {
          [{img: '../../assets/about/desktop/illustration-uk.svg', country:'United Kingdom', street: '68 Asfordby Rd', city: 'Alcaston', post_code: 'SY6 1YA', phone_number: '+44 1241918425'},
          {img: '../../assets/about/desktop/illustration-canada.svg', country: 'Canada', street: '1528 Eglinton Avenue', city: 'Toronto', post_code: 'Ontario M4P 1A6', phone_number : '+1416 485 2997'},
          {img: '../../assets/about/desktop/illustration-australia.svg', country: 'Australia', street: '36 Swanston Street', city: 'Kewell', post_code: 'Victoria', phone_number: '+61 4 9928 3629'}].map(({img, country, street, city, post_code, phone_number}, index) => {
            return(
              <HeadquatersItem img={img} country={country} street={street} city={city} post_code={post_code} phone_number={phone_number} key={index}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Headquaters