import React from 'react'
import { RouterProvider, createBrowserRouter, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import RootLayout from './Layouts/RootLayout'

const ConditionalRoute = () => {
  const { user } = useAuthContext()
  return user ? <Home /> : <Navigate to="/login" />
}

const ConditionalLogin = () => {
  const { user } = useAuthContext()
  return !user ? <Login /> : <Navigate to="/" />
}

const ConditionalSignup = () => {
  const { user } = useAuthContext()
  return !user ? <Signup /> : <Navigate to="/" />
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <ConditionalRoute />,
      },
      {
        path: '/login',
        element: <ConditionalLogin />,
      },
      {
        path: '/signup',
        element: <ConditionalSignup />,
      },
    ],
  },
])



const App = () => {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App