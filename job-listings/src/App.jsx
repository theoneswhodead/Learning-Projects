import React from 'react'

import { JobItem } from './components'

const App = () => {
  return (
    <div >
      <div className='bg-[url("./assets/images/bg-header-mobile.svg")] bg-center bg-cover sm:bg-[url("./assets/images/bg-header-desktop.svg")] h-[175px] bg-dark_cyan'>

      </div>
        <JobItem />
    </div>
  )
}

export default App
