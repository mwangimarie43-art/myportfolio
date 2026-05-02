import { useState } from 'react'

export default function Contact({ personal, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    onSubmit()

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      
      {submitted ? (
        <div style={{
          textAlign: 'center',
          padding: '2rem',
          background: '#f0f9ff',
          borderRadius: '8px',
          color: '#004fa3',
          fontWeight: '600'
        }}>
          ✓ Thank you for your message! I'll get back to you soon.
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              <button type="submit">Send Message</button>
            </form>
          </div>

          <div style={{
            background: '#f5f7fa',
            padding: '2rem',
            borderRadius: '8px',
            borderLeft: '4px solid #00a3e0'
          }}>
            <h3 style={{ color: '#0066cc', marginBottom: '1.5rem' }}>Contact Information</h3>
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ color: '#999', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Email</p>
              <p style={{ color: '#333', fontWeight: '500' }}>{personal.email}</p>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ color: '#999', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Phone</p>
              <p style={{ color: '#333', fontWeight: '500' }}>{personal.phone}</p>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ color: '#999', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Location</p>
              <p style={{ color: '#333', fontWeight: '500' }}>{personal.location}</p>
            </div>
            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #ddd' }}>
              <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
                I'm available for freelance projects, consulting work, and full-time opportunities. Feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
