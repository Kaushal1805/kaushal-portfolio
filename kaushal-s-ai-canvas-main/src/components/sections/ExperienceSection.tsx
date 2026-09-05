import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Sparkles, CheckCircle2, ChevronRight, Briefcase } from 'lucide-react';

interface Experience {
  id: number;
  role: string;
  company: string;
  focus: string;
  type: string;
  dates: string;
  bulletPoints: string[];
  skills: string[];
  featured?: boolean;
}

const experiences: Experience[] = [
  {
    id: 1,
    role: 'AI & Automation Intern',
    company: 'Codec Technologies',
    focus: 'AI/ML • n8n Automation • AI Workflows • APIs',
    type: 'Internship',
    dates: 'Jan 2026 – Apr 2026',
    bulletPoints: [
      'Developed practical AI/ML solutions and automation workflows.',
      'Built n8n-based workflows for data processing and task automation.',
      'Worked with LLM-powered workflows and AI Agent concepts.',
      'Integrated APIs, webhooks and external services into automated workflows.',
      'Applied Python and machine learning concepts to real-world problems.',
    ],
    skills: ['AI/ML', 'n8n Automation', 'AI Workflows', 'APIs', 'Webhooks', 'Python'],
    featured: true,
  },
  {
    id: 2,
    role: 'AI Automation Developer',
    company: 'Independent Projects',
    focus: 'Agentic AI • n8n • LLM Reasoning • BI Automation',
    type: 'Independent / Projects',
    dates: '2025 – Present',
    bulletPoints: [
      'Designed AI-powered business automation workflows using n8n.',
      'Built an AI Business Intelligence Agent for SQL analysis, KPI generation, anomaly detection and automated reporting.',
      'Developed automated workflows integrating MySQL, Telegram, Gmail and APIs.',
      'Explored Agentic AI, LLM-based reasoning and automated decision-making.',
      'Designed workflow-based systems that transform raw data into actionable business insights.',
    ],
    skills: ['n8n', 'Agentic AI', 'SQL Analysis', 'LLM Reasoning', 'Telegram API', 'Gmail API'],
    featured: true,
  },
  {
    id: 3,
    role: 'Data Analyst',
    company: 'Independent Analytics Projects',
    focus: 'Python • SQL • Power BI • End-to-End Analytics',
    type: 'Analytics Projects',
    dates: '2025 – Present',
    bulletPoints: [
      'Performed data cleaning, transformation and exploratory analysis using Python and SQL.',
      'Created interactive Power BI dashboards for business reporting and decision-making.',
      'Analyzed sales, customer, product and operational data.',
      'Used SQL for KPI calculation, trend analysis, ranking and business insights.',
      'Built end-to-end analytics pipelines from raw datasets to dashboards.',
    ],
    skills: ['Python', 'SQL', 'Power BI', 'Pandas', 'DAX', 'EDA'],
  },
  {
    id: 4,
    role: 'Data Annotation Specialist',
    company: 'Scaler AI Labs',
    focus: 'AI Training Data • Quality Assurance • Data Validation',
    type: 'Freelance / Contract',
    dates: 'Freelance / Contract',
    bulletPoints: [
      'Annotated and validated datasets used for AI/ML applications.',
      'Followed detailed annotation guidelines and quality standards.',
      'Performed data review and quality checks for consistency and accuracy.',
      'Developed practical understanding of AI training-data workflows.',
    ],
    skills: ['Data Annotation', 'AI Training Data', 'Data Validation', 'Quality Assurance'],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-1.5 rounded-full glass-strong text-xs font-mono text-primary mb-4"
          >
            EXPERIENCE & PROJECTS
          </motion.span>
          <h2 className="section-title">
            <span className="gradient-text text-glow">Professional Experience</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Hands-on work in AI automation, agentic workflows, data analytics, and machine learning
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className={`glass-strong rounded-2xl p-6 lg:p-8 card-gradient border transition-all duration-300 relative overflow-hidden ${
                exp.featured
                  ? 'border-primary/40 shadow-xl shadow-primary/5 hover:border-primary/70'
                  : 'border-border/50 hover:border-primary/40'
              }`}
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full pointer-events-none" />

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/25 font-semibold">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground bg-secondary/60 px-2.5 py-1 rounded-md">
                      {exp.focus}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-semibold text-sm sm:text-base mt-0.5 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span>{exp.company}</span>
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground bg-secondary/40 px-3 py-1.5 rounded-lg border border-border/30 self-start sm:self-center">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span>{exp.dates}</span>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="mt-5 space-y-2.5">
                {exp.bulletPoints.map((point, pIndex) => (
                  <div key={pIndex} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90">{point}</span>
                  </div>
                ))}
              </div>

              {/* Skills Tags */}
              <div className="mt-6 pt-4 border-t border-border/30 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-muted-foreground uppercase mr-1">Skills:</span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary/60 text-foreground border border-border/40 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;