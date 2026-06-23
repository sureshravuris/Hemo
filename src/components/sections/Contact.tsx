import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

const links = [
  {
    label: "Email",
    value: "sureshravuri.official@gmail.com",
    href: "mailto:sureshravuri.official@gmail.com",
    icon: Mail,
    display: "sureshravuri.official@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sureshravuri",
    href: "https://linkedin.com/in/sureshravuri",
    icon: Linkedin,
    display: "linkedin.com/in/sureshravuri",
  },
  {
    label: "GitHub",
    value: "github.com",
    href: "https://github.com/sureshravuris",
    icon: Github,
    display: "View Projects on GitHub",
  },
  {
    label: "Location",
    value: "San Francisco Bay Area, CA",
    href: null,
    icon: MapPin,
    display: "San Francisco Bay Area, CA",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6 lg:px-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/8 via-background to-background -z-10 pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="font-mono text-primary text-sm uppercase tracking-widest">// contact.init</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-4xl lg:text-6xl font-bold text-foreground mb-6"
        >
          Let's <span className="text-primary">connect</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          Open to backend, distributed systems, data platform, and applied AI engineering roles.
          Currently targeting Software Engineer L3 opportunities in the Bay Area and beyond.
          Reach out — let's build something that scales.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          {links.map((link, i) => {
            const Icon = link.icon;
            const inner = (
              <div
                className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-card transition-all duration-300 group text-left"
                data-testid={`contact-${link.label.toLowerCase()}`}
              >
                <div className="w-10 h-10 rounded-lg border border-border bg-secondary flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{link.label}</div>
                  <div className="text-sm text-foreground font-medium mt-0.5 group-hover:text-primary transition-colors break-all">
                    {link.display}
                  </div>
                </div>
              </div>
            );
            return (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                {link.href ? (
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {inner}
                  </a>
                ) : inner}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-center justify-center gap-3 text-sm text-muted-foreground font-mono"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>Available for new opportunities</span>
        </motion.div>
      </div>

      <div className="mt-24 border-t border-border pt-8 text-center">
        <p className="text-muted-foreground text-sm font-mono">
          Suresh Ravuri <span className="text-primary">·</span> Software Engineer{" "}
          <span className="text-primary">·</span> Bay Area, CA
        </p>
      </div>
    </section>
  );
};
