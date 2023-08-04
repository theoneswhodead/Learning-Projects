import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import React from 'react'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import RootLayout from './Layouts/RootLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
])


const App = () => {
  return (
    <div className='app'>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App
