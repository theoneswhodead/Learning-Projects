import React from 'react'

const HeadquatersItem = ({img, country, street, city, post_code, phone_number}) => {
  return (
    <div className='flex flex-col items-center sm:items-start'>
      <img src={img} alt="picture of country" className='mb-[46px] mt-[80px]'/>

      <h2 className='font-fraunces text-[28px] font-black leading-[36px] mb-[24px]'>{country}</h2>
      <p className='text-[16px] font-barlow leading-[26px] text-dark_gray'>
        {street} <br />
        {city} <br />
        {post_code} <br />
        {phone_number}
      </p>
    </div>
  )
}

export default HeadquatersItem