export default function About({ data }) {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-bio">
          <p>
            {data.personal.bio}
          </p>
          <p>
            I specialize in turning complex datasets into clear, actionable insights using statistical analysis, machine learning, and data visualization. My work bridges the gap between raw data and strategic business decisions.
          </p>
          <p>
            When I'm not analyzing data, you can find me reading about emerging technologies, contributing to open-source projects, or exploring new hiking trails.
          </p>
        </div>
        <div className="about-stats">
          {data.stats.map(stat => (
            <div key={stat.label} className="stat">
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
