import React from 'react'



const FilterBat = ({keywords}) => {
  return (
    <div className='bg-white p-4'>

      {
        keywords.map((key, index) => {
          return (
            <button key={index} className='bg-background text-dark_cyan p-[10px] text-[12px] font-bold rounded-md'>{key}</button>
          )
        })
      }

      
    </div>
  )
}

export default FilterBat
