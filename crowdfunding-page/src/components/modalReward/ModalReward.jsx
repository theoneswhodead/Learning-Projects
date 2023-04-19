import React, {useState} from 'react'
import './modalReward.css'

const reward = ({title, price, text, left, button}) => {
  return (
    <div className='modal__reward'>
        <div className='modal__reward__headline'>
        <div className='modal__reward__headline-r'>
        <input type="radio" id="sel"/>
        <label htmlFor="sel"></label>

          <h1 className='modal__reward__title'>{title}</h1>
          <h2 className='modal__reward__price'>{price}</h2>
        </div>
          <p><span className='modal__reward__left'>{left}</span>{left && ' left'}</p>
        </div>
        <div>
          <p className='modal__reward__text'>{text}</p>
        </div>
        <div className='modal__reward__footer'>
          
         
        </div>
    </div>
  )
}

export default reward
