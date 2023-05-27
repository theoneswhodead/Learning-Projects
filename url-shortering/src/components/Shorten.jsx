import React, { useState, useEffect } from 'react';
import { fetchFromApi, options } from '../services/fetchFromApi';
import ShortedUrl from './ShortedUrl';

const ApiUrl = 'https://shorturl9.p.rapidapi.com/functions/api.php';

const Shorten = ({setUrls, formData, setFormData}) => {
  

  

  useEffect(() => {
    
    
    const fetchData = async () => {
      try {
        const data = await fetchFromApi(ApiUrl, formData.params);
        setUrls((prev) => [
          ...prev,
          {
            shortUrl: data.url,
            oldUrl: formData.url
          }
        ]);
      } catch (error) {
        // Obsługa błędów połączenia z API
        console.error(error);
      }
    };

    fetchData();
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      url: prev.value, //bug
      params: {
        ...prev.params,
        body: new URLSearchParams({ url: prev.url })
      }
    }));
  };

  return (
    <div className='mt-[86px] mx-6 lg:mx-[165px] rounded-lg bg-violet bg-[url("../../images/bg-shorten-mobile.svg")] bg-no-repeat bg-right-top lg:bg-[url("../../images/bg-shorten-desktop.svg")] lg:bg-left'>
      <form action='post' className='flex flex-col lg:flex-row gap-[16px] lg:gap-[24px] px-6 lg:py-[50px] lg:px-[65px] py-6' onSubmit={handleSubmit}>
        <input
          type='url'
          value={formData.value}
          placeholder='Shorten a link here...'
          onChange={(e) => setFormData((prev) => ({ ...prev, value: e.target.value }))}
          required
          className='py-4 pl-[1rem] rounded-md lg:w-full'
        />
        <button type='submit' className='lg:w-[190px] px-[92px] lg:px-[42px] py-4 bg-cyan text-white font-bold rounded-md'>
          Shorten It!
        </button>
      </form>

      
    </div>
  );
};

export default Shorten;