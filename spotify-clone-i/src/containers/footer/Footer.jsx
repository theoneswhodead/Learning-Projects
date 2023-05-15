import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__icons'>
            <img src="/assets/icons/home.png" alt="home" />
        </div>
        <div className='footer__icons'>
             <img src="/assets/icons/search.png" alt="search" />
        </div>
        <div className='footer__icons'>
            <img src="/assets/icons/Library.png" alt="library" />
        </div>
        <div className='footer__icons'>
             <img src="/assets/icons/Liked-songs.png" alt="Liked-Songs" />
        </div>
    </div>
  )
}

export default Footer
