import React from 'react'

const FilterBar = ({keywords, removeKeywords, clearKeywords}) => {
  return (
    <div className='bg-white p-4 flex '>

      {
        keywords.map((key, index) => {
          return (
            <div key={index} className='bg-background text-dark_cyan p-[10px] pr-[30px] text-[12px] font-bold rounded-md mx-[5px] flex relative'>{key}
            
              <button onClick={() => removeKeywords(key)} className='bg-dark_grayish_cyan absolute bottom-0 right-0 top-0 w-[25px]'>X</button> 
            </div>
          )
        })
      }

      <div onClick={clearKeywords}>CLEAR</div>

      
    </div>
  )
}

export default FilterBar
