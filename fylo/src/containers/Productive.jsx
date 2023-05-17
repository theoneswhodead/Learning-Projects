import React from 'react'

const Prodictive = () => {
  return (
    <div className='bg-main section__padding text-white px-[26px] flex flex-col ss:flex-row sm:px-[100px] items-center'>
    
      <img src="/images/illustration-stay-productive.png" alt="Images" className='ss:w-[50%] mb-[45px] sm:mb-[0px]' />
      <div className='ss:ml-[20px] sm:ml-[50px] sm:max-w-[556px]'>

      <h2 className='text-[15px] sm:text-[2rem] py-[1rem] sm:pb-[2rem]  font-bold ss:w-[150px] sm:w-[300px]'>Stay productive, wherever you are</h2>

      <p className='text-[13px] sm:text-[1rem]'>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>

      <p className='text-[13px] sm:text-[1rem] my-[1rem] sm:mt-[22px] sm:mb-[2rem]' >
      Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required. 
      </p>
      
      <button className='flex items-center border-b border-cyan text-cyan hover:cursor-pointer w-[120px] sm:w-[170px]'>
        <span className='text-cyan opacity-50 pr-[4px] text-[11px] sm:text-[16px]'>See how Fylo works</span>

        <img src="/images/icon-arrow.svg" className='opacity-100 block w-[15px] sm:w-[17px] h-[15px] sm:h-[17px]' alt="" />
      </button>
    </div>





      {/* <button className='flex underline text-cyan'><span className='text-cyan opacity-50'>See how Fylo workd</span> <img src="/images/icon-arrow.svg" className='opacity-100' alt="" /></button> */}
      
      {/* <a href="#" className='text-cyan opacity-50 underline'>See how Fylo works</a> */}
    </div>
  )
}

export default Prodictive
