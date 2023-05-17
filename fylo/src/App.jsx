import React from 'react'
import { Nav } from './components'
import { Main, Started, Productive, Comments, Footer } from './containers'

const App = () => {
  return (
    <div>
      <Nav />
      <Started />
      <Main />
      <Productive />
      <Comments />
      <Footer />
    </div>
  )
}

export default App
