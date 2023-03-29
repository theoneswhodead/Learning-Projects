import React from 'react';

export default function Header() {
    return(
        <div className='header'>
            <div className='header__wrapper'> 
                <img className="header__pattern" src="/images/pattern-circles.svg" alt="" />
                <h1 className='header__title'>Simple, traffic-based pricing</h1>
                <p className="header__text">Sign-up for our 30-day trial. <br></br> No credit card required.</p>
            </div>

        </div>
    )
}