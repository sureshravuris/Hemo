import { motion } from "framer-motion";
import { SiGooglecloud, SiPython, SiGo, SiJavascript } from "react-icons/si";
import { Cloud } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const highlights = [
  { label: "Transactions/hr", value: "3M+" },
  { label: "Events/sec", value: "5K+" },
  { label: "Accuracy", value: "97.4%" },
  { label: "GPA", value: "4.0" },
];

const cloudIcons = [
  { icon: SiGooglecloud, label: "GCP", color: "#4285F4" },
  { icon: Cloud, label: "AWS", color: "#FF9900" },
  { icon: Cloud, label: "Azure", color: "#0089D6" },
  { icon: SiPython, label: "Python", color: "#3776AB" },
  { icon: SiGo, label: "Go", color: "#00ADD8" },
  { icon: SiJavascript, label: "JS", color: "#F7DF1E" },
];

export const About = () => {
  return (
    <section id="about" className="py-28 px-6 lg:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-8">
            <motion.div variants={fadeUp} custom={0}>
              <span className="font-mono text-primary text-sm uppercase tracking-widest">// about.sys</span>
              <h2 className="text-4xl lg:text-5xl font-bold mt-3 text-foreground">
                Engineering at <span className="text-primary">scale</span>
              </h2>
            </motion.div>

            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-lg leading-relaxed">
              Software and Data Platform Engineer with 3+ years building distributed systems,
              real-time streaming pipelines, and scalable backend services across cloud-native
              environments at Cognizant, Walmart, and Adobe.
            </motion.p>

            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg leading-relaxed">
              Currently serving as AIOps Research Engineer at San José State University, building
              an agentic LLM & RAG-powered copilot for automated ETL observability and
              SLA-driven remediation. MS in Software Engineering, GPA 4.0.
            </motion.p>

            <motion.p variants={fadeUp} custom={3} className="text-muted-foreground text-lg leading-relaxed">
              Focused on backend engineering, distributed systems, data platforms, and applied AI
              in production environments. Strong experience in Kafka, Spark, Airflow, BigQuery,
              Spring Boot, Python, SQL, and Snowflake.
            </motion.p>

            <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-3">
              {cloudIcons.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-2 rounded-md border border-border bg-card text-sm font-mono text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
                  data-testid={`about-tech-${label.toLowerCase()}`}
                >
                  <Icon style={{ color }} size={16} />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeUp} custom={2} className="grid grid-cols-2 gap-4">
            {highlights.map(({ label, value }, i) => (
              <motion.div
                key={label}
                custom={i}
                variants={fadeUp}
                className="relative group p-8 rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors duration-300"
                data-testid={`about-stat-${label.toLowerCase().replace(/\//g, "-").replace(/\s/g, "-")}`}
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-4xl font-bold text-primary font-mono">{value}</div>
                <div className="text-sm text-muted-foreground mt-2 font-mono uppercase tracking-wide">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
