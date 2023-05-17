import React from 'react'
import { Button } from '../components';

const Get = () => {
  return (
    <div className='bg-intro px-[24px] py-[2rem] rounded-md absolute top-[-160px] left-[50%] translate-x-[-50%]'>
      <h2 className='font-bold text-center text-[15px] pb-[24px]'>Get early access today</h2>
      <p className='text-center text-[11px] md:mx-[150px]'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
    <div className='flex flex-col sm:flex-row items-center sm:gap-[20px]'>
        <input type="text" required placeholder='example@example.com' className=' py-[1rem] sm:py-[22px] px-[59px] sm:px-[50px] ss:px-[100px] lg:px-[150px] rounded-[30px] my-[24px]'/>
        <Button text="Get Started For Free" />
    </div>
      
    </div>
  )
}

export default Get
