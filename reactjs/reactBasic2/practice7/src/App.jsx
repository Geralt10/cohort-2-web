import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Web from './pages/web'
import Dsa from './pages/dsa'


const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,          
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "courses",
        element: <Courses />,
        children: [
          {
            path: "web",
            element: <Web />,
          },
          {
            path: "dsa",
            element: <Dsa />,
          },
        ],
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={AllRoutes} />
}

export default App
