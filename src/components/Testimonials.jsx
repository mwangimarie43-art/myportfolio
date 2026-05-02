export default function Testimonials({ testimonials }) {
  return (
    <section id="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-author">{testimonial.author}</div>
            <div className="testimonial-role">{testimonial.role}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
