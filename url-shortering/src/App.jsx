import React from 'react'

import RootLayout from './layouts/RootLayout';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home, Features, Resources, Register, Login } from './routes';

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
        element: <Features />
      },
      {
        path: 'pricing',
        element: 'pricing',
      },
      {
        path: 'resources',
        element: <Resources />,
      },
      {
        path: 'login',
        element: 'login',
      },
      {
        path: 'register',
        element: <Register />
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
