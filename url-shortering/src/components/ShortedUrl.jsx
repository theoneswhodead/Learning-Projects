import React from 'react'

const ShortedUrl = ({url, short}) => {
  return (
    <div className='bg-white p-4 m-6 flex flex-col justify-center gap-6'>
        <p className='border-b-2 pb-5 border-gray'>{url}</p>
      <p className='text-cyan'><a href={short}>{short}</a></p>
      <button type="button" className='px-[128px] py-[16px] bg-cyan rounded-md'>Copy</button>
    </div>
  )
}

export default ShortedUrl
