import {
  Route,
  BrowserRouter as Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from 'react-router-dom'
import './App.css'
import { Home, Coin } from './pages/index.js'
import Navbar from './components/Navbar'

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
      {/* <RouterProvider router={router} /> */}
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
