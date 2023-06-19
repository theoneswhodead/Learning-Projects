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
    <div className='text-white lg:grid lg:grid-cols-2 lg:mt-[60px] items-center'>
        <div className='flex flex-col  items-center pt-[95px] pb-[116px] relative lg:justify-self-end pr-[90px]'>
          <img src={planetImage} alt="Image of planet" className='w-[111px] h-[111px] sm:w-[184px] sm:h-[184px] lg:w-[290px] lg:h-[290px] '/>
          {
            location.pathname.split('/')[2] === "surface" && 
            <img src={InternalPlanetImage} className='w-[80px] lg:w-[163px] lg:h-[199px] absolute bottom-[40px] sm:bottom-[60px] lg:bottom-0'/>
          }
        </div>
        <div className='flex flex-col sm:flex-row lg:flex-col text-center sm:text-left items-center lg:items-start mx-6 sm:mx-[40px] sm:justify-between lg:justify-self-end lg:pr-[165px] '>
        
          <div className='sm:w-[340px]'>
            <h1 className='font-antonio uppercase text-[40px] sm:text-[48px] lg:text-[80px] mb-4'>{data[planet].name}</h1>
       
        {
         location.pathname.split('/')[2] == 'surface'
         ? 
         <div className='text-center sm:text-left font-spartan text-[11px] lg:text-[14px] leading-[22px] lg:leading-[25px]'>
               <p>{data[planet].structure.content}</p>

               <span className='sm:py-8 opacity-50 flex items-center  justify-center sm:justify-start text-[12px]font-spartan leading-[25px]'>Source : <a href={data[planet].structure.source} className='underline ml-[4px] text-[12px]'>Wikipedia</a>
                <img src="../../assets/icon-source.svg" className='w-[12px] h-[12px] ml-[4px]'/>
               </span>
             </div> 

        :  location.pathname.split('/')[2] == 'structure'
         ?
         
             <div className='text-center sm:text-left font-spartan text-[11px] lg:text-[14px] leading-[22px] lg:leading-[25px]'>
               <p>{data[planet].overview.content}</p>

               <span className='sm:py-8 opacity-50 flex items-center justify-center sm:justify-start text-[12px] font-spartan leading-[22px] lg:leading-[25px]'>Source : <a href={data[planet].overview.source} className='underline ml-[4px] text-[12px]'>Wikipedia</a>
                <img src="../../assets/icon-source.svg" className='w-[12px] h-[12px] ml-[4px]'/>
               </span>
             </div>
     : 
     <div className='text-center sm:text-left font-spartan text-[11px] lg:text-[14px] leading-[22px] lg:leading-[25px]'>
               <p>{data[planet].geology.content}</p>

               <span className='sm:py-8 opacity-50 flex items-center  justify-center sm:justify-start text-[12px]font-spartan leading-[25px]'>Source : <a href={data[planet].geology.source} className='underline ml-[4px] text-[12px]'>Wikipedia</a>
                <img src="../../assets/icon-source.svg" className='w-[12px] h-[12px] ml-[4px]'/>
               </span>
             </div>
       }
        </div>
            <div className='hidden sm:flex flex-col text-[9px] lg:text-[12px] uppercase font-bold font-spartan leading-[25px] tracking-[1.93px]'>
          {
            [{
               id: '01',
               text: 'Overview',
               loc: 'overview'
               },
               {
                id: '02',
                 text: 'Internal Structure',
                 loc: 'structure'
               },
               {
                 id: '01',
                text: 'Surface Geology',
                loc: 'surface'
               },
        ].map((e, index) => (
          <NavLink key={index} to={`/${location.pathname.split('/')[1]}/${e.loc}`} className={({isActive}) => isActive 
          ? 'bg-light_blue mb-[16px] py-[8px] pr-[160px] pl-[20px] lg:py-[12px] lg:pr-[183px] lg:pl-[28px]' 
          : "hover:bg-gray mb-[16px] py-[8px] pr-[160px] pl-[20px] border-[1px] border-white_opacity lg:py-[12px] lg:pr-[183px] lg:pl-[28px]"} > <span className='font-normal opacity-50 pr-[14px]'>{e.id}</span> {e.text}</NavLink>
        ))
        
        }
            </div>
        </div>

        <div className='px-6 sm:px-[40px] pb-[47px] flex flex-col sm:flex-row gap-[8px] lg:gap-[30px] sm:justify-between pt-[12px] lg:col-span-2 lg:mt-[87px] lg:pb-[56px] lg:mx-[165px]'>

        {
          ['rotation', 'revolution', 'radius', 'temperature'].map((key) => (

        <div key={key} className='border-[1px] border-white_opacity flex sm:flex-col items-center justify-between px-6 py-4 sm:pt-[16px] sm:pl-[15px] sm:pb-[19px] sm:w-full sm:items-start lg:col-span-2'>

          <p className='opacity-50 uppercase text-[8px] lg:text-[11px] lg:tracking-[1px] leading-[25px] font-bold tracking-[0.73px]'>{key}</p>
          <p className='font-antonio uppercase text-[20px] lg:text-[50px] sm:text-[24px] tracking-[-0.75px] lg:tracking-[-1.5px] leading-[51.76px]'>{data[planet][key]}</p>

        </div>
       ))
  }
</div>
        
    </div>
  )
}

export default Planet
