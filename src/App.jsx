import { RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Home, Coin } from './pages/index.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'coin',
        element: <Coin />,
      },
      {
        path: 'coin/:coinId',
        element: <Coin />,
      },
    ],
  },
])

function App() {
  return (
    <>
      
      <RouterProvider router={router} />
    </>
  )
}

export default App
