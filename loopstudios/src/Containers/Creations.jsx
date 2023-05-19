import React from 'react'
import { Item } from '../Components'

import { items } from '../constants'

const Creations = () => {
    // console.log(items)
  return (
    <div className='flex flex-col items-center sm:block'>
      <div className='flex justify-around '>
        <h2 className='text-[22px] sm:text-[40px] uppercase font-josefin text-center mb-[50px]'>Our Creations</h2>
        <button type="button" className='hidden sm:block border h-[42px] w-[160px] uppercase tracking-wide hover:bg-black hover:text-white'>See all</button>
      </div>
      

      <div className='flex flex-col sm:flex-row flex-wrap items-center justify-center lg:mx-[160px] xl:mx-[300px]'>

      {
        items.map((item)=> (
          <Item img_desktop={item.img_desktop} img_mobile={item.img_mobile} text={item.text}/>
        ))
      }
      </div>
      <button type="button" className='sm:hidden border h-[42px] w-[160px] mb-[100px] uppercase tracking-wide hover:bg-black hover:text-white'>See all</button>
      
    </div>
  )
}

export default Creations
