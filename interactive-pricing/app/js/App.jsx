import { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Bottom from './Bottom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Bottom></Bottom>
    </div>
  )
}

export default App
