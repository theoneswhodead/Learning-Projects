import React from 'react'

import RootLayout from './layouts/RootLayout';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'features',
        element: 'features',
      },
      {
        path: 'pricing',
        element: 'pricing',
      },
      {
        path: 'resources',
        element: 'resources',
      },
      {
        path: 'login',
        element: 'login',
      },
      {
        path: 'register',
        element: 'register'
      }

    ]
  }
])

const App = () => {
  return (
    <div className='bg-dark'>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
