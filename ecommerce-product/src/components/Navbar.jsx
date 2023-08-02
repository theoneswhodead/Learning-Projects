import React, {useState} from 'react'

const Navbar = () => {

    const [isActoveMenu, setIsActiveMenu] = useState(false);

    const handleMenu = () => {
        setIsActiveMenu((prev) => !prev);
    }
  return (
    <div className='flex justify-between px-6 pt-[19px] md:mb-[90px] md:mx-[165px] md:border-b-[1px] pb-[25px] md:pb-[34px] md:border-border'>
      <div className='flex items-center gap-4'>
        <img src="../../images/icon-menu.svg" alt="Menu" className='w-[16px] h-[15px] md:hidden' onClick={handleMenu}/>
        <img src="../../images/logo.svg" alt="Sneakers" className='w-[137px] h-[20px]'/>
        <div className='gap-[33px] ml-[56px] hidden md:flex text-[15px] leading-[26px text-Very_dark_blue'>
            <a href="#" className='menu-item'>Collections</a>
            <a href="#" className='menu-item'>Men</a>
            <a href="#" className='menu-item'>Women</a>
            <a href="#" className='menu-item'>About</a>
            <a href="#" className='menu-item'>Contact</a>
        </div>
      </div>
      <div className='flex items-center gap-[22px] md:gap-[46px]'>
            <img src="../../images/icon-cart.svg" alt="Cart" className='w-[22px] h-[20px]'/>
            <img src="../../images/image-avatar.png" alt="Avatar" className='w-[24px] h-[24px] md:w-[50px] md:h-[50px]'/>
      </div>

      {
        isActoveMenu && 
        <div className=' md:hidden absolute  inset-0 flex'>
            <div className='bg-white w-4/5 pl-[25px] pt-[25px]'>
                <img src="../../images/icon-close.svg" alt="Close Menu" className='w-[14px] h-[14px] mb-[53px]' onClick={handleMenu}/>

                <div className='flex flex-col text-Very_dark_blue font-bold text-[18px] leading-[26px] gap-[20px]'>
                    <a href="#">Collections</a>
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            </div>
            <div className='bg-black opacity-75 w-3/5 '>

            </div>
            
        </div>
      }
    </div>
  )
}

export default Navbar
