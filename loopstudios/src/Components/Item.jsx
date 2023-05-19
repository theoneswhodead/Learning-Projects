import React, { useEffect, useState } from 'react';

const Item = ({ img_desktop, img_mobile, text }) => {


    const imgUrl = window.innerWidth >= 768 ? img_desktop : img_mobile;

    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

    useEffect(() => {
      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
      }
      window.addEventListener('resize', handleWindowResize);
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      }
    }, []);

  return (
    <div className={`group mx-[24px] sm:mx-[16px] mb-[24px] bg-cover bg-center w-[333px] sm:w-[260px] h-[120px] sm:h-[450px] hover:cursor-pointer hover:grayscale`}
        style={{backgroundImage: `url(${imgUrl})` }}>
        
      <p className='font-josefin pb-[24px] pt-[54px] sm:pt-[357px] pl-[24px] sm:pl-[44px] pr-[200px] sm:pr-[85px] text-[20px] sm:text-[25px] uppercase text-white group-hover:text-white leading-5 sm:leading-8'>{text}</p>
    </div>
  );
};

export default Item;