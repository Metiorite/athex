import '../styles/Footer.css'

const Footer = () => {
  const footerLinks = {
    'Product': [
      'Features',
      'Pricing',
      'Documentation',
      'API Reference',
      'Status Page'
    ],
    'Solutions': [
      'IoT & Edge',
      'Microservices',
      'Real-time Analytics',
      'Enterprise',
      'Startups'
    ],
    'Developers': [
      'Getting Started',
      'SDKs & Libraries',
      'Examples',
      'Community',
      'GitHub'
    ],
    'Company': [
      'About Us',
      'Blog',
      'Careers',
      'Contact',
      'Press Kit'
    ]
  }

  const socialLinks = [
    { name: 'GitHub', icon: '📁', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Discord', icon: '💬', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Athex</h3>
            <p>
              Empowering developers and enterprises with next-generation
              messaging infrastructure for the connected world.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.url} className="social-link" title={social.name}>
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="link-column">
                <h4>{category}</h4>
                <ul>
                  {links.map((link, index) => (
                    <li key={index}>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h4>Stay in the Loop</h4>
            <p>Get the latest updates on product releases, features, and industry insights.</p>
          </div>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="newsletter-input"
            />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <span>&copy; 2024 Athex Technologies. All rights reserved.</span>
            <div className="legal-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
          <div className="footer-badge">
            <span>Built with ❤️ for developers</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer