export default function Skills({ skills }) {
  return (
    <section id="skills">
      <h2>Skills & Expertise</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <ul className="skill-list">
              {skillList.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
