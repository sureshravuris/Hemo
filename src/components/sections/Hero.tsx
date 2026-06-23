import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  const [statsIndex, setStatsIndex] = useState(0);
  const stats = [
    "3M+ transactions/hour",
    "97.4% accuracy",
    "45 min latency reduction",
    "5K+ events/sec",
    "<100ms targeting"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStatsIndex((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 lg:px-20 pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10" />
      
      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-sm tracking-wide mb-4">
            STATUS: SYSTEMS ONLINE
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
            Suresh <span className="text-primary">Ravuri</span>
          </h1>
          
          <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light max-w-3xl">
            Software Engineer | Distributed Systems & Cloud Platform
          </h2>
          
          <p className="text-lg text-foreground/80 max-w-2xl font-mono">
            Currently: AIOps Research Engineer @ SJSU
          </p>

          <div className="h-12 flex items-center font-mono text-primary text-xl">
            <span className="mr-2">&gt;</span>
            <motion.span
              key={statsIndex}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="inline-block"
            >
              {stats[statsIndex]}
            </motion.span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="ml-1 w-3 h-6 bg-primary inline-block align-middle"
            />
          </div>

          <div className="pt-8 flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
              data-testid="hero-contact-btn"
            >
              Initialize Connection
            </a>
            <a 
              href="#experience" 
              className="px-6 py-3 bg-secondary/50 text-foreground border border-border font-semibold rounded-md hover:bg-secondary transition-colors"
              data-testid="hero-experience-btn"
            >
              View Telemetry
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-muted-foreground">
        <span className="text-xs font-mono mb-2 uppercase tracking-widest">Scroll</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  );
};
