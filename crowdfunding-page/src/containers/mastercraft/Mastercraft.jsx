import React from 'react'
import './mastercraft.css'

const Mastercraft = () => {
  return (
    <div className='mc'>
      <img className='mc__logo' src="/src/images/logo-mastercraft.svg" alt="mastercraft-logo" />
      <h1 className='mc__title'>Mastercraft Bamboo Monitor Riser</h1>
      <p className="mc__text">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
      
      <div className="mc__buttons">
        <button className='mc__buttons-back' type="button">Back this project</button>
    
          <div className="mc__buttons-bookmark" >
            <img src="/src/images/icon-bookmark.svg"  alt="bookmark" />
            <button type="button">Bookmark</button>
          </div>

      </div>
    </div>
  )
}

export default Mastercraft
