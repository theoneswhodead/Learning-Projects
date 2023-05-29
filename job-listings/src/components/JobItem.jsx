import React from 'react'

import { Tech } from '../components';
//import LOGO from '../../images/photosnap.svg'
// const data = {
//     "id": 1,
//     "company": "Photosnap",
//     "logo": "../../images/photosnap.svg",
//     "new": true,
//     "featured": true,
//     "position": "Senior Frontend Developer",
//     "role": "Frontend",
//     "level": "Senior",
//     "postedAt": "1d ago",
//     "contract": "Full Time",
//     "location": "USA Only",
//     "languages": ["HTML", "CSS", "JavaScript"],
//     "tools": []
//   }




const JobItem = (props) => {

  const {
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = props.data;

  let keywords = [role, level, ...languages, ...tools]

  // console.log(data);
  return (
    <div className='flex justify-center '>
     
      <div  className='w-[325px]  bg-white border-dark_cyan border-l-4 mx-[24px] rounded-md mt-[55px] relative pl-[20px]'>
      <img src={logo} alt="logo" className='w-[50px] h-[50px] absolute top-[-25px] left-[25px]'/>
      <div className='border-b-2 border-grayish_cyan pb-[24px]'>
      <div className='mt-[40px] flex gap-[24px]'>
          <p className='text-[14px] text-dark_cyan font-bold'>{company}</p>
          
          <div className='flex gap-[8px]'>

            {
              props.data.new && (
                <div className='uppercase text-[14px] text-white bg-dark_cyan w-[52px] h-[26px] rounded-xl text-center pt-[2px]'>New!</div>
              )
            }
            {
              props.data.featured && (
                <div className='uppercase text-[14px] text-white  bg-dark_grayish_cyan w-[81px] h-[26px] rounded-xl text-center pt-[2px]'>featured</div>
              )
            }
          </div>
        </div>
        <p className='font-bold my-[1rem]'>{position}</p>
        <p className='text-grayish_cyan text-[15px] font-bold'>{postedAt} · {contract} · {location}</p>
      </div>
        <div className='my-[1rem] flex flex-wrap gap-[1rem]'>

          {
            keywords.map((key, index) => (
              <button onClick={() => props.setFilterKeywords(key)} key={index} className='bg-background text-dark_cyan p-[10px] text-[12px] font-bold rounded-md'>{key}</button>
            ))
          }





            {/* <Tech text={role}/>
            <Tech text={level}/>
            {
              languages.map((lang) => {

                return (
                  <Tech text={lang}/>
                )        
              })
            }
            {
              tools.map((lang) => {

                return (
                  <Tech text={lang}/>
                )        
              })
            } */}
        </div>
      </div>
    </div>
  )
}

export default JobItem
