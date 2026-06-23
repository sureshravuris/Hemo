import { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex justify-between items-center">
        <a href="#hero" className="font-bold text-xl tracking-tighter text-foreground flex items-center gap-2">
          <div className="w-4 h-4 bg-primary rounded-sm" />
          SR.SYS
        </a>
        
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              data-testid={`nav-link-${link.name.toLowerCase()}`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
