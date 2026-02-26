import profileImage from "@/assets/profile-placeholder.png";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center tech-grid-bg pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="font-mono text-primary text-sm mb-3 tracking-widest uppercase">
              Software Developer
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
              <span className="text-foreground">Mohanraj</span>{" "}
              <span className="gradient-text">L</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-6 max-w-xl mx-auto lg:mx-0">
              Full Stack Developer specializing in MERN stack applications, REST API
              development, and AI-integrated systems. Passionate about building scalable
              and optimized web solutions.
            </p>

            <div className="glass-card glow-border rounded-lg p-5 mb-8 inline-block text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-foreground">B.E. CSE</span>
                </div>
              
                <div className="sm:col-span-2">
                  <span className="text-foreground">Salem, Tamil Nadu</span>
                </div>
               
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="px-8 py-3 rounded-lg font-semibold border border-border text-foreground transition-all duration-300 hover:border-primary hover:text-primary">
                Contact Me
              </a>
            </div>
          </div>

          {/* Right - Profile image */}
          <div className="flex-shrink-0">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden glow-border" style={{ animation: "pulse-glow 3s ease-in-out infinite" }}>
              <img
                src={profileImage}
                alt="Mohanraj L - Software Developer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
