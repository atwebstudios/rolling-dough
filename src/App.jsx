import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import About from './pages/About'
import ContactUs from './pages/ContactUs.jsx'


function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </div>
  )
}

export default App
