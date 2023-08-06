import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text}) => {
  return (
    <Link to="subscribe" className='font-fraunces text-[18px] font-black leading-[25px] text-cream bg-dark_cyan px-[31px] py-[16px] rounded-lg hover:bg-cyan_hover'>{text}</Link>
  )
}

export default Button