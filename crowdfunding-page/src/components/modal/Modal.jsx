import React from 'react'
import './modal.css'
import {ModalReward} from '..';

const Modal = ({handler}) => {
  return (
    <div className='modal'>
      <div className='modal__header'>
       <img className='modal__close' src="/src/images/icon-close-modal.svg" alt="close_menu" onClick={handler} />
        <h1 className='modal__title'>Back this project</h1>
      </div>
      <p className='modal__text'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
       
       <ModalReward title="Pledge with no reward" text="Choose to support us without a reward if you simply believe in our project. As a backer, 
        you will be signed up to receive product updates via email." isButton={false}/>

      <ModalReward title='Bamboo Stand' price="Pledge $75 or more" text="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
      you’ll be added to a special Backer member list." left="101" button="Select Reword"/>

      <ModalReward title='Black Edition Stand' price="Pledge $25 or more" text="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
      member list. Shipping is included." left="64" button="Select Reword"/>

      <ModalReward title='Mahogany Special Edition' price="Pledge $200 or more" text="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
       to our Backer member list. Shipping is included." left="0" button="Out of stock"/>
    </div>
  )
}

export default Modal
