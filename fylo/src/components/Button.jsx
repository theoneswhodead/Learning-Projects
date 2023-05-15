import React from 'react'

const Button = ({text}) => {
  return (
    <button type='button' className='call__gradient py-[1rem] sm:py-[22px] px-[75px] sm:px-[100px] rounded-[30px]'>
        {text}
    </button>
  )
}

export default Button
