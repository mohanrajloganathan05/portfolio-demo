const achievements = [
  {
    icon: "300+",
    title: "LeetCode Problems",
    desc: "Solved 300+ problems with a 150+ day continuous daily streak, demonstrating strong DSA expertise.",
  },
  {
    icon: "Top 40",
    title: "TechForSociety Hackathon Finalist",
    desc: "Qualified among top 40 teams across South India, organized by Siemens & NASSCOM Foundation (April 2025).",
  },
  {
    icon: "Finals",
    title: "Olimayam 3.0 Finalist",
    desc: "Reached the finals in Olimayam 3.0 ideathon organized by Startup TN Salem (December 2024).",
  },
  {
    icon: "1st",
    title: "Blockchain Presentation - 1st Prize",
    desc: "Awarded 1st prize for presentation on Blockchain-Based Voting System at GCE Srirangam (April 2024).",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 tech-grid-bg">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Achievements</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-md mx-auto">
          Milestones and recognitions
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((a) => (
            <div key={a.title} className="skill-card">
              <div className="font-mono text-primary text-3xl font-bold mb-2 glow-text">{a.icon}</div>
              <h3 className="text-foreground font-semibold mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-sm">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
