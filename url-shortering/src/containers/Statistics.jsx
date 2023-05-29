import React, {useState} from 'react'
import { options } from '../services/fetchFromApi';

import { Shorten, ShortedUrl, Features } from '../components'
import { data } from '../../src/data';

const Statistics = () => {
    const [formData, setFormData] = useState({
        value: '', 
        url: '', 
        params: { ...options, body: new URLSearchParams({ url: '' }) } 
      });


    const [urls, setUrls] = useState([]); 

      console.log(urls)

      console.log(formData)
  return (
    <div className='bg-background'>
    
      <Shorten setUrls={setUrls} formData={formData} setFormData={setFormData}/>

      {urls.shortUrl === '' ? ('') : urls.map((ur, index) => (
        <ShortedUrl key={index} url={ur.oldUrl} short={ur.shortUrl} />
      ))}
        <div className='mx-[44px] my-[100px] text-center'>
          <h2 className='text-[24px] font-bold mb-8'>Advanced Statistics</h2>
          <p className='text-[14px] text-grayish_violet '>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>

          <div className='flex flex-col lg:flex-row mx-6 lg:mx-[165px] lg:pb-[115px]'>
              {
                data.map(({id, text, title, img}, index) => (
                <Features key={id} text={text} title={title} img={img} className={
        index === 0 ? 'mb-[88px]' : index === data.length - 1 ? 'mt-[88px]' : 'mt-[44px]'
      }/>
              ))
              }
          </div>
          
        
    </div>
  )
}

export default Statistics
