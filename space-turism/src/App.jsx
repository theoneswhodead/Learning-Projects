import React from 'react'
//rrd
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// Layouts
import RootLayout from './Layouts/RootLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,

    children: [
      {
        path: 'destination',
        element: "destination"
      },
      {
        path: 'crew',
        element: "crew"
      },
      {
        path: 'technology',
        element: "technology"
      },
    ],
  },
])


const App = () => {
  return (
    <div className='bg-primary'>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App
