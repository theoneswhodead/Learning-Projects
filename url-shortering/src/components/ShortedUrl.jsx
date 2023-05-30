import React, {useState} from 'react'

const ShortedUrl = ({url, short}) => {

  const [copied, setCopied] = useState("");

  const handleCopy = (copyUrl) => {

    setCopied(copyUrl);

    navigator.clipboard.writeText(copyUrl); // copy
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <div className='bg-white p-4 m-6 flex flex-col lg:flex-row lg:items-center justify-center lg:justify-between gap-6 truncate lg:mx-[165px] rounded-md '>
      <p className='border-b-2 pb-5 lg:pb-0 border-gray lg:border-none truncate'>{url}</p>
      <div className='flex flex-col lg:flex-row gap-10'>
      <p className='text-cyan'><a href={short}>{short}</a></p>
      <button type="button" className={`px-[128px] py-[16px] lg:px-0 lg:py-0 lg:w-[104px] lg:h-[42px] rounded-md bg-cyan hover:bg-cyan_hover focus:bg-violet text-white font-bold `}  onClick={() => handleCopy(short)} >
      {copied.length > 0 ? 'Copied!' : 'Copy'}
      </button>
      </div>
      
    </div>
  )
}

export default ShortedUrl