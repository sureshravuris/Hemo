import { motion } from "framer-motion";
import { Award, GraduationCap, BookOpen as UniIcon, Server as IbmIcon } from "lucide-react";
import { SiGooglecloud, SiPython } from "react-icons/si";

const certifications = [
  {
    name: "Google Ads Search Certification",
    issuer: "Google",
    date: "Jun 2026",
    credentialId: "185454927",
    icon: SiGooglecloud,
    color: "#4285F4",
    category: "Marketing",
  },
  {
    name: "Google Ads Measurement Certification",
    issuer: "Google",
    date: "Jun 2026",
    credentialId: "185450627",
    icon: SiGooglecloud,
    color: "#34A853",
    category: "Marketing",
  },
  {
    name: "Google IT Automation with Python",
    issuer: "Google",
    date: "May 2025",
    credentialId: null,
    icon: SiGooglecloud,
    color: "#FBBC04",
    category: "Engineering",
  },
  {
    name: "Google Advanced Data Analytics",
    issuer: "Google",
    date: "May 2025",
    credentialId: null,
    icon: SiGooglecloud,
    color: "#EA4335",
    category: "Data",
  },
  {
    name: "IBM Data Science",
    issuer: "IBM",
    date: "Jan 2025",
    credentialId: "36adbb80-8ee4-4971-b33c-9843ccd1a0bd",
    icon: IbmIcon,
    color: "#1F70C1",
    category: "Data",
  },
  {
    name: "IBM: What is Data Science?",
    issuer: "IBM",
    date: null,
    credentialId: "N2SYB98DJJ55",
    icon: IbmIcon,
    color: "#1F70C1",
    category: "Data",
  },
  {
    name: "Programming Essentials in Python",
    issuer: "OpenEDG Python Institute",
    date: "May 2021",
    credentialId: null,
    icon: SiPython,
    color: "#3776AB",
    category: "Engineering",
  },
  {
    name: "Web Design for Everybody",
    issuer: "University of Michigan",
    date: "Aug 2021",
    credentialId: "UX6GDLA3VBPY",
    icon: UniIcon,
    color: "#FFCB05",
    category: "Engineering",
  },
  {
    name: "Programming for Everybody (Python)",
    issuer: "University of Michigan",
    date: "Aug 2021",
    credentialId: "7M2XHSPL2DGH",
    icon: UniIcon,
    color: "#FFCB05",
    category: "Engineering",
  },
];

const education = [
  {
    degree: "Master of Science in Software Engineering",
    major: "Specialization: Data Science (SPZ)",
    school: "San José State University",
    period: "Aug 2023 – May 2025",
    location: "San Jose, CA",
    gpa: "4.0 / 4.0",
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    major: "Computer Science & Engineering",
    school: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute",
    period: "Jun 2018 – May 2022",
    location: "Chennai, India",
    gpa: null,
  },
];

const categoryColors: Record<string, string> = {
  Data: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Engineering: "bg-primary/10 text-primary border-primary/20",
  Marketing: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

export const Certifications = () => {
  return (
    <section className="py-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-primary text-sm uppercase tracking-widest">// credentials.sys</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            Education &amp; <span className="text-primary">Certs</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-6">Education</h3>
            <div className="space-y-6 mb-8">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300"
                >
                  <div className="absolute -left-2 top-1 w-4 h-4 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                    <GraduationCap size={8} className="text-primary" />
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">{edu.major}</p>
                        <p className="text-primary font-medium mt-1">{edu.school}</p>
                      </div>
                      {edu.gpa && (
                        <div className="flex-shrink-0 text-right">
                          <div className="text-2xl font-bold text-primary font-mono">{edu.gpa}</div>
                          <div className="text-xs text-muted-foreground font-mono">GPA</div>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono mt-3">
                      <span>{edu.period}</span>
                      <span>·</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pratibha Award */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="p-5 rounded-xl border border-primary/30 bg-primary/10"
            >
              <div className="flex items-center gap-3">
                <Award size={20} className="text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Pratibha Award</div>
                  <div className="text-sm text-muted-foreground">Presented by Gov. Nara Chandrababu Naidu</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-6">
              Certifications <span className="text-primary">({certifications.length})</span>
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, i) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors duration-300 group"
                  >
                    <div
                      className="w-9 h-9 rounded-lg border border-border bg-secondary flex items-center justify-center flex-shrink-0 group-hover:border-primary/40 transition-colors"
                    >
                      <Icon size={18} style={{ color: cert.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-foreground text-sm leading-snug">{cert.name}</div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-muted-foreground">{cert.issuer}</span>
                        {cert.date && (
                          <>
                            <span className="text-muted-foreground/40">·</span>
                            <span className="text-xs font-mono text-muted-foreground">{cert.date}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`text-xs px-2 py-0.5 rounded-full border font-mono ${categoryColors[cert.category]}`}>
                        {cert.category}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
