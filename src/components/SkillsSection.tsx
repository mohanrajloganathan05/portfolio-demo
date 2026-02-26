const skillCategories = [
  {
    title: "Programming Languages",
    icon: "{ }",
    skills: ["Java", "C", "Python"],
  },
  {
    title: "Frontend Technologies",
    icon: "</>",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Backend Technologies",
    icon: ">>",
    skills: ["Express.js"],
  },
  {
    title: "Databases",
    icon: "db",
    skills: ["MySQL"],
  },
  {
    title: "Version Control",
    icon: "git",
    skills: ["Git", "GitHub"],
  },
  {
    title: "Soft Skills",
    icon: "++",
    skills: ["Presentation & Communication", "Leadership & Problem Solving"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Technical Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-md mx-auto">
          Technologies and tools I work with
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skill-card">
              <div className="font-mono text-primary text-2xl mb-3">{cat.icon}</div>
              <h3 className="text-foreground font-semibold text-lg mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1.5 rounded-md border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
