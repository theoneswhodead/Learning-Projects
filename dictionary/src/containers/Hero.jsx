import React, { useState, useRef } from 'react';
import { redirect } from 'react-router-dom';
import { fetchData } from '../helpers/fetchFromAPI';
const url = 'https://dictionary-data-api.p.rapidapi.com/definition/';


const Hero = () => {

    const [word, setWord] = useState('');
    const [data, setData] = useState({});

    const audioRef  = React.useRef();

  const handleAudio = () => {
      audioRef.current.play();
  }


    const submitHandler = async (e) => {
      e.preventDefault();
      const WordUrl = `${url}${word}`;
      if(word !== '') {
        try {
          const result = await fetchData(WordUrl)
           setData(result);
        } catch (error) {
          console.log('erororor',error)
          redirect('/error');
        }
        
      } else {
        alert('Write a word')
      }
      
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
            className=' block bg-gray_300 dark:bg-black_200  w-[327px] sm:w-full h-[48px] rounded-xl p-[24px] font-bold placeholder:text-black_300 dark:placeholder:text-white '   
        />
        
        <label htmlFor="search" className='relative' >
         <button type="submit" className='absolute w-[16px] h-[16px] top-[-30px] left-[290px] '>
            <img src="../../assets/images/icon-search.svg" alt="" className='  '/>
          </button>
        
        
        </label>
        </form>
        
        
        {
  data && Object.keys(data).length > 0 ? (
    <div className='sm: pb-[12rem]'>
      <div className='flex justify-between mt-6'>
        <h1 className='font-vold text-[2rem] font-bold sm:text-[64px]'>{data.word}</h1>
        <audio key={data.word} ref={audioRef}>
          <source src={data.pronunciation} type="audio/mpeg" />
           Your browser does not support the audio element.
        </audio>
        <button onClick={handleAudio} className='bg-[url("../../assets/images/icon-play.svg")] bg-center bg-cover w-[48px] h-[48px]'></button>
      </div>
      

      {data.meaning.map((meaning, index) => (
        <div key={index} className='mx-[24px]'>
          <h2 className='font-bold text-[18px] my-[2rem]'>{meaning.tag}</h2>
          <ol className='list-disc list-violet'>
            {meaning.values.map((value, i) => (
              <li key={i} className='text-[15px]'>{value}</li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  ) : null
}     
        

    </div>
  )
}

export default Hero
