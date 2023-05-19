import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black p-[50px] flex flex-col sm:flex-row justify-center sm:justify-around items-center'>
        <div>
          <img src="/images/logo.svg" alt="loopstudios" className='mb-[2rem]'/>
          <div className='text-white flex flex-col sm:flex-row items-center gap-[24px] last:pb-[50px]'>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Events</a>
              <a href="#">Products</a>
              <a href="#">Support</a>
          </div>
        </div>

        <div >
          <div className='flex justify-center sm:justify-end gap-[20px] pb-[24px]'>
            <a href="#">
              <img src="/images/icon-facebook.svg" alt="facebook" />
            </a>
            <a href="#">
              <img src="/images/icon-twitter.svg" alt="twitter" />
            </a>
            <a href="#">
              <img src="/images/icon-pinterest.svg" alt="pinterest" />
            </a>
            <a href="#">
              <img src="/images/icon-instagram.svg" alt="instagram" />
            </a>
          </div>
          <h3 className='text-gray text-[14px]'>© 2023 Loopstudios. All rights reserved.</h3>
        </div>
        
    </div>
  )
}

export default Footer
