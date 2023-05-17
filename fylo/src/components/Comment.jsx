import React from 'react'

const Comment = ({img, name, comment, position}) => {
  return (
    <div className='bg-testimonials px-[20px] py-[20px] mb-[22px] sm:mb-[0px] sm:mr-[44px] sm:last:mr-[0px]  rounded text-white '>
      <p className='text-[10px] sm:text-[14px]'>{comment}</p>

      <div className='flex mt-[1rem] '>
        <img src={img} alt="Avatar" className='w-[25px] h-[25px] rounded-full mr-[8px]'/>
        <div>
            <h2 className='font-bold text-[10px]'>{name}</h2>
            <h3 className='text-[7px]'>{position}</h3>
        </div>
      </div>
    </div>
  )
}

export default Comment
