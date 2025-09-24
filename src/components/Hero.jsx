import { useState, useEffect } from 'react'
import '../styles/Hero.css'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-particles"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate' : ''}`}>
            <h1>
              Build the Future of
              <span className="gradient-text"> Connected Systems</span>
            </h1>
            <p>
              Empowering developers and enterprises with next-generation messaging infrastructure,
              real-time data streaming, and cloud-native solutions that scale globally.
            </p>
            <div className="hero-actions">
              <a href="#get-started" className="btn btn-primary">
                Get Started Free
              </a>
              <a href="#demo" className="btn btn-secondary">
                Watch Demo
              </a>
            </div>
          </div>
          
          <div className={`hero-visual ${isVisible ? 'animate' : ''}`}>
            <div className="hero-dashboard">
              <div className="dashboard-header">
                <div className="dashboard-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="dashboard-title">Athex Dashboard</div>
              </div>
              <div className="dashboard-content">
                <div className="metrics-grid">
                  <div className="metric-card">
                    <div className="metric-value">99.9%</div>
                    <div className="metric-label">Uptime</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-value">2.3M</div>
                    <div className="metric-label">Messages/sec</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-value">150+</div>
                    <div className="metric-label">Global Nodes</div>
                  </div>
                </div>
                <div className="chart-container">
                  <div className="chart-bars">
                    <div className="bar" style={{height: '60%'}}></div>
                    <div className="bar" style={{height: '80%'}}></div>
                    <div className="bar" style={{height: '40%'}}></div>
                    <div className="bar" style={{height: '90%'}}></div>
                    <div className="bar" style={{height: '70%'}}></div>
                    <div className="bar" style={{height: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero