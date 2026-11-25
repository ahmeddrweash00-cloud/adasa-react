import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer.jsx'
import Navbar from '../Navbar/Navbar.jsx'

export default function Layout() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname, search])

  return (
    <div className="pt-20 md:pt-24">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}