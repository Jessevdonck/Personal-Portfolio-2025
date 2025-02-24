const Skills = () => {
    const skills = [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
      "Git",
      "Responsive Design",
      "RESTful APIs",
      "TypeScript",
    ]
  
    return (
      <section id="skills" className="py-20 bg-olive-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-olive-900 mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-olive-50 p-4 rounded-lg shadow-md text-center hover:bg-olive-200 transition-colors"
              >
                <span className="text-olive-800">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Skills
  
  