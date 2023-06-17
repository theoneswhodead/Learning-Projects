import React from 'react'
import { useLocation, NavLink } from 'react-router-dom';

import data from '../../data.json';

const Planet = () => {

  const location = useLocation();
  const planetName = location.pathname.split('/')[1];
  const planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
  const planetIndex = planets.includes(planetName) ? planets.indexOf(planetName) : 0;
  const planet = planetIndex !== -1 ? planetIndex : 0;

  const planetImage = location.pathname.split('/')[2] === 'structure'
  ? `../../assets/planet-${planetName}-internal.svg`
  : `../../assets/planet-${planetName}.svg`;

const InternalPlanetImage = `../../assets/geology-${planetName}.png`;

  return (
    <div className='text-white '>
        <div className='flex flex-col items-center pt-[95px] pb-[116px]'>
          <img src={planetImage} alt="Image of planet" className='w-[111px] h-[111px] sm:w-[184px] sm:h-[184px]'/>
          {
            location.pathname.split('/')[2] === "surface" && 
            <img src={InternalPlanetImage} className='w-[225px] '/>
          }
        </div>
        <div className='flex flex-col sm:flex-row items-center mx-6 sm:mx-[40px] sm:justify-between'>
        
          <div className='sm:w-[340px]'>
            <h1 className='font-antonio uppercase text-[40px] sm:text-[48px] mb-4'>{data[planet].name}</h1>
       
        {
         location.pathname.split('/')[2] == 'overview'
         ? 
             <div className='text-center sm:text-left font-spartan text-[11px] leading-[22px]'>
               <p>{data[planet].overview.content}</p>

               <span className='sm:py-8 opacity-50 flex items-center justify-center sm:justify-start text-[12px]font-spartan leading-[25px]'>Source : <a href={data[planet].overview.source} className='underline ml-[4px] text-[12px]'>Wikipedia</a>
                <img src="../../assets/icon-source.svg" className='w-[12px] h-[12px] ml-[4px]'/>
               </span>
             </div>

        :  location.pathname.split('/')[2] == 'structure'
         ?
         <div className='text-center sm:text-left font-spartan text-[11px] leading-[22px]'>
               <p>{data[planet].structure.content}</p>

               <span className='sm:py-8 opacity-50 flex items-center  justify-center sm:justify-start text-[12px]font-spartan leading-[25px]'>Source : <a href={data[planet].structure.source} className='underline ml-[4px] text-[12px]'>Wikipedia</a>
                <img src="../../assets/icon-source.svg" className='w-[12px] h-[12px] ml-[4px]'/>
               </span>
             </div>
     : 
     <div className='text-center sm:text-left font-spartan text-[11px] leading-[22px]'>
               <p>{data[planet].geology.content}</p>

               <span className='sm:py-8 opacity-50 flex items-center  justify-center sm:justify-start text-[12px]font-spartan leading-[25px]'>Source : <a href={data[planet].geology.source} className='underline ml-[4px] text-[12px]'>Wikipedia</a>
                <img src="../../assets/icon-source.svg" className='w-[12px] h-[12px] ml-[4px]'/>
               </span>
             </div>
       }
        </div>
            <div className='hidden sm:flex flex-col'>
            <NavLink to={`/${location.pathname.split('/')[1]}/overview`}  
        className={({isActive}) => isActive ? 'bg-light_blue' : "hover:bg-gray"} > 01 Overview</NavLink>

          <NavLink to={`/${location.pathname.split('/')[1]}/structure`} className={({isActive}) => isActive ? 'bg-light_blue' : "hover:bg-gray"}>02 Internal Structure</NavLink>
          <NavLink to={`/${location.pathname.split('/')[1]}/surface`} className={({isActive}) => isActive ? 'bg-light_blue' : "hover:bg-gray"}>03 Surface Geology</NavLink>
            </div>
        </div>

        <div className='px-6 sm:px-[40px] pb-[47px] flex flex-col sm:flex-row gap-[8px] sm:justify-between pt-[12px]'>
        {['rotation', 'revolution', 'radius', 'temperature'].map((key) => (
        <div key={key} className='border-[1px] border-white_opacity flex sm:flex-col items-center justify-between px-6 py-4 sm:pt-[16px] sm:pl-[15px] sm:pb-[19px] sm:w-full sm:items-start'>
          <p className='opacity-50 uppercase text-[8px] font-bold tracking-[0.73px]'>{key}</p>
          <p className='font-antonio uppercase text-[20px] sm:text-[24px] tracking-[-0.75px]'>{data[planet][key]}</p>
        </div>
  ))}
</div>
        
    </div>
  )
}

export default Planet
