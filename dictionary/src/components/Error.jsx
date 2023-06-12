import React from 'react'
import Navbar from './Navbar'
import { Hero } from '../containers'

const Error = () => {
  return (
    <div>
      <Navbar />
      <Hero />
        <div className='text-center mt-[240px]'>
             <h1 className='font-bold text-[18px]'>No Definitions Found</h1>
             <p>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
        </div>
      
    </div>
  )
}

export default Error
