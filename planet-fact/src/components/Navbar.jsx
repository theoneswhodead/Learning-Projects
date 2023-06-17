import React, {useState} from 'react'

import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [isActiveMenu, setIsActiveMenu] = useState(false);
  return (
    <div>
        <div className='flex justify-between sm:flex-col lg:flex-row items-center py-4 px-6 lg:pt-[22px] lg:pb-[27px] lg:px-[32px] border-b-[1px] border-white_opacity'>
            <a href="/" className='font-antonio text-[28px] sm:text-[36px] text-white tracking-[-1.05px] uppercase'>The Planets</a>
            <img src="../../assets/icon-hamburger.svg" alt="hamburger Menu" className='w-[24px] h-[17px] opacity-10 sm:hidden' onClick={() => setIsActiveMenu((prev) => !prev)}/>

            <div className='text-white justify-between w-full lg:w-[665px] pt-[39px] lg:pt-[33px] lg:pr-[8px] hidden sm:flex uppercase font-spartan tracking-[1px] text-[11px] font-bold opacity-70'>
                <NavLink to="mercury" className="item">Mercury</NavLink>
                <NavLink to="venus" className="item">Venus</NavLink>
                <NavLink to="earth" className="item">Earth</NavLink>
                <NavLink to="mars" className="item">Mars</NavLink>
                <NavLink to="jupiter" className="item">Jupiter</NavLink>
                <NavLink to="saturn" className="item">Saturn</NavLink>
                <NavLink to="uranus" className="item">Uranus</NavLink>
                <NavLink to="neptune" className="item">Neptune</NavLink>
            </div>

        </div>


        {
            isActiveMenu &&
             <div className='absolute bg-dark w-[100%] text-white px-6 pt-[44px] font-spartan uppercase sm:hidden z-10'>
               <div className='flex flex-col'>
                    <div className='flex items-center justify-between pb-[20px] border-b-[1px] border-white_opacity'>
                        <div className='flex items-center gap-[25px]'>
                            <img src="../../assets/planet-mercury.svg" alt="Mercury" className='w-[20px] h-[20px]'/>
                            <NavLink to="mercury">Mercury</NavLink>
                        </div>
                        <img src="../../assets/icon-chevron.svg" alt="" className='w-[6px] h-[10px]'/>
                    </div>

                    <div className='flex items-center justify-between py-[20px] border-b-[1px] border-white_opacity'>
                        <div className='flex items-center gap-[25px]'>
                            <img src="../../assets/planet-venus.svg" alt="Venus" className='w-[20px] h-[20px]'/>
                            <NavLink to="venus">Venus</NavLink>
                        </div>
                        <img src="../../assets/icon-chevron.svg" alt="" className='w-[6px] h-[10px]'/>
                    </div>

                    <div className='flex items-center justify-between py-[20px] border-b-[1px] border-white_opacity'>
                        <div className='flex items-center gap-[25px]'>
                            <img src="../../assets/planet-earth.svg" alt="Earth" className='w-[20px] h-[20px]'/>
                            <NavLink to="earth">Earth</NavLink>
                        </div>
                        <img src="../../assets/icon-chevron.svg" alt="" className='w-[6px] h-[10px]'/>
                    </div>

                    <div className='flex items-center justify-between py-[20px] border-b-[1px] border-white_opacity'>
                        <div className='flex items-center gap-[25px]'>
                            <img src="../../assets/planet-mars.svg" alt="Mars" className='w-[20px] h-[20px]'/>
                            <NavLink to="mars">Mars</NavLink>
                        </div>
                        <img src="../../assets/icon-chevron.svg" alt="" className='w-[6px] h-[10px]'/>
                    </div>

                    <div className='flex items-center justify-between py-[20px] border-b-[1px] border-white_opacity'>
                        <div className='flex items-center gap-[25px]'>
                            <img src="../../assets/planet-jupiter.svg" alt="Jupiter" className='w-[20px] h-[20px]'/>
                            <NavLink to="jupiter">Jupiter</NavLink>
                        </div>
                        <img src="../../assets/icon-chevron.svg" alt="" className='w-[6px] h-[10px]'/>
                    </div>

                    <div className='flex items-center justify-between py-[20px] border-b-[1px] border-white_opacity'>
                        <div className='flex items-center gap-[25px]'>
                            <img src="../../assets/planet-saturn.svg" alt="Saturn" className='w-[20px] h-[20px]'/>
                            <NavLink to="saturn">Saturn</NavLink>
                        </div>
                        <img src="../../assets/icon-chevron.svg" alt="" className='w-[6px] h-[10px]'/>
                    </div>

                    <div className='flex items-center justify-between py-[20px] border-b-[1px] border-white_opacity'>
                        <div className='flex items-center gap-[25px]'>
                            <img src="../../assets/planet-uranus.svg" alt="Uranus" className='w-[20px] h-[20px]'/>
                            <NavLink to="uranus">Uranus</NavLink>
                        </div>
                        <img src="../../assets/icon-chevron.svg" alt="go" className='w-[6px] h-[10px]'/>
                    </div>

                    <div className='flex items-center justify-between py-[20px] border-b-[1px] border-white_opacity'>
                        <div className='flex items-center gap-[25px]'>
                            <img src="../../assets/planet-neptune.svg" alt="Neptune" className='w-[20px] h-[20px]'/>
                            <NavLink to="neptune">Neptune</NavLink>
                        </div>
                        <img src="../../assets/icon-chevron.svg" alt="go" className='w-[6px] h-[10px]'/>
                    </div>

               </div>
            </div>
        }
    </div>
  )
}

export default Navbar
