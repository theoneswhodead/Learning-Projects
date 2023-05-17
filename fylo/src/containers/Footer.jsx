import React from 'react'
import { Get } from '../components';

const Info = ({img, text}) => (
    <div className='flex mb-[20px]'>
    <img src={img} alt="email" className='w-[20px] h-[17px] mr-[18px]'/>
    <p>{text}</p>
</div>
)

const Footer = () => {
  return (
    <div className='bg-footer pt-[215px] px-[25px] text-white text-[13px] relative'>

        <Get />
        <img src="'../../images/logo.svg" alt="Logo" className='ml-[15px] mb-[2rem]' />

        <div className='sm:flex sm:justify-between items-start'>

        <div className='sm:w-[380px]'>
            <Info img="../../images/icon-location.svg" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"/>
        </div>
        <div>
            <Info img ="../../images/icon-phone.svg" text="+1-543-123-4567"/>

            <Info img ="../../images/icon-email.svg" text="example@fylo.com"/>
 
        </div>

        <div className='flex flex-col mt-[72px] sm:mt-[0px] mb-[42px] leading-8'>
            <a href="#">About Us</a>
            <a href="#">Jobs</a>
            <a href="#">Press</a>
            <a href="#">Blog</a>
        </div>

        <div className='flex flex-col mb-[30px] leading-8'>
            <a href="#">Contact Us</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
        </div>

        <div className='flex gap-[20px] py-[30px] sm:py-[0px] justify-center'>
            <p>fb</p>
            <p>twitter</p>
            <p>instagram</p>
        </div>
        </div>
        
    </div>
  )
}

export default Footer
