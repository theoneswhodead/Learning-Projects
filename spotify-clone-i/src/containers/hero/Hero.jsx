import React from 'react'
import { Play, Song } from '../../components';
import './hero.css'

// import { id, img, title, artist, time, album } from '../../../assets/json/songs.json'

import songs from '../../../assets/json/songs.json';

const Hero = () => {
  return (
    <div className='hero'>
      <Play />

      {
        songs.songs.map(({ id, img, title, artist, time, album }) => (
          <Song key={id} id={id} img={img} title={title} artist={artist} time={time} album={album}/>
        ))

      }
      
    </div>
  )
}

export default Hero
