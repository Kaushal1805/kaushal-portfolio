import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ExternalLink,
  Github,
  X,
  ChevronRight,
  Eye,
  Workflow,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import { projectsData, ProjectData } from '@/data/projectsData';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
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
            MY WORK
          </motion.span>
          <h2 className="section-title">
            <span className="gradient-text text-glow">Featured Projects</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Showcasing my work in AI Automation, Business Intelligence, Data Analytics, and Machine Learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectsData.map((project, index) => {
            const isFlagship = project.featured;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
                className={`group cursor-pointer ${
                  isFlagship ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                <div
                  className={`glass-strong rounded-2xl overflow-hidden card-gradient h-full flex flex-col transition-all duration-300 border ${
                    isFlagship
                      ? 'border-primary/40 shadow-xl shadow-primary/10 hover:border-primary/70'
                      : 'border-border/40 hover:border-primary/30'
                  }`}
                >
                  {isFlagship ? (
                    /* Flagship Featured Layout (AI BI Agent) */
                    <div className="grid lg:grid-cols-12 gap-0 h-full">
                      <div className="lg:col-span-7 relative min-h-[260px] lg:min-h-[380px] overflow-hidden bg-black/40">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-card" />

                        {/* Featured Badge */}
                        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-lg shadow-primary/30 backdrop-blur-md">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Featured Project</span>
                        </div>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-primary/15 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                          <span className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-strong text-sm font-semibold text-primary shadow-lg">
                            <Eye className="w-4 h-4" />
                            View Interactive Overview
                          </span>
                        </div>
                      </div>

                      <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-xs font-mono text-primary mb-2">
                            <span>{project.category}</span>
                          </div>

                          <h3 className="text-xl lg:text-2xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                            {project.title}
                          </h3>

                          {project.tagline && (
                            <div className="inline-block px-3 py-1 rounded-md bg-secondary/50 border border-primary/20 text-xs font-mono font-medium text-primary mb-3">
                              {project.tagline}
                            </div>
                          )}

                          <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                            {project.description}
                          </p>

                          {/* Workflow Pills preview */}
                          {project.workflow && (
                            <div className="mb-4">
                              <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block mb-1.5">
                                Automated Workflow:
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {project.workflow.slice(0, 4).map((step) => (
                                  <span
                                    key={step}
                                    className="text-[11px] px-2 py-0.5 rounded-md bg-primary/10 text-primary/90 border border-primary/20 font-mono"
                                  >
                                    {step}
                                  </span>
                                ))}
                                <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary text-muted-foreground font-mono">
                                  +{project.workflow.length - 4} steps
                                </span>
                              </div>
                            </div>
                          )}

                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {project.tech.map((tech) => (
                              <span key={tech} className="skill-badge text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/30">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1.5 text-xs sm:text-sm px-3.5 py-1.5 rounded-lg glass-strong text-muted-foreground hover:text-primary transition-colors border border-border/40"
                            >
                              <Github className="w-4 h-4" />
                              Code
                            </a>
                          )}

                          <Link
                            to={`/projects/${project.slug}`}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 text-xs sm:text-sm px-4 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-semibold transition-colors border border-primary/30 ml-auto"
                          >
                            <span>Dedicated Page</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Standard Project Card Layout */
                    <>
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                          <span className="flex items-center gap-2 px-4 py-2 rounded-full glass-strong text-sm font-medium text-primary">
                            <Eye className="w-4 h-4" />
                            View Details
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <span className="text-[11px] font-mono text-primary mb-1">
                          {project.category}
                        </span>

                        <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                          {project.title}
                        </h3>

                        <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed line-clamp-2">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.slice(0, 3).map((tech) => (
                            <span key={tech} className="skill-badge text-xs">
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="skill-badge text-xs">+{project.tech.length - 3}</span>
                          )}
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-4 pt-3 border-t border-border/30">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              <Github className="w-4 h-4" />
                              Code
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Demo
                            </a>
                          )}
                          <ChevronRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div className="absolute inset-0 bg-background/85 backdrop-blur-2xl" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative glass-strong rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto neon-glow border border-border/60"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full glass-strong hover:bg-primary/20 transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-60 sm:h-72 overflow-hidden relative bg-black/40">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                <span className="text-xs font-mono text-primary-foreground bg-primary/80 px-3 py-1 rounded-full backdrop-blur-md">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-2 gradient-text">
                {selectedProject.title}
              </h3>

              {selectedProject.tagline && (
                <div className="inline-block mb-4 px-3 py-1 rounded-md bg-secondary/50 border border-primary/20 text-xs font-mono font-medium text-primary">
                  {selectedProject.tagline}
                </div>
              )}

              <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
                {selectedProject.longDescription}
              </p>

              {/* Workflow Pipeline if present */}
              {selectedProject.workflow && (
                <div className="mb-6 p-4 rounded-xl glass-strong border border-border/40 bg-card/40">
                  <div className="flex items-center gap-2 mb-3 text-primary">
                    <Workflow className="w-4 h-4" />
                    <h4 className="text-sm font-heading font-semibold uppercase tracking-wider">
                      Automated Pipeline Stages ({selectedProject.workflow.length} Steps)
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.workflow.map((step, i) => (
                      <div
                        key={step}
                        className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md bg-secondary/60 border border-border/40 text-foreground"
                      >
                        <span className="text-[10px] text-primary font-bold">{i + 1}.</span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Business Value if present */}
              {selectedProject.businessValue && (
                <div className="mb-6 p-4 rounded-xl bg-primary/10 border border-primary/30">
                  <div className="flex items-center gap-2 mb-2 text-primary">
                    <TrendingUp className="w-4 h-4" />
                    <h4 className="text-sm font-heading font-semibold uppercase tracking-wider">
                      Business Value
                    </h4>
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    {selectedProject.businessValue}
                  </p>
                </div>
              )}

              {/* Specialized sections if available */}
              {(selectedProject.dataCleaning || selectedProject.dataPreparation) && (
                <div className="mb-6">
                  <h4 className="text-sm font-heading font-semibold mb-2.5 text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {selectedProject.dataPreparation
                      ? 'Data Preparation & Standardization'
                      : 'Data Cleaning (Python & Pandas)'}
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {(selectedProject.dataPreparation || selectedProject.dataCleaning || []).slice(0, 6).map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground text-xs bg-secondary/30 p-2 rounded-lg border border-border/30"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.dashboardFeatures && (
                <div className="mb-6">
                  <h4 className="text-sm font-heading font-semibold mb-2.5 text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Power BI Dashboard Metrics & Visuals
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {selectedProject.dashboardFeatures.slice(0, 6).map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground text-xs bg-secondary/30 p-2 rounded-lg border border-border/30"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features if present and no dataCleaning */}
              {selectedProject.features && !selectedProject.dataCleaning && (
                <div className="mb-6">
                  <h4 className="text-base font-heading font-semibold mb-3 text-foreground">
                    Key Features
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground text-xs bg-secondary/30 p-2.5 rounded-lg border border-border/30"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Lead Info Fields if present */}
              {selectedProject.leadInfoFields && (
                <div className="mb-6">
                  <h4 className="text-sm font-heading font-semibold mb-2.5 text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Lead Information Captured
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.leadInfoFields.map((field, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-md bg-secondary/60 text-foreground border border-border/40 font-medium"
                      >
                        {field}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Target Use Cases if present */}
              {selectedProject.useCases && (
                <div className="mb-6">
                  <h4 className="text-sm font-heading font-semibold mb-2.5 text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Target Use Cases
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.useCases.map((useCase, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-0.5 rounded-full bg-secondary/40 text-muted-foreground border border-border/30"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Sentiment Classes if present */}
              {selectedProject.sentimentClasses && (
                <div className="mb-6">
                  <h4 className="text-sm font-heading font-semibold mb-2.5 text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Sentiment Classification Classes
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.sentimentClasses.map((sentiment, i) => (
                      <span
                        key={i}
                        className={`text-xs px-3 py-1 rounded-md font-semibold border ${
                          sentiment === 'Positive'
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                            : sentiment === 'Negative'
                            ? 'bg-red-500/10 text-red-400 border-red-500/30'
                            : 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                        }`}
                      >
                        {sentiment}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Machine Learning Concepts if present */}
              {selectedProject.mlConcepts && (
                <div className="mb-6">
                  <h4 className="text-sm font-heading font-semibold mb-2.5 text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Machine Learning Concepts
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.mlConcepts.map((concept, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20 font-medium"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Highlights (for dashboard/ML projects) */}
              {selectedProject.highlights && !selectedProject.features && !selectedProject.dataCleaning && !selectedProject.mlConcepts && (
                <div className="mb-6">
                  <h4 className="text-base font-heading font-semibold mb-3 text-foreground">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-heading font-semibold mb-3 text-foreground">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span key={tech} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border/30">
                <div className="flex items-center gap-3">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary/60 hover:bg-secondary text-foreground transition-colors font-medium text-xs sm:text-sm border border-border/40"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </a>
                  )}

                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/20 hover:bg-primary/30 text-primary transition-colors font-medium text-xs sm:text-sm border border-primary/30"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>

                <Link
                  to={`/projects/${selectedProject.slug}`}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium text-xs sm:text-sm shadow-md shadow-primary/20"
                >
                  <span>Open Full Detail Page</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectsSection;