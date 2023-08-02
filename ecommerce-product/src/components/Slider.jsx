import React, {useState, useEffect} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const images = [
  "../../images/image-product-1.jpg",
  '../../images/image-product-2.jpg',
  '../../images/image-product-3.jpg',
  '../../images/image-product-4.jpg'
]

const Slider = () => {

  const [width, setWidth] = useState(window.screen.width);
  const [isMobile, setIsMobile] = useState(false);

  // let screenWidth = window.screen.width;


  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.screen.width);
    }
    window.addEventListener('resize', updateWidth);

      if(width >= 1060) {
        setIsMobile(true)
      } else if (width < 1060) {
        setIsMobile(false)
      }
  

    return(() => {
      window.removeEventListener('resize', updateWidth)
    })
 
    
  }, [width])
  
  console.log(width);
  console.log(isMobile)
  return (
    <div>
        <Carousel
      axis="horizontal"
      showStatus={false}
      showIndicators={false}
      showThumbs={isMobile} //true on desktop
      className="relative"
      renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <div
            className={`${
              hasPrev ? 'absolute' : 'hidden'
            } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <div className='w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center'>
                <img src="../../images/icon-previous.svg" alt="" className='arrow'/>
            </div>
          </div>
        );
      }}

      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <div
            className={`${
              hasNext ? 'absolute' : 'hidden'
            } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <div className='w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center'>
                <img src="../../images/icon-next.svg" alt="" className='arrow'/>
            </div>
          </div>
        );
      }}
    >

      {
        images.map( image => {
          return (
            <div className="w-full relative">
            <img
              src={image}
              alt="product"
              className="w-full h-full image-desktop top-0 left-0 object-cover md:rounded-lg"
        />
      </div>
          )
        })
      }
     
    </Carousel>
    </div>
  )
}

export default Slider
