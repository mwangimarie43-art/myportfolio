export default function Footer({ data }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>{data.name}</h3>
        <p style={{ opacity: 0.8, marginBottom: '1rem' }}>{data.title}</p>
      </div>

      <div className="social-links">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>

      <hr style={{ 
        border: 'none', 
        borderTop: '1px solid rgba(255,255,255,0.2)', 
        margin: '1.5rem 0' 
      }} />

      <p style={{ opacity: 0.8 }}>
        © {currentYear} {data.name}. All rights reserved.
      </p>
      <p style={{ opacity: 0.6, fontSize: '0.9rem', marginTop: '0.5rem' }}>
        Built with React & Modern Web Technologies
      </p>
    </footer>
  )
}
