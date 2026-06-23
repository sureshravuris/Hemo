import { motion } from "framer-motion";
import { Cpu, Database, BookOpen, Users, Bike, Bot } from "lucide-react";

const projects = [
  {
    name: "A-Eye: AI-Powered Diagnosis Application",
    icon: Cpu,
    period: "Research Project · SJSU",
    description:
      "A production-grade AI diagnostics system leveraging state-of-the-art vision models for real-time retinal disorder detection. Integrates a multimodal voice AI agent powered by Gemini 2.5 Pro for accessible, real-time text-to-speech diagnosis delivery.",
    highlights: [
      "Spearheaded a ResNet-50 classifier with RETFound for robust multi-class retinal disorder detection achieving 97.4% accuracy",
      "Integrated Gemini 2.5 Pro TTS to enable a multimodal voice AI agent for real-time text-to-speech diagnosis",
      "Deployed as a Flask REST API with NumPy/Pandas data preprocessing pipelines",
    ],
    tags: ["PyTorch", "ResNet-50", "RETFound", "OpenAI", "Gemini 2.5 Pro", "Flask", "NumPy", "Pandas"],
    accent: "from-primary/20 to-blue-500/10",
    border: "hover:border-primary/50",
    stat: { label: "Detection Accuracy", value: "97.4%" },
    featured: true,
  },
  {
    name: "Reddit Data Ingestion & Analytics Platform",
    icon: Database,
    period: "Data Engineering Project",
    description:
      "A fully automated, scalable data engineering pipeline that ingests, transforms, and analyzes Reddit content at 100K+ records/day. Built with production data engineering best practices: medallion architecture, partitioned storage, and automated orchestration.",
    highlights: [
      "Built a scalable ETL pipeline processing 100K+ records/day, automating API ingestion into BigQuery via Airflow",
      "Developed dbt medallion models (bronze/silver/gold) with partitioning and clustering, improving query performance 40–60%",
      "Containerized the entire platform with Docker for reproducible, cloud-ready deployments",
    ],
    tags: ["Python", "Airflow", "dbt", "BigQuery", "GCS", "Docker", "Medallion Architecture"],
    accent: "from-blue-500/20 to-primary/10",
    border: "hover:border-blue-400/50",
    stat: { label: "Records/day", value: "100K+" },
    featured: true,
  },
  {
    name: "Book Recommendation System",
    icon: BookOpen,
    period: "Aug 2023 – Dec 2023 · SJSU",
    description:
      "Personalized book recommendation system using neural networks and collaborative filtering, optimizing for minimal mean squared error to enhance prediction accuracy, resulting in improved user engagement and satisfaction metrics on unseen data.",
    highlights: [
      "Designed and implemented collaborative filtering with neural networks for personalized recommendations",
      "Optimized for minimal MSE to drive higher prediction accuracy on unseen data",
      "Evaluated with Matplotlib & Seaborn visualizations for model diagnostics",
    ],
    tags: ["Python", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
    accent: "from-violet-500/20 to-primary/10",
    border: "hover:border-violet-400/50",
    stat: { label: "Approach", value: "Neural CF" },
    featured: false,
  },
  {
    name: "Human Resource Portal",
    icon: Users,
    period: "Aug 2023 – Dec 2023 · SJSU",
    description:
      "Full-stack HR application with SSO authentication, AWS S3 integration, and an analytics dashboard. Implemented a streamlined CI/CD pipeline using Jenkins and GitHub for efficient deployment and maintenance.",
    highlights: [
      "Built SSO authentication and AWS S3 database integration for secure employee data management",
      "Developed an analytics dashboard for HR metrics and reporting",
      "Implemented CI/CD pipeline using Jenkins & GitHub for automated deployment",
    ],
    tags: ["ReactJS", "MySQL", "AWS S3", "Jenkins", "GitHub", "CI/CD", "SSO"],
    accent: "from-emerald-500/20 to-primary/10",
    border: "hover:border-emerald-400/50",
    stat: { label: "Pipeline", value: "CI/CD" },
    featured: false,
  },
  {
    name: "Bicycle Rental Forecasting",
    icon: Bike,
    period: "Aug 2023 – Dec 2023 · SJSU",
    description:
      "Time-series analysis to predict daily bike rental volumes by examining historical data, emphasizing factors like temperature, seasonal patterns, weather conditions, and other relevant variables using the CRISP-DM methodology.",
    highlights: [
      "Applied CRISP-DM methodology for structured data science workflow",
      "Analyzed temporal patterns including temperature, seasonality, and weather effects",
      "Built forecasting models with rich data visualizations for interpretability",
    ],
    tags: ["Python", "CRISP-DM", "Time Series Analysis", "Data Visualization", "Pandas", "Scikit-learn"],
    accent: "from-orange-500/20 to-primary/10",
    border: "hover:border-orange-400/50",
    stat: { label: "Method", value: "CRISP-DM" },
    featured: false,
  },
  {
    name: "RoachBot-SJSU",
    icon: Bot,
    period: "Robotics Project · SJSU",
    description:
      "Intelligent mobile robot designed to tackle cockroach infestations in dormitory environments. Autonomously detects and pursues fast-moving targets using computer vision and LiDAR-based SLAM, demonstrating practical applications of robotics in hygiene and pest control.",
    highlights: [
      "Implemented computer vision pipeline for real-time detection and pursuit of fast-moving targets",
      "Integrated LiDAR-based SLAM for autonomous indoor navigation and mapping",
      "Designed and built the mechanical chassis and embedded control system in C++",
    ],
    tags: ["C++", "SLAM", "Computer Vision", "LiDAR", "Robotics", "Embedded Systems"],
    accent: "from-red-500/20 to-primary/10",
    border: "hover:border-red-400/50",
    stat: { label: "Navigation", value: "SLAM" },
    featured: false,
  },
];

export const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 px-6 lg:px-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-background to-background -z-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-primary text-sm uppercase tracking-widest">// projects.exe</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            Things I've <span className="text-primary">built</span>
          </h2>
        </motion.div>

        {/* Featured projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {featured.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`group relative rounded-2xl border border-border bg-card ${project.border} transition-colors duration-300 overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative p-8 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="w-12 h-12 rounded-xl border border-border bg-secondary flex items-center justify-center group-hover:border-primary/50 transition-colors mb-3">
                        <Icon size={22} className="text-primary" />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground">{project.period}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary font-mono">{project.stat.value}</div>
                      <div className="text-xs text-muted-foreground font-mono uppercase tracking-wide">{project.stat.label}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">{project.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {project.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary font-mono mt-0.5 flex-shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
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

        {/* Additional projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rest.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`group relative rounded-xl border border-border bg-card ${project.border} transition-colors duration-300 overflow-hidden p-6 flex flex-col`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg border border-border bg-secondary flex items-center justify-center group-hover:border-primary/50 transition-colors">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <span className="text-xs font-mono text-primary font-bold">{project.stat.value}</span>
                  </div>
                  <h3 className="font-semibold text-foreground text-sm leading-snug mb-2">{project.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-1.5 py-0.5 rounded bg-secondary text-muted-foreground text-xs font-mono border border-border">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded bg-secondary text-muted-foreground text-xs font-mono border border-border">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
