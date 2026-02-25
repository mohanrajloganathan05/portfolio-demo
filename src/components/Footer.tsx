const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-mono text-sm text-muted-foreground">
        {"<Mohanraj />"} 2025
      </p>
      <div className="flex gap-6">
        <a
          href="mailto:mohanrajloganathan2005@gmail.com"
          className="text-muted-foreground text-sm hover:text-primary transition-colors"
        >
          Email
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground text-sm hover:text-primary transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground text-sm hover:text-primary transition-colors"
        >
          GitHub
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
