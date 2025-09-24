import '../styles/OpenSource.css'

const OpenSource = () => {
  const projects = [
    {
      name: 'athex-core',
      description: 'High-performance messaging server written in Go',
      language: 'Go',
      stars: '12.5k',
      forks: '1.2k',
      status: 'Active'
    },
    {
      name: 'athex-js',
      description: 'JavaScript client library for Node.js and browsers',
      language: 'JavaScript',
      stars: '8.3k',
      forks: '945',
      status: 'Active'
    },
    {
      name: 'athex-streaming',
      description: 'Distributed streaming platform for real-time data',
      language: 'Go',
      stars: '6.7k',
      forks: '678',
      status: 'Active'
    },
    {
      name: 'athex-operator',
      description: 'Kubernetes operator for automated deployment',
      language: 'Go',
      stars: '2.1k',
      forks: '234',
      status: 'Beta'
    }
  ]

  const stats = [
    { label: 'GitHub Stars', value: '30K+' },
    { label: 'Contributors', value: '500+' },
    { label: 'Downloads', value: '10M+' },
    { label: 'Production Deployments', value: '5K+' }
  ]

  return (
    <section id="open-source" className="open-source section-padding">
      <div className="container">
        <div className="section-header text-center mb-8">
          <h2>Open Source at Heart</h2>
          <p>
            Built by the community, for the community. Our open source projects
            power mission-critical systems across industries worldwide.
          </p>
        </div>

        <div className="oss-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-name">
                  <span className="repo-icon">📦</span>
                  {project.name}
                </div>
                <div className={`project-status ${project.status.toLowerCase()}`}>
                  {project.status}
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-meta">
                <div className="language">
                  <span className="language-dot" style={{
                    backgroundColor: project.language === 'Go' ? '#00ADD8' : '#F7DF1E'
                  }}></span>
                  {project.language}
                </div>
                <div className="project-stats">
                  <span className="stat">
                    <span className="icon">⭐</span>
                    {project.stars}
                  </span>
                  <span className="stat">
                    <span className="icon">🍴</span>
                    {project.forks}
                  </span>
                </div>
              </div>
              
              <div className="project-actions">
                <a href="#" className="btn-link">View on GitHub</a>
                <a href="#" className="btn-link">Documentation</a>
              </div>
            </div>
          ))}
        </div>

        <div className="oss-cta text-center">
          <h3>Join Our Community</h3>
          <p>
            Contribute to the future of messaging infrastructure. Whether you're
            fixing bugs, adding features, or writing documentation, every contribution matters.
          </p>
          <div className="cta-actions">
            <a href="#contribute" className="btn btn-primary">Start Contributing</a>
            <a href="#community" className="btn btn-secondary">Join Discord</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OpenSource