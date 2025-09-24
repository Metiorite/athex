import '../styles/BlogPreview.css'

const BlogPreview = () => {
  const blogPosts = [
    {
      title: 'Building Scalable Microservices with Event-Driven Architecture',
      excerpt: 'Learn how to design resilient microservices using event-driven patterns and messaging systems for better scalability and maintainability.',
      author: 'Alex Chen',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      category: 'Architecture',
      image: '🏗️'
    },
    {
      title: 'Real-time Data Processing at Scale: Lessons from Production',
      excerpt: 'Discover best practices for handling millions of events per second with real-world examples and performance optimizations.',
      author: 'Sarah Johnson',
      date: 'Dec 12, 2024',
      readTime: '12 min read',
      category: 'Performance',
      image: '⚡'
    },
    {
      title: 'Security Best Practices for Distributed Messaging Systems',
      excerpt: 'Comprehensive guide to securing your messaging infrastructure with encryption, authentication, and authorization strategies.',
      author: 'Michael Rodriguez',
      date: 'Dec 10, 2024',
      readTime: '10 min read',
      category: 'Security',
      image: '🔒'
    }
  ]

  return (
    <section id="blog" className="blog-preview section-padding">
      <div className="container">
        <div className="section-header text-center mb-8">
          <h2>Latest Insights</h2>
          <p>
            Stay updated with the latest trends, best practices, and innovations
            in messaging systems and distributed architecture.
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article key={index} className="blog-card">
              <div className="blog-image">
                <span className="blog-emoji">{post.image}</span>
                <div className="blog-category">{post.category}</div>
              </div>
              
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                
                <div className="blog-meta">
                  <div className="author-info">
                    <div className="author-avatar">
                      {post.author.split(' ').map(name => name[0]).join('')}
                    </div>
                    <div className="author-details">
                      <div className="author-name">{post.author}</div>
                      <div className="post-date">{post.date}</div>
                    </div>
                  </div>
                  <div className="read-time">{post.readTime}</div>
                </div>
                
                <a href="#read-more" className="read-more-link">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta text-center">
          <h3>Want More Insights?</h3>
          <p>Subscribe to our newsletter for weekly updates on distributed systems and messaging architecture.</p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="email-input"
            />
            <button className="btn btn-primary">Subscribe</button>
          </div>
          <div className="blog-links">
            <a href="#all-posts" className="btn btn-secondary">View All Posts</a>
            <a href="#rss" className="btn-link">RSS Feed</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogPreview