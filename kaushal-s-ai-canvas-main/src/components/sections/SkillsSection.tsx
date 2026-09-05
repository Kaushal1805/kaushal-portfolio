import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Database, Brain, Zap, Code2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Data Analytics',
    icon: '📊',
    lucideIcon: Database,
    color: 'from-blue-500/20 to-cyan-500/10',
    skills: [
      'Python',
      'Pandas',
      'NumPy',
      'SQL',
      'Excel',
      'Power BI',
      'Power Query',
      'DAX',
      'Exploratory Data Analysis',
      'Data Cleaning',
      'Data Visualization',
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: '🤖',
    lucideIcon: Brain,
    color: 'from-purple-500/20 to-pink-500/10',
    skills: [
      'Machine Learning',
      'Scikit-learn',
      'NLP',
      'Feature Engineering',
      'TF-IDF',
      'Classification',
      'Recommendation Systems',
    ],
  },
  {
    title: 'AI Automation & Agentic AI',
    icon: '⚡',
    lucideIcon: Zap,
    color: 'from-amber-500/20 to-orange-500/10',
    skills: [
      'n8n Workflow Automation',
      'AI Agents / Agentic AI',
      'LLM Workflows',
      'AI-powered Automation',
      'Prompt Engineering',
      'API Integration',
      'Webhooks',
      'Automated Reporting',
      'Telegram / Gmail Automation',
    ],
  },
  {
    title: 'Programming & Tools',
    icon: '💻',
    lucideIcon: Code2,
    color: 'from-emerald-500/20 to-teal-500/10',
    skills: [
      'Python',
      'JavaScript',
      'Git',
      'GitHub',
      'Jupyter Notebook',
      'Streamlit',
    ],
  },
];

// Highlighted skills for the visual floating sphere
const featuredSkills = [
  'Python',
  'n8n Automation',
  'SQL',
  'Power BI',
  'Agentic AI',
  'Pandas',
  'Machine Learning',
  'Scikit-learn',
  'NLP',
  'LLM Workflows',
  'DAX',
  'Streamlit',
  'JavaScript',
  'Git',
  'Data Cleaning',
  'Prompt Engineering',
  'TF-IDF',
  'Telegram / Gmail API',
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute inset-0 hex-accent opacity-20" />

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
            EXPERTISE
          </motion.span>
          <h2 className="section-title">
            <span className="gradient-text text-glow">Technical Skills</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Technologies, frameworks, and tools across Data Analytics, AI & Machine Learning, and Agentic Automation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Visual Interactive Skills Universe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative h-[380px] lg:h-[580px] flex items-center justify-center sticky top-24"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Central glowing core */}
              <div className="absolute w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute w-28 h-28 bg-secondary/30 rounded-full blur-2xl" />

              {/* Orbiting concentric guides */}
              <div className="absolute w-[240px] h-[240px] rounded-full border border-primary/20 border-dashed animate-spin-slow" />
              <div className="absolute w-[360px] h-[360px] rounded-full border border-border/40" />
              <div className="absolute w-[460px] h-[460px] rounded-full border border-primary/10 border-dashed" />

              {/* Core center badge */}
              <div className="absolute z-20 flex flex-col items-center justify-center w-28 h-28 rounded-full glass-strong border border-primary/40 shadow-xl shadow-primary/20 text-center">
                <Sparkles className="w-6 h-6 text-primary animate-pulse mb-1" />
                <span className="text-[11px] font-mono font-bold text-foreground">TECH STACK</span>
              </div>

              {/* Orbiting skill pills */}
              {featuredSkills.map((skill, index) => {
                const total = featuredSkills.length;
                const angle = (index * 360) / total;
                const radius = 120 + (index % 3) * 45;
                const delay = index * 0.05;

                return (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            scale: 1,
                            x: Math.cos((angle * Math.PI) / 180) * radius,
                            y: Math.sin((angle * Math.PI) / 180) * radius,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.5,
                      delay,
                      type: 'spring',
                      stiffness: 100,
                    }}
                    whileHover={{ scale: 1.2, zIndex: 30 }}
                    className="absolute skill-badge cursor-default whitespace-nowrap shadow-md hover:border-primary transition-all duration-200"
                    style={{
                      fontSize: index % 3 === 0 ? '13px' : '11px',
                    }}
                  >
                    {skill}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Skill Categories Grid */}
          <div className="lg:col-span-7 space-y-6">
            {skillCategories.map((category, catIndex) => {
              const Icon = category.lucideIcon;

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: catIndex * 0.12 }}
                  whileHover={{ x: -4 }}
                  className="glass-strong rounded-2xl p-6 lg:p-7 group hover:neon-glow transition-all duration-300 border border-border/50 hover:border-primary/40 relative overflow-hidden"
                >
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${category.color} rounded-bl-full pointer-events-none opacity-60`}
                  />

                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <span>{category.title}</span>
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground bg-secondary/60 px-2.5 py-1 rounded-md">
                      {category.skills.length} skills
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: catIndex * 0.12 + skillIndex * 0.03 }}
                        whileHover={{ scale: 1.06, y: -2 }}
                        className="skill-badge text-xs font-medium cursor-default py-1.5 px-3"
                      >
                        {skill}
                      </motion.span>
                    ))}
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

export default SkillsSection;