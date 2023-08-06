import React, {useState, useEffect} from 'react'

import { Button } from '../Components'
// const bTablet = '../../assets/home/tablet/image-hero-coffeepress.jpg'
// const bgDesktop = '../../assets/home/desktop/image-hero-coffeepress.jpg'


const Header = () => {

    // const [size, setSize] = useState(window.innerWidth);
    // const [bgImage, setBgImage] = useState('../../assets/home/mobile/image-hero-coffeepress.jpg')

    // useEffect(() => {
    //     const screenSizeHandler = () => {
    //         setSize(window.innerWidth);
    //     }

    //         window.addEventListener('resize', screenSizeHandler)
    
    //         return () => (
    //             window.removeEventListener('resize', screenSizeHandler)
    //         )
    // }, [])
    // if(size >= 768 ) {
    //     setBgImage('../../assets/home/tablet/image-hero-coffeepress.jpg');
    // } else if ( size >= 1200 ) {
    //     setBgImage('../../assets/home/desktop/image-hero-coffeepress.jpg');
    // }


    // console.log(size)

  return (
    <div className={`bg-[url('../../assets/home/mobile/image-hero-coffeepress.jpg')] sm:bg-[url('../../assets/home/tablet/image-hero-coffeepress.jpg')] lg:bg-[url('../../assets/home/desktop/image-hero-coffeepress.jpg')] mx-[24px] lg:mx-[80px] sm:pl-[58px]  h-[500px] rounded-lg bg-center bg-cover text-center sm:text-left`}>

        <h1 className='text-cream font-fraunces text-[40px] sm:text-[48px] sm:leading-[48px] font-black pt-[100px] px-[24px] sm:pl-0 leading-[40px] lg:text-[72px] lg:leading-[72px]'>Great coffee <br /> made simple.</h1>

        <p className='font-barlow leading-[25px] lg:leading-[26px] text-[15px] text-cream_opacity p-[24px] sm:pl-0 mb-[40px] sm:w-[430px]'>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>

        <Button text="Create your plan"/>
    </div>
  )
}

export default Header