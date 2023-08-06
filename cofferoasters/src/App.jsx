import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//layout
import { RootLayout } from './Layouts';
import { Home, AboutUs, Subscribe } from './Pages';

const router = createBrowserRouter([ 
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "subscribe",
        element: <Subscribe />,
      },
    ]
  },
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App