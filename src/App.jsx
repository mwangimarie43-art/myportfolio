import React, { useState } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import portfolioData from './data'

export default function App() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <div className="app">
      <Header data={portfolioData.personal} />
      <Navigation />
      <main>
        <About data={portfolioData} />
        <Projects projects={portfolioData.projects} />
        <Skills skills={portfolioData.skills} />
        <Experience experience={portfolioData.experience} />
        <Testimonials testimonials={portfolioData.testimonials} />
        <Contact personal={portfolioData.personal} onSubmit={() => setFormSubmitted(true)} />
      </main>
      <Footer data={portfolioData.personal} />
    </div>
  )
}
