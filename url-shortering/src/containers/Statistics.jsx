import React, {useState} from 'react'
import { options } from '../services/fetchFromApi';

import { Shorten, ShortedUrl } from '../components'

const Statistics = () => {
    const [formData, setFormData] = useState({
        value: '',
        url: '',
        params: { ...options, body: new URLSearchParams({ url: '' }) }
      });
    const [urls, setUrls] = useState([]);
      console.log(urls)
  return (
    <div className='bg-background'>
    
      <Shorten urls={urls} setUrls={setUrls} formData={formData} setFormData={setFormData}/>

      {urls.length === 0 ? ('') : urls.map((ur, index) => (
        <ShortedUrl key={index} url={ur.oldUrl} short={ur.shortUrl} />
      ))}

        <h2>Advanced Statistics</h2>
        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
    </div>
  )
}

export default Statistics
