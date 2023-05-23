import React from 'react'

const data = {
    "id": 1,
    "company": "Photosnap",
    "logo": "../assets/images/photosnap.svg",
    "new": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "tools": []
  }

const JobItem = () => {
  return (
    <div className='w-[100px] h-[100px]'>
    
     <div >
     <div className='bg-[url("./assets/images/photosnap.svg")] w-[50px] h-[50px]'>  //o chuj tu chodzi?

</div>
     </div>
    </div>
  )
}

export default JobItem
