import React from 'react'
import './reward.css'

const Button = ({text}) => (
  <button className='button'>{text}</button>
)


const reward = ({title, price, text, left, button}) => {
  return (
    <div className='reward'>
        <div className='reward__headline'>
          <h1 className='reward__title'>{title}</h1>
          <h2 className='reward__price'>{price}</h2>
        </div>
        <div>
          <p className='reward__text'>{text}</p>
        </div>
        <div className='reward__footer'>
          <p><span className='reward__left'>{left}</span> left</p>
          <Button text={button}/>
         
        </div>
    </div>
  )
}

export default reward
