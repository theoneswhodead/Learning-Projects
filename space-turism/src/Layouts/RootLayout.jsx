import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'


//Containers
import { Hero } from '../containers'
import { Outlet } from 'react-router-dom'

import 
{
    HomeDesktopBackground,
    HomeTabletBackground,
    HomeMobileBackground,

    DestinationDesktopBackground,
    DestinationTabletBackground,
    DestinationMobileBackground,

    CrewDesktopBackground,
    CrewTabletBackground,
    CrewMobileBackground,

    TechnologyDesktopBackground,
    TechnologyTabletBackground,
    TechnologyMobileBackground 
} from '../../assets/bgimages';

    const imageMappings = {
        Home: {
          desktop: HomeDesktopBackground,
          tablet: HomeTabletBackground,
          mobile: HomeMobileBackground,
        },
        Destination: {
          desktop: DestinationDesktopBackground,
          tablet: DestinationTabletBackground,
          mobile: DestinationMobileBackground,
        },
        Crew: {
          desktop: CrewDesktopBackground,
          tablet: CrewTabletBackground,
          mobile: CrewMobileBackground,
        },
        Technology: {
          desktop: TechnologyDesktopBackground,
          tablet: TechnologyTabletBackground,
          mobile: TechnologyMobileBackground,
        },
      };

      const getImageUrl = (location, windowWidth) => {
        let imageSize = 'desktop';
      
        if (windowWidth < 768) {
          imageSize = 'mobile';
        } else if (windowWidth < 1060) {
          imageSize = 'tablet';
        }
      
        return imageMappings[location][imageSize];
      };

const RootLayout = () => {
    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);
    const location = useLocation();
    const [imageUrl, setImageUrl] = useState('');


    useEffect(() => {
        let loc = '';
        if (location.pathname === '/') {
          loc = 'Home';
        } else if (location.pathname === '/destination') {
          loc = 'Destination';
        } else if (location.pathname === '/crew') {
          loc = 'Crew';
        } else if (location.pathname === '/technology') {
          loc = 'Technology';
        }

        setImageUrl(getImageUrl(loc, windowWidth));
      }, [location, windowWidth]);

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
    <div className={` pb-[1000px] bg-cover bg-center`}
    style={{
        backgroundImage: `url(${imageUrl})` //eval is bad
    }}>
        <Hero />
        <main>
            <Outlet />
        </main>
    </div>

  )
}

export default RootLayout