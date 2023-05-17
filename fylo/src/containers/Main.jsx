import React from 'react'
import { Info } from '../components';
import {infoo } from '../constants/index';

const Main = () => {
  return (
    <div className='bg-main pt-[130px] mx-[auto] '>
    <div className='sm:grid sm:grid-cols-2 sm:justify-items-center flex flex-col items-center max-w-[900px] mx-[auto] section__padding'>
    {
        infoo.map(({img, title, text, id}) => (
            <Info key={id} img={img} title={title} text={text} />
        ))
      }
    </div>
      
    </div>
  )
}

export default Main
