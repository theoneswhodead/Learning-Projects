import React, {useState} from 'react'

import { JobItem, FilterBar } from './components'

import data from '../data.json'

const App = () => {

//  const [isActive, setIsActive] = useState(false);

const [filterKeywords, setFilterKeywords] = useState([])

const addFilterKeywords = (data) => {
  if(!filterKeywords.includes(data)) {
      setFilterKeywords([...filterKeywords, data])
  }
}

const deleteKeyword = (data) => {
  const newKeywords = filterKeywords.filter(key => key != data);
  setFilterKeywords(newKeywords);
}

const clearKeywords = () => {
  setFilterKeywords([]);
}

  return (
    <div className='bg-background ' >
      <div className='bg-[url("./images/bg-header-mobile.svg")] bg-center bg-cover sm:bg-[url("./images/bg-header-desktop.svg")] h-[175px] bg-dark_cyan'>
      </div>
        {/* {
          isActive &&
          <FilterBar isActive={isActive}/>
        } */}

        {
          filterKeywords.length > 0 && <FilterBar keywords={filterKeywords} removeKeywords={deleteKeyword} clearKeywords={clearKeywords}/>
        }




        {
        data.map((offer, index) => {
          return (
            <JobItem key={index} data={offer} setKeywords={addFilterKeywords}/>
          )
        })
        }
    </div>
  )
}

export default App
