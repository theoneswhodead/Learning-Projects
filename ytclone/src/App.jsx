// import './App.css'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import { Box } from '@mui/material'
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components'


const App = () => (
  <BrowserRouter>
  <Box sx={{backgroundColor: '#000'}}>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Feed />}/>
      <Route path="/video/:id" element={<VideoDetail/>}/>
      <Route path="/channel/:id" element={<ChannelDetail/>}/>
      <Route path="/search/:serchTerm" element={<SearchFeed/>}/>
    </Routes>
  </Box>

  </BrowserRouter>
)

export default App