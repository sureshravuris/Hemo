import { motion } from "framer-motion";
import {
  SiPython, SiCplusplus, SiGo, SiJavascript,
  SiMysql, SiSnowflake, SiApachehadoop,
  SiApachekafka, SiApachespark, SiApacheairflow, SiDbt, SiGrafana,
  SiGooglecloud, SiKubernetes, SiDocker, SiTerraform, SiLinux, SiRedis, SiElasticsearch, SiNodedotjs,
} from "react-icons/si";
import { Cloud, BarChart2, Coffee } from "lucide-react";

const skillCategories = [
  {
    label: "Programming",
    color: "text-primary",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: Coffee, color: "#ED8B00" },
      { name: "Go", icon: SiGo, color: "#00ADD8" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    ],
  },
  {
    label: "Databases & Warehouses",
    color: "text-blue-400",
    skills: [
      { name: "BigQuery", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Snowflake", icon: SiSnowflake, color: "#29B5E8" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Elasticsearch", icon: SiElasticsearch, color: "#005571" },
      { name: "Hadoop", icon: SiApachehadoop, color: "#66CCFF" },
    ],
  },
  {
    label: "ETL & Data Platforms",
    color: "text-cyan-400",
    skills: [
      { name: "Kafka", icon: SiApachekafka, color: "#231F20" },
      { name: "Spark", icon: SiApachespark, color: "#E25A1C" },
      { name: "Airflow", icon: SiApacheairflow, color: "#017CEE" },
      { name: "dbt", icon: SiDbt, color: "#FF694B" },
      { name: "Grafana", icon: SiGrafana, color: "#F46800" },
      { name: "Tableau", icon: BarChart2, color: "#E97627" },
    ],
  },
  {
    label: "Cloud & Infrastructure",
    color: "text-green-400",
    skills: [
      { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
      { name: "AWS", icon: Cloud, color: "#FF9900" },
      { name: "Azure", icon: Cloud, color: "#0089D6" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
    ],
  },
];

const coreCompetencies = [
  "Distributed Systems",
  "System Design",
  "Data Structures & Algorithms",
  "Scalability",
  "Fault Tolerance",
  "Performance Optimization",
  "Microservices",
  "REST / gRPC APIs",
  "Real-time Streaming",
  "CDC Pipelines",
  "Data Modeling",
  "Applied ML / GenAI",
];

export const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-primary text-sm uppercase tracking-widest">// skills.json</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            Technology <span className="text-primary">arsenal</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: ci * 0.1, duration: 0.5 }}
              className="rounded-xl border border-border bg-card p-6"
              data-testid={`skills-category-${ci}`}
            >
              <h3 className={`font-mono text-sm uppercase tracking-widest mb-5 ${cat.color}`}>
                {cat.label}
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {cat.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group flex flex-col items-center gap-2 p-3 rounded-lg border border-border hover:border-primary/40 bg-secondary/30 hover:bg-secondary/60 transition-all duration-200 cursor-default"
                      data-testid={`skill-${skill.name.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      <Icon size={24} style={{ color: skill.color }} className="opacity-80 group-hover:opacity-100 transition-opacity" />
                      <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-border bg-card p-8"
        >
          <h3 className="font-mono text-sm uppercase tracking-widest text-primary mb-5">Core Competencies</h3>
          <div className="flex flex-wrap gap-3">
            {coreCompetencies.map((c, i) => (
              <motion.span
                key={c}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono hover:bg-primary/20 transition-colors"
                data-testid={`competency-${c.toLowerCase().replace(/[\s/&]/g, "-")}`}
              >
                {c}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
