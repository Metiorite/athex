import { useState, useEffect } from 'react'
import '../styles/Navigation.css'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">
            <h2>Athex</h2>
          </div>
          
          <div className="nav-links desktop-only">
            <a href="#solutions">Solutions</a>
            <a href="#features">Features</a>
            <a href="#open-source">Open Source</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="nav-actions desktop-only">
            <a href="#login" className="btn-link">Login</a>
            <a href="#signup" className="btn btn-primary">Get Started</a>
          </div>

          <button 
            className="mobile-menu-toggle mobile-only"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#solutions" onClick={() => setIsMobileMenuOpen(false)}>Solutions</a>
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#open-source" onClick={() => setIsMobileMenuOpen(false)}>Open Source</a>
          <a href="#blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <div className="mobile-actions">
            <a href="#login" className="btn-link">Login</a>
            <a href="#signup" className="btn btn-primary">Get Started</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation