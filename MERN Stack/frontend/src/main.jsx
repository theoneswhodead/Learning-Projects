import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { WorkoutsContextProvider } from './context/workoutContext'
import { AuthContextProvidor } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvidor>
     <WorkoutsContextProvider>
        <App />
     </WorkoutsContextProvider>
    </AuthContextProvidor>
  </React.StrictMode>,
)
