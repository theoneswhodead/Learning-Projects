import React, { useState } from 'react'
import './play.css'
import HoverMenu from '../HoverMenu/HoverMenu'



const Play = () => {

  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <div className='play'>
      <img className='play-play' src="/assets/icons/play.png" alt="play" />
      <img className='play-heart' src="/assets/icons/heart.png" alt="heart" />
      <img className='play-menu' src="/assets/icons/more-menu-vertical-line.png" alt="menu" onClick={() => setActiveMenu((prev) => !prev)}/>
      {
        activeMenu && <HoverMenu top={80} left={70}/>
      }
   
    </div>
  )
}

export default Play
