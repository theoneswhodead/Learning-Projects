import React, { useState } from 'react';

import { fetchData } from '../helpers/fetchFromAPI';
const url = 'https://dictionary-data-api.p.rapidapi.com/definition/';


const Hero = () => {

    const [word, setWord] = useState('');
    const [data, setData] = useState({});

    const submitHandler = async (e) => {
      e.preventDefault();
      const WordUrl = `${url}${word}`;
      const result = await fetchData(WordUrl)
      setData(result);
    }

    console.log(data);
  return (
    <div className='dark:bg-black_100 dark:text-white px-[24px] flex flex-col pt-[24px]'>
        <form action="/" method="get" onSubmit={submitHandler}>
        <input 
            type="text" 
            name="search" 
            value={word} 
            onChange={(e) => setWord(e.target.value)}  placeholder='Enter a word...' 
            className=' block bg-gray_300 dark:bg-black_200  w-[327px] h-[48px] rounded-xl p-[24px] font-bold placeholder:text-black_300 dark:placeholder:text-white '   
        />
        
        <label htmlFor="search" className='relative' >
         <button type="submit" className='absolute w-[16px] h-[16px] top-[-30px] left-[290px]'>
            <img src="../../assets/images/icon-search.svg" alt="" className='  '/>
          </button>
        
        
        </label>
        </form>
        
        
        {
  data && Object.keys(data).length > 0 ? (
    <div>
      <h1 className='font-vold'>{data.word}</h1>
      <audio key={data.word} controls>
          <source src={data.pronunciation} type="audio/mpeg" />
           Your browser does not support the audio element.
      </audio>

      {data.meaning.map((meaning, index) => (
        <div key={index}>
          <h2>{meaning.tag}</h2>
          <ul>
            {meaning.values.map((value, i) => (
              <li key={i}>{value}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  ) : null
}     
        

    </div>
  )
}

export default Hero
