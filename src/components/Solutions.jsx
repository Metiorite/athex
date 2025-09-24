import { useState } from 'react'
import '../styles/Solutions.css'

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(0)

  const solutions = [
    {
      title: 'IoT & Edge Computing',
      description: 'Connect billions of devices with ultra-low latency messaging',
      features: [
        'Device management at scale',
        'Edge-to-cloud synchronization',
        'Real-time telemetry processing',
        'Offline-first architecture'
      ],
      metrics: {
        devices: '10M+',
        latency: '<1ms',
        uptime: '99.99%'
      }
    },
    {
      title: 'Microservices Architecture',
      description: 'Build resilient distributed systems with event-driven communication',
      features: [
        'Service mesh integration',
        'Event sourcing patterns',
        'Circuit breaker support',
        'Distributed tracing'
      ],
      metrics: {
        services: '1000+',
        throughput: '1M/s',
        availability: '99.9%'
      }
    },
    {
      title: 'Real-time Analytics',
      description: 'Process streaming data for instant insights and decision making',
      features: [
        'Stream processing engines',
        'Complex event processing',
        'Machine learning pipelines',
        'Real-time dashboards'
      ],
      metrics: {
        events: '100M+',
        processing: '<100ms',
        accuracy: '99.8%'
      }
    }
  ]

  return (
    <section id="solutions" className="solutions section-padding">
      <div className="container">
        <div className="section-header text-center mb-8">
          <h2>Solutions for Every Use Case</h2>
          <p>
            From IoT deployments to enterprise microservices, our platform
            adapts to your specific requirements and scales with your growth.
          </p>
        </div>

        <div className="solutions-tabs">
          <div className="tab-navigation">
            {solutions.map((solution, index) => (
              <button
                key={index}
                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {solution.title}
              </button>
            ))}
          </div>

          <div className="tab-content">
            <div className="solution-details">
              <div className="solution-info">
                <h3>{solutions[activeTab].title}</h3>
                <p>{solutions[activeTab].description}</p>
                
                <ul className="feature-list">
                  {solutions[activeTab].features.map((feature, index) => (
                    <li key={index}>
                      <span className="checkmark">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="#learn-more" className="btn btn-primary">
                  Learn More
                </a>
              </div>

              <div className="solution-metrics">
                <div className="metrics-container">
                  {Object.entries(solutions[activeTab].metrics).map(([key, value]) => (
                    <div key={key} className="metric-item">
                      <div className="metric-value">{value}</div>
                      <div className="metric-label">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                    </div>
                  ))}
                </div>
                
                <div className="solution-visual">
                  <div className="network-nodes">
                    <div className="node central"></div>
                    <div className="node satellite"></div>
                    <div className="node satellite"></div>
                    <div className="node satellite"></div>
                    <div className="node satellite"></div>
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

export default Solutions