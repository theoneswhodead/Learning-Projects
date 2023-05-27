import React, {useState} from 'react'

import { JobItem, FilterBar } from './components'

import data from '../data.json'

const App = () => {

  const [isActive, setIsActive] = useState(false);

  return (
    <div className='bg-background ' >
      <div className='bg-[url("./images/bg-header-mobile.svg")] bg-center bg-cover sm:bg-[url("./images/bg-header-desktop.svg")] h-[175px] bg-dark_cyan'>
      </div>
        {
          isActive &&
          <FilterBar isActive={isActive}/>
        }

        {
        data.map((offer) => {
          return (
            <JobItem key={offer.id} data={offer} setIsActive={setIsActive}/>
          )
        })
        }
    </div>
  )
}

export default App
