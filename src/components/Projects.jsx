export default function Projects({ projects }) {
  return (
    <section id="projects">
      <h2>Portfolio Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">{project.icon}</div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <button>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
