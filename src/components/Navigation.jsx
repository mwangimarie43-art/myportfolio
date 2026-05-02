export default function Navigation() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav>
      <ul>
        <li><a href="#" onClick={() => scrollToSection('about')}>About</a></li>
        <li><a href="#" onClick={() => scrollToSection('projects')}>Projects</a></li>
        <li><a href="#" onClick={() => scrollToSection('skills')}>Skills</a></li>
        <li><a href="#" onClick={() => scrollToSection('experience')}>Experience</a></li>
        <li><a href="#" onClick={() => scrollToSection('testimonials')}>Testimonials</a></li>
        <li><a href="#" onClick={() => scrollToSection('contact')}>Contact</a></li>
      </ul>
    </nav>
  )
}
