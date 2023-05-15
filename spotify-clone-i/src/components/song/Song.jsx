import React, { useState} from 'react'
import './song.css';
import HoverMenu from '../HoverMenu/HoverMenu';

const Song = ({ id, img, title, album, time, artist}) => {

  const [play, setPlay] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);

  // console.log(play);
  return (
    <div className={play ? 'song-active' : 'song'}>
      <div className="song__wrapper">
        <div className={play ? 'song__id-active' :'song__id'}>{id}</div>
        <div className={play ? 'song__play-active' : 'song__play'} onClick={()=> setPlay((prev)=> !prev)}>
          <img src="../../../assets/icons/Vector.png" alt="Play" />
        </div>
        <div className='song__img'>
          <img src={img} alt="" />
        </div>
        <div className='song__name'>
          <h3 className='song__name-h3'>{album}</h3>
          <h2 className='song__name-h2'>{title}</h2>
         </div>
      </div>
      <div className='song__artist'>
          <h3 className='song__name-h3'>Artist</h3>
          <h2 className='song__name-h2'>{artist}</h2>
      </div>
      <div className='song__time'>
          <h3 className='song__name-h3'>Time</h3>
          <h2 className='song__name-h2'>{time}</h2>
      </div>
      <div className='song__menu'>
         <img className='play-heart song__menu-like' src="/assets/icons/heart.png" alt="Like" />
         <img className='play-menu' src="/assets/icons/more-menu-vertical-line.png" alt="Menu" onClick={()=> setActiveMenu((prev)=> !prev)} />
         {
              activeMenu && <HoverMenu top={0} right={40}/>
          }
         
      </div>
    </div>
  )
}

export default Song
