import React from 'react'
//rrd
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// Layouts
import { RootLayout} from './Layouts';


//pages
import { Hero, Crew, Technology, Destination } from './containers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,

    children: [
      {
        path: '/',
        element: <Hero />
      },
      {
        path: 'destination',
        element: <Destination/>,
      },
      {
        path: 'crew',
        element: <Crew/>
      },
      {
        path: 'technology',
        element: <Technology />
      },
    ],
  },
])


const App = () => {
  return (
    <div className='bg-dark'>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App
