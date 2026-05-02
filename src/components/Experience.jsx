export default function Experience({ experience }) {
  return (
    <section id="experience">
      <h2>Professional Experience</h2>
      <div className="experience-timeline">
        {experience.map(job => (
          <div key={job.id} className="experience-item">
            <h3>{job.position}</h3>
            <div className="company">{job.company}</div>
            <div className="dates">{job.duration}</div>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
