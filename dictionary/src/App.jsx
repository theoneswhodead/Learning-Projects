import React, { useState } from 'react'
import { Navbar } from './components'
import { Hero } from './containers';

import { ThemeContext } from './helpers/themecontext'

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false) // form data 2 kontexty

  return (
    <ThemeContext.Provider value={isDarkMode} >
    <div className={isDarkMode ? 'dark' : ''}>
      <div className=' bg-white dark:bg-black_100'>
        <Navbar setIsDarkMode={setIsDarkMode}/>
        <Hero />
      </div>
    </div>
      
    </ThemeContext.Provider>
    
  )
}

export default App
