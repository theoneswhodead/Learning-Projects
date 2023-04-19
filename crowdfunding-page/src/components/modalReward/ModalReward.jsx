import React, {useEffect, useState} from 'react'
import './modalReward.css'

const Button = ({text, handler}) => (
  <button className='button' onClick={handler}>{text}</button>
)

const ModalReward = ({title, price, text, left, button, handler}) => {

  const [form, setForm] = useState(false);

  useEffect(() => {
    console.log(form)
  },[form])
  return (
    <div className={form ? 'modal__reward-change'  :  'modal__reward'}>
        <div className='modal__reward__headline'>
        <div className='modal__reward__headline-r'>
        <input type="checkbox" id="sel" checked={form} 
        onChange={() => setForm(prev => !prev)}

        />
        <label htmlFor="sel"></label>

          <h1 className='modal__reward__title'>{title}</h1>
          <h2 className='modal__reward__price'>{price}</h2>
        </div>
          <p><span className='modal__reward__left'>{left}</span>{left && ' left'}</p>
        </div>
        <div>
          <p className='modal__reward__text'>{text}</p>
        </div>
        {form && left &&<div className='modal__reward__footer'>
          <p className='modal__reward__footer-text'>Enter your pladge</p>
          <input className='modal__reward__footer-input' type="number" placeholder='$'/>
           <Button text="Continue" handler={handler}/>
         
        </div>}
    </div>
  )
}

export default ModalReward
