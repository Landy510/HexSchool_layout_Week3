import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/all.scss'

// --- route components ---
import Index from './features/pages/index/Index.jsx'
import SeriesGlasses from './features/pages/seriesGlasses/SeriesGlasses.jsx'
// ---

import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: 'seriesGlasses',
        element: <SeriesGlasses />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
