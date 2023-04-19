import React from 'react'
import './about.css'
import { Reward } from '../../components'

const About = () => {
  return (
    <section className='about'>
      <div className='about__header'>
        <h1 className='about__title'>About this project</h1>
        <p className='about__text'>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
        to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
        your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
        <p className='about__text'>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
        to allow notepads, pens, and USB sticks to be stored under the stand.</p>
      </div>
      <Reward title='Bamboo Stand' price="Pledge $75 or more" text="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
      you’ll be added to a special Backer member list." left="101" button="Select Reword"/>

      <Reward title='Black Edition Stand' price="Pledge $25 or more" text="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
      member list. Shipping is included." left="64" button="Select Reword"/>

      <Reward title='Mahogany Special Edition' price="Pledge $200 or more" text="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
       to our Backer member list. Shipping is included." left="0" button="Out of stock"/>
 
    </section>
  )
}

export default About
