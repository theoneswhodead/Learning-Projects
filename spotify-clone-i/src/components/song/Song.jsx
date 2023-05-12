import React from 'react'
import './song.css';

const Song = ({ id, img, title, name }) => {
  return (
    <div className='song'>
      <div className='song__id'>01</div>
      <div className='song__img'>
        <img src="/assets/images/flowers.png" alt="" />
      </div>
      <div className='song__name'>
        <h3 className='song__name-artist'>Flowers</h3>
        <h2 className='song__name-song'>Flowers</h2>
      </div>
      <div className='song__menu'>
         <img className='play-menu' src="/assets/icons/more-menu-vertical-line.png" alt="" />
      </div>
    </div>
  )
}

export default Song
