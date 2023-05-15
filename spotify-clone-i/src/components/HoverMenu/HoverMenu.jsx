import React from 'react'
import './hoverMenu.css'

const HoverMenu = ({top, left, right}) => {
  return (
    <div className='hoverMenu' style={{top: top, left: left, right: right}}>
      <p className='hoverMenu__text hoverMenu__text__underline'>Add to queue</p>
      <p className='hoverMenu__text'>Go to the track</p>
      <p className='hoverMenu__text'>Go to the artist</p>
      <p className='hoverMenu__text'>Go to album</p>
      <p className='hoverMenu__text hoverMenu__text__underline'>Show content authors</p>
      <p className='hoverMenu__text'>Add to playlist</p>
      <p className='hoverMenu__text hoverMenu__text__underline'>Show content authors</p>
      <p className='hoverMenu__text'>Share</p>
    </div>
  )
}

export default HoverMenu
