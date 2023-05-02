import React from 'react'
import './navbar.css'

const navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar__nav'>
          <img className='navbar__nav-icon' src="/assets/icons/back.png" alt="back" />
          <img className='navbar__nav-icon hide-for-mobile' src="/assets/icons/forward.png" alt="forward" />
        </div>
        <div className='navbar__user hide-for-mobile'>
          <img className='navbar__user-avatar' src="/assets/images/julia.png" alt="userImage" />
          <p className='navbar__user-name'>Julia Gomez</p>
        </div>
    </div>
  )
}

export default navbar
