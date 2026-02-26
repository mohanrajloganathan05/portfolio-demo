import { useState } from "react";

const projects = [
  {
    id: "invoice",
    title: "Real-Time Invoice Generation Web Application",
    tech: "React.js",
    period: "Dec 2025 - Jan 2026",
    points: [
      "Developed a React.js-based invoice generation system for a small textile shop, fully digitizing 100% of manual invoice and billing processes with GST compliance.",
      "Implemented dynamic product entry, real-time GST calculation, and automatic grand total generation, eliminating manual calculations and errors.",
      "Enabled one-click PDF invoice download with branded layout, logo, customer details, and itemized billing.",
    ],
  },
  {
    id: "easypass",
    title: "EasyPass - Digital Bus Pass Application",
    tech: "MERN Stack",
    period: "Apr 2025 - June 2025",
    points: [
      "Developed a full-stack MERN web application enabling online bus pass application, renewal, and QR-based verification.",
      "Implemented a QR scanning module for conductors to validate pass usage and track daily trips.",
      "Automated the entire verification and pass-generation workflow, reducing paper-based processes by 80%.",
      "Built backend REST APIs, MongoDB models, and responsive UI using React.js.",
    ],
  },
  {
    id: "smartfert",
    title: "SmartFert - AI-Based Fertilizer Recommendation System",
    tech: "MERN + ML",
    period: "Dec 2024 - Mar 2025",
    points: [
      "Built a machine learning model using scikit-learn to recommend fertilizer based on NPK nutrients, soil type, temperature, and crop type.",
      "Developed a complete prediction pipeline integrated with a MERN stack frontend using REST APIs.",
      "Implemented dynamic PDF generation including fertilizer details and crop-specific farming suggestions.",
      "Performed feature engineering and hyperparameter tuning to improve prediction accuracy.",
    ],
  },
];

const ProjectsSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 tech-grid-bg">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-md mx-auto">
          Click to expand and explore each project
        </p>

        <div className="flex flex-col gap-5">
          {projects.map((proj) => {
            const isOpen = openId === proj.id;
            return (
              <div key={proj.id} className="glass-card glow-border rounded-lg overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  onClick={() => setOpenId(isOpen ? null : proj.id)}
                >
                  <div>
                    <h3 className="text-foreground font-semibold text-lg">{proj.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="font-mono text-primary text-xs bg-primary/10 px-2 py-0.5 rounded">
                        {proj.tech}
                      </span>
                      <span className="text-muted-foreground text-xs">{proj.period}</span>
                    </div>
                  </div>
                  <svg
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{ maxHeight: isOpen ? "500px" : "0px" }}
                >
                  <ul className="px-6 pb-5 space-y-3">
                    {proj.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
