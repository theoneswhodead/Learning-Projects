import React from 'react'
import { Navbar } from '../components'
import { NavLink} from 'react-router-dom'

const Error = () => {
  return (
    <div className='bg-[url("../../assets/background-stars.svg")] bg-dark'>
      <Navbar />
      <div>ERROR</div>
        <NavLink to="/" className="text-[100px] text-white flex items-center justify-center">Back to Sun</NavLink>
    </div>
  )
}

export default Error
