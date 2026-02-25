const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-md mx-auto">
          Professional work experience
        </p>

        <div className="max-w-3xl mx-auto relative pl-10">
          <div className="timeline-line" />
          <div className="relative">
            <div className="absolute left-[-26px] top-2 w-3 h-3 rounded-full bg-primary glow-border" />
            <div className="glass-card glow-border rounded-lg p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h3 className="text-foreground font-semibold text-lg">React Developer Intern</h3>
                <span className="font-mono text-primary text-xs bg-primary/10 px-2 py-0.5 rounded">
                  Dec 2025 - Present
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">Aviontive LLP, Coimbatore</p>
              <ul className="space-y-3">
                {[
                  "Contributed to the development of a real-time Learning Management System (LMS) prototype using React.js, focusing on teacher dashboard and authentication modules.",
                  "Implemented secure and protected routes using React Router DOM to control application navigation and access.",
                  "Designed responsive and reusable UI components using Tailwind CSS, and collaborated using Git branching workflows.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
