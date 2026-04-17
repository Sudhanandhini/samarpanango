import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import ProjectPartners from './pages/ProjectPartners'
import Reports from './pages/Reports'
import GetInvolved from './pages/GetInvolved'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Donate from './pages/Donate'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <Router basename="/samarpanango">
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/:section" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/:type" element={<Programs />} />
            <Route path="/programs/:type/:subtype" element={<Programs />} />
            <Route path="/partners" element={<ProjectPartners />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/get-involved/:type" element={<GetInvolved />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
