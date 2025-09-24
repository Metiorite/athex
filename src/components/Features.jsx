import '../styles/Features.css'

const Features = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Ultra-Fast Performance',
      description: 'Built for speed with microsecond latency and millions of messages per second throughput.'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'End-to-end encryption, JWT authentication, and comprehensive access controls.'
    },
    {
      icon: '🌐',
      title: 'Global Scale',
      description: 'Deploy anywhere with automatic clustering and geographic distribution.'
    },
    {
      icon: '⚡',
      title: 'Real-time Streaming',
      description: 'Process and analyze data streams in real-time with built-in analytics.'
    },
    {
      icon: '🛠',
      title: 'Developer Friendly',
      description: 'Simple APIs, extensive documentation, and support for 40+ languages.'
    },
    {
      icon: '☁️',
      title: 'Cloud Native',
      description: 'Kubernetes-native design with automatic scaling and self-healing.'
    }
  ]

  return (
    <section id="features" className="features section-padding">
      <div className="container">
        <div className="section-header text-center mb-8">
          <h2>Built for Modern Applications</h2>
          <p>
            Everything you need to build scalable, secure, and performant
            messaging systems for today's connected world.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="feature-icon">
                <span>{feature.icon}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="features-cta text-center">
          <h3>Ready to get started?</h3>
          <p>Join thousands of developers building the future of connected systems.</p>
          <div className="cta-actions">
            <a href="#signup" className="btn btn-primary">Start Free Trial</a>
            <a href="#docs" className="btn btn-secondary">View Documentation</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features