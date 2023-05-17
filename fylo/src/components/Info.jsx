import React from 'react'

const Info = ({img, title, text}) => {
  return (
    <div className='text-white flex flex-col justify-center items-center text-center px-[35px] pb-[70px] last:pb-[0px] max-w-[404px]'>
      <img src={img} alt="Images" className='h-[60px] w-[60px]' />
      <h2 className='text-[15px] py-[1rem] font-bold'>{title}</h2>
      <p className='text-[13px]'>{text}</p>
    </div>
  )
}

export default Info
