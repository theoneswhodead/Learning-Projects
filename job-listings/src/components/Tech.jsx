import React from 'react'

const Tech = ({text, setIsActive}) => {
   const handler = (e) => {
        setIsActive( (prev) => !prev )
        
    }
  return (
    <div>
    <div className='bg-background text-dark_cyan p-[10px] text-[12px] font-bold rounded-md' onClick={handler}>
        {text}
      </div>
    </div>
  )
}

export default Tech
