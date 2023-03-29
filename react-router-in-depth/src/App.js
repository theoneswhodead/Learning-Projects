import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

import Home from './pages/Home';
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1>Jobarouter</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
      </nav>
    </header>

        <main>
          <Routes>
            <Route path="/" element={ <Home /> }/> 
            {/* // path="/" to samo co index */}
            <Route path="about" element={ <About /> }/> 
            {/* // /about */}

          </Routes>
        </main>
    </BrowserRouter>

  );
}

export default App
