import React from 'react'
import { Info } from '../components';
import {infoo } from '../constants/index';

const Main = () => {
  return (
    <div className='bg-main pt-[110px]'>
      {
        infoo.map(({img, title, text, id}) => (
            <Info key={id} img={img} title={title} text={text} />
        ))
      }
    </div>
  )
}

export default Main
