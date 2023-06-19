import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { RootLayout, PlanetLayout } from './layouts'
import  { Planet, Error } from './containers'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // Error!!!!!!!!!!!

    children: [
      {
        path: '/',
        element: 'Solar System',
      },
      {
        path: 'mercury',
        element: <PlanetLayout/>,
        children: [
          {
            path: '/mercury',
            element: <Planet />,
          },
          {
            path: 'overview',
            element: <Planet />
          },
          {
            path: 'structure',
            element: <Planet />
          },
          {
            path: 'surface',
            element: <Planet />
          }
        ]
      },
      {
        path: 'venus',
        element: <PlanetLayout/>,
        children: [
          {
            path: '/venus',
            element: <Planet />,
          },
          {
            path: 'overview',
            element: <Planet />
          },
          {
            path: 'structure',
            element: <Planet />
          },
          {
            path: 'surface',
            element: <Planet />
          }
        ]
      },
      {
        path: 'earth',
        element: <PlanetLayout/>,
        children: [
          {
            path: '/earth',
            element: <Planet />,
          },
          {
            path: 'overview',
            element: <Planet />
          },
          {
            path: 'structure',
            element: <Planet />
          },
          {
            path: 'surface',
            element: <Planet />
          }
        ]
      },
      {
        path: 'mars',
        element: <PlanetLayout/>,
        children: [
          {
            path: '/mars',
            element: <Planet />,
          },
          {
            path: 'overview',
            element: <Planet />
          },
          {
            path: 'structure',
            element: <Planet />
          },
          {
            path: 'surface',
            element: <Planet />
          }
        ]
      },
      {
        path: 'jupiter',
        element: <PlanetLayout/>,
        children: [
          {
            path: '/jupiter',
            element: <Planet />,
          },
          {
            path: 'overview',
            element: <Planet />
          },
          {
            path: 'structure',
            element: <Planet />
          },
          {
            path: 'surface',
            element: <Planet />
          }
        ]
      },
      {
        path: 'saturn',
        element: <PlanetLayout/>,
        children: [
          {
            path: '/saturn',
            element: <Planet />,
          },
          {
            path: 'overview',
            element: <Planet />
          },
          {
            path: 'structure',
            element: <Planet />
          },
          {
            path: 'surface',
            element: <Planet />
          }
        ]
      },
      {
        path: 'uranus',
        element: <PlanetLayout/>,
        children: [
          {
            path: '/uranus',
            element: <Planet />,
          },
          {
            path: 'overview',
            element: <Planet />
          },
          {
            path: 'structure',
            element: <Planet />
          },
          {
            path: 'surface',
            element: <Planet />
          }
        ]
      },
      {
        path: 'neptune',
        element: <PlanetLayout/>,
        children: [
          {
            path: '/neptune',
            element: <Planet />,
          },
          {
            path: 'overview',
            element: <Planet />
          },
          {
            path: 'structure',
            element: <Planet />
          },
          {
            path: 'surface',
            element: <Planet />
          }
        ]
      },
    ],
  },
  {
    path: '*',
    element: <Error />
  }
])


const App = () => {
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App
