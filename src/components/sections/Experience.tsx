import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "AIOps Research Engineer",
    company: "San José State University",
    period: "May 2025 – Present",
    location: "San Jose, CA",
    type: "research",
    bullets: [
      "Building an agentic AIOps copilot using LLMs and RAG to detect and diagnose ETL and dashboard inefficiencies (freshness, latency, cost) via lineage and observability",
      "Designed auto-remediation workflows with measurable SLA gains using agentic reasoning over observability data",
    ],
    tags: ["LLMs", "RAG", "AIOps", "ETL", "Observability"],
    current: true,
  },
  {
    title: "Graduate Teaching Associate — AI & Data Engineering",
    company: "San José State University",
    period: "Jan 2025 – May 2025",
    location: "San Jose, CA",
    type: "teaching",
    bullets: [
      "CMPE 252 — AI & Data Engineering under Prof. Dr. Andy Xinhua Xiao",
      "Guided students in building real-world data pipelines using Python and cloud-based tools",
      "Provided feedback on AI/ML coursework, model deployment, and system design",
    ],
    tags: ["Python", "Data Pipelines", "ML", "Cloud"],
    current: false,
  },
  {
    title: "Graduate Teaching Associate — Machine Learning",
    company: "San José State University",
    period: "Sep 2024 – Dec 2024",
    location: "San Jose, CA",
    type: "teaching",
    bullets: [
      "Mentored 70+ students in Machine Learning under Prof. Ali Arsanjani (Director of AI @ Google)",
      "Led sessions on end-to-end ML systems: data pipelines, model training, evaluation, and APIs",
      "Reinforced software engineering best practices across all coursework",
    ],
    tags: ["Machine Learning", "Teaching", "System Design"],
    current: false,
  },
  {
    title: "Software Engineer",
    company: "Cognizant — Walmart",
    period: "July 2022 – Aug 2023",
    location: "Remote",
    type: "industry",
    bullets: [
      "Engineered real-time Dataflow & Pub/Sub pipelines processing 3M+ POS transactions/hr, reducing inventory lag from 2 hrs to 45 min across 4,500+ retail stores",
      "Orchestrated Dataproc and Cloud Composer integrating SAP, Oracle, and vendor data into BigQuery for analytics",
      "Optimized BigQuery partitioning & clustering, cutting query costs 45% and dashboard latency from 18s to 4s",
      "Delivered CDC pipelines with less than 10 min data freshness across finance and logistics domains",
      "Implemented Cloud Functions data-quality checks validating 80M+ records/day, reducing anomalies 65%",
      "Built Looker dashboards & ML models, driving $2.6M savings and reducing feature generation time from 3 hrs to 18 min",
    ],
    tags: ["GCP", "Dataflow", "Pub/Sub", "BigQuery", "Looker", "Dataproc", "Cloud Composer"],
    current: false,
  },
  {
    title: "Software Engineer",
    company: "Cognizant — Adobe",
    period: "Jan 2022 – July 2022",
    location: "Remote",
    type: "industry",
    bullets: [
      "Built Go and Node.js microservices for an analytics platform processing 8K+ events/sec from mobile & web clients",
      "Designed GCP Pub/Sub ingestion with validation and deduplication, cutting bad or duplicate events to under 1%",
      "Modeled event and aggregate data in BigQuery and Cloud SQL, improving key analytical queries by 40–45%",
      "Introduced Redis and Elasticsearch lookups for active audiences, keeping most targeting requests under 100ms",
      "Enhanced reliability with idempotency, rate limits & DLQs, cutting replay and overload issues by 30%",
    ],
    tags: ["Go", "Node.js", "Pub/Sub", "BigQuery", "Redis", "Elasticsearch"],
    current: false,
  },
];

const typeIcon = (type: string) => {
  if (type === "teaching" || type === "research") return GraduationCap;
  return Briefcase;
};

const typeColor = (type: string) => {
  if (type === "research") return "text-primary";
  if (type === "teaching") return "text-blue-400";
  return "text-cyan-400";
};

export const Experience = () => {
  return (
    <section id="experience" className="py-28 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-primary text-sm uppercase tracking-widest">// experience.log</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            Where I've <span className="text-primary">shipped</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const Icon = typeIcon(exp.type);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="relative md:pl-16"
                  data-testid={`experience-item-${i}`}
                >
                  <div className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 border-primary bg-background hidden md:flex items-center justify-center -translate-x-1/2">
                    <div className={`w-2 h-2 rounded-full ${exp.current ? "bg-primary animate-pulse" : "bg-muted-foreground"}`} />
                  </div>

                  <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div className="flex items-start gap-3">
                        <Icon size={20} className={`mt-1 flex-shrink-0 ${typeColor(exp.type)}`} />
                        <div>
                          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                            {exp.title}
                            {exp.current && (
                              <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-mono">
                                CURRENT
                              </span>
                            )}
                          </h3>
                          <p className="text-muted-foreground font-medium mt-0.5">{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground font-mono flex-shrink-0">
                        <span className="flex items-center gap-1"><Calendar size={12} />{exp.period}</span>
                        <span className="flex items-center gap-1"><MapPin size={12} />{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-muted-foreground text-sm leading-relaxed">
                          <span className="text-primary mt-1 flex-shrink-0 font-mono">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-md bg-secondary text-muted-foreground text-xs font-mono border border-border group-hover:border-primary/30 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
