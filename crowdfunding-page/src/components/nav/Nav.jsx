import React, {useState} from 'react'
import './nav.css';

const Nav = () => {

  const [isActive, setIsActive] = useState(false);

  return (
    <div className='nav'>
       <div className="nav__logo">
        <img src="/src/images/logo.svg" alt="logo" />
       </div>
       <div className="nav__menu">
       {isActive 
       ? <img className='nav__menu-hamburger_open' src="/src/images/icon-hamburger.svg" alt="hamburger" onClick={() => setIsActive(prev => !prev) } />
       : <img className='nav__menu-hamburger_close' src="/src/images/icon-close-menu.svg" alt="close_menu" onClick={() => setIsActive(prev => !prev) } />}
       
       
        <ul className="nav__menu-items-desktop">
          <li className="nav__menu-items_item"><a href="#">About</a></li>
          <li className="nav__menu-items_item"><a href="#">Discover</a></li>
          <li className="nav__menu-items_item"><a href="#">GetStarted</a></li>
        </ul>

        {isActive && 
        <ul className="nav__menu-items">
          <li className="nav__menu-items_item"><a href="#">About</a></li>
          <li className="nav__menu-items_item"><a href="#">Discover</a></li>
          <li className="nav__menu-items_item"><a href="#">GetStarted</a></li>
        </ul>}
       </div>
    </div>
  )
}

export default Nav
