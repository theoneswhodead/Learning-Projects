import React, {useState} from 'react'
import { options } from '../services/fetchFromApi';

import { Shorten, ShortedUrl } from '../components'

const Statistics = () => {
    const [formData, setFormData] = useState({
        value: '', // value inputa, też url
        url: '', // url podany
        params: { ...options, body: new URLSearchParams({ url: '' }) } // wartość '' dla url
      });


    const [urls, setUrls] = useState([]); // inicjalizacja tablicą

      console.log(urls)

      console.log(formData)
  return (
    <div className='bg-background'>
    
      <Shorten setUrls={setUrls} formData={formData} setFormData={setFormData}/>

      {urls.shortUrl === '' ? ('') : urls.map((ur, index) => (
        <ShortedUrl key={index} url={ur.oldUrl} short={ur.shortUrl} />
      ))}

        <h2>Advanced Statistics</h2>
        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
    </div>
  )
}

export default Statistics
