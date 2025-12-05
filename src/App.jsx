import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import About from './pages/About'
import ContactUs from './pages/ContactUs.jsx'
import NotFound from './pages/NotFound'
import ErrorBoundary from './components/ErrorBoundary'


function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <ErrorBoundary>
      {/* Skip link for keyboard users */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:px-4 focus:py-2 focus:bg-green-600 focus:text-white"
      >
        Skip to main content
      </a>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ErrorBoundary>
  )
}

export default App
