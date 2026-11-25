import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About.jsx'
import ArticleDetails from './components/BLog/ArticleDetails.jsx'
import Blog from './components/BLog/Blog.jsx'
import Home from './components/Home/Home.jsx'
import Layout from './components/Layout/Layout.jsx'
import Notfound from './components/Notfound/Notfound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:slug', element: <ArticleDetails /> },
      { path: 'about', element: <About /> },
      { path: '*', element: <Notfound /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
