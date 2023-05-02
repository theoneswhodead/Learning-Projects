import React from 'react'
import Navbar from './../../components/navbar/Navbar';
import './header.css'

const Header = () => {
  return (
    <header className='header'>
      <Navbar />
      <div className='header__playlist'>
        <p className='header__playlist-text'>Playlist</p>
        <h1 className='header__playlist-title'>Top songs of the world</h1>
        <p className='header__playlist-text'>Popular songs of Dua Lipa and many many others</p>
      </div>

    </header>
  )
}

export default Header
