import React from 'react'
import { Nav } from './components'
import { Main, Started } from './containers'

const App = () => {
  return (
    <div>
      <Nav />
      <Started />
      <Main />
    </div>
  )
}

export default App
