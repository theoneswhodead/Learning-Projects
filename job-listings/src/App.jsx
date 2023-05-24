import React from 'react'

import { JobItem } from './components'

import data from '../data.json'

const App = () => {
  return (
    <div className='bg-background ' >
      <div className='bg-[url("./images/bg-header-mobile.svg")] bg-center bg-cover sm:bg-[url("./images/bg-header-desktop.svg")] h-[175px] bg-dark_cyan'>
      </div>
        

        {
        data.map((offer) => {
          return (
            <JobItem key={offer.if} data={offer}/>
          )
        })
        }
    </div>
  )
}

export default App
