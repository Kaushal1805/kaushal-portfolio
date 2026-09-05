import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Workflow,
  Database,
  Search,
  Code2,
  CheckCircle2,
  BarChart3,
  GitCompare,
  AlertTriangle,
  BrainCircuit,
  Lightbulb,
  FileText,
  Send,
  Sparkles,
  Layers,
  Cpu,
  ShieldCheck,
  Maximize2,
  X,
  ChevronRight,
  TrendingUp,
  LayoutDashboard,
  Filter,
  FileSpreadsheet,
  Globe,
  PieChart,
  ShoppingBag,
} from 'lucide-react';
import { projectsData, ProjectData, WorkflowStep } from '@/data/projectsData';
import ParticleBackground from '@/components/ParticleBackground';
import Footer from '@/components/Footer';

const stepIcons: Record<string, typeof Database> = {
  // BI Agent
  'Database Discovery': Database,
  'Schema Inspection': Search,
  'Dynamic SQL Generation': Code2,
  'Data Quality Validation': ShieldCheck,
  'KPI Analysis': BarChart3,
  'Comparative Analysis': GitCompare,
  'Anomaly Detection': AlertTriangle,
  'AI Business Analyst': BrainCircuit,
  'Business Recommendations': Lightbulb,
  'Executive Report': FileText,
  'Telegram / Gmail Notification': Send,

  // Retail Sales & Analytics Pipeline
  'Raw Transaction Data': Database,
  'Data Cleaning with Python': Code2,
  'Data Transformation': Layers,
  'SQL Business Analysis': Filter,
  'Power BI Dashboard': LayoutDashboard,
  'Business Insights': Lightbulb,

  // Movie Recommendation System & NLP Pipeline
  'Movie Dataset': Database,
  'Data Cleaning': Code2,
  'Feature Selection': Search,
  'Feature Combination': Layers,
  'Text Vectorization': BrainCircuit,
  'Cosine Similarity': GitCompare,
  'Similarity Ranking': BarChart3,
  'Top Movie Recommendations': Sparkles,

  // AI Lead Capture Bot Pipeline
  'Telegram User': Send,
  'Telegram Trigger': Workflow,
  'Lead Information Collection': FileText,
  'Data Processing': Code2,
  'Google Sheets CRM': FileSpreadsheet,
  'Confirmation Message': CheckCircle2,

  // Twitter Sentiment Analyzer Pipeline
  'Tweet/Text Input': Send,
  'Text Preprocessing': Code2,
  'Feature Extraction': Search,
  'TF-IDF Vectorization': BrainCircuit,
  'Machine Learning Model': Cpu,
  'Sentiment Prediction': Sparkles,
  'Streamlit Interface': LayoutDashboard,
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedStep, setSelectedStep] = useState<number>(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Find the project matching slug or default to first project
  const project: ProjectData =
    projectsData.find((p) => p.slug === slug || p.id.toString() === slug) ||
    projectsData[0];

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedStep(0);
  }, [slug]);

  const activeStepDetail =
    project.workflowStepsDetail && project.workflowStepsDetail[selectedStep];

  const isPowerBiProject = project.tech.includes('Power BI');
  const isAiAgent = project.slug === 'ai-powered-business-intelligence-agent';

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Particles */}
      <ParticleBackground />

      {/* Top Floating Navigation */}
      <header className="sticky top-0 z-40 glass backdrop-blur-xl border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate('/#projects')}
            className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs sm:text-sm px-3.5 py-1.5 rounded-full glass-strong hover:bg-primary/20 text-foreground hover:text-primary transition-colors border border-border/50"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs sm:text-sm px-3.5 py-1.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors font-medium shadow-lg shadow-primary/20"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 relative z-10">
        {/* Project Header / Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-strong border border-primary/30 text-xs sm:text-sm font-mono text-primary mb-4 shadow-sm shadow-primary/10">
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span>{project.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight mb-4 gradient-text">
            {project.title}
          </h1>

          {project.tagline && (
            <div className="inline-block mb-6 px-4 py-1 rounded-lg bg-secondary/30 border border-primary/20 text-xs sm:text-sm font-mono font-semibold text-primary tracking-wide">
              {project.tagline}
            </div>
          )}

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {project.description}
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            )}

            <a
              href="#project-visual"
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass-strong hover:bg-secondary/40 text-foreground font-semibold text-sm border border-border hover:border-primary/40 transition-all duration-300"
            >
              {isPowerBiProject ? (
                <>
                  <LayoutDashboard className="w-4 h-4 text-primary" />
                  View Dashboard
                </>
              ) : (
                <>
                  <Workflow className="w-4 h-4 text-primary" />
                  View Workflow
                </>
              )}
            </a>
          </div>
        </motion.div>

        {/* Visual Architecture & Dashboard / Diagram Showcase */}
        <motion.div
          id="project-visual"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="relative glass-strong rounded-2xl overflow-hidden border border-border/60 shadow-2xl group">
            {/* Header bar of the image container */}
            <div className="px-5 py-3.5 bg-card/60 backdrop-blur-md border-b border-border/40 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-3 text-xs font-mono text-muted-foreground hidden sm:inline-block">
                  {isPowerBiProject
                    ? `powerbi-report :: ${project.slug}.pbix`
                    : `workflow-pipeline :: ${project.slug}.json`}
                </span>
              </div>
              <button
                onClick={() => setIsImageModalOpen(true)}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors bg-secondary/30 px-3 py-1 rounded-md border border-border/30"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Fullscreen View</span>
              </button>
            </div>

            {/* Main Visual Image */}
            <div
              className="relative aspect-video w-full overflow-hidden cursor-pointer bg-black/40"
              onClick={() => setIsImageModalOpen(true)}
            >
              <img
                src={project.image}
                alt={`${project.title} Visual Presentation`}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="text-xs font-mono text-primary-foreground/90 bg-background/80 px-3 py-1.5 rounded-md backdrop-blur-md border border-white/10">
                  {isPowerBiProject
                    ? 'Interactive Business Intelligence Dashboard'
                    : 'End-to-End Autonomous Pipeline'}
                </span>
                <span className="text-xs font-mono text-muted-foreground bg-background/80 px-3 py-1.5 rounded-md backdrop-blur-md border border-white/10">
                  Click to Expand
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Step-by-Step Pipeline Flow */}
        {project.workflow && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-6xl mx-auto mb-16"
          >
            <div className="text-center mb-8">
              <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-1">
                Analytics Pipeline
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold gradient-text">
                {isPowerBiProject
                  ? 'End-to-End Analytics Workflow'
                  : 'Complete Autonomous Workflow'}
              </h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
                Step-by-step progression through data ingestion, cleaning, structured SQL modeling, and visual intelligence.
              </p>
            </div>

            {/* Step Selector Horizontal Bar */}
            <div className="glass-strong rounded-2xl p-4 sm:p-6 border border-border/60 mb-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2.5">
                {project.workflow.map((stepName, index) => {
                  const isSelected = selectedStep === index;
                  const Icon = stepIcons[stepName] || Workflow;
                  return (
                    <button
                      key={stepName}
                      onClick={() => setSelectedStep(index)}
                      className={`flex flex-col items-start p-3 rounded-xl transition-all duration-300 text-left border ${
                        isSelected
                          ? 'bg-primary/15 border-primary/60 text-primary shadow-lg shadow-primary/10'
                          : 'bg-card/40 border-border/40 hover:bg-secondary/30 text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-2">
                        <span
                          className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                            isSelected
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-secondary text-muted-foreground'
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <Icon
                          className={`w-4 h-4 ${
                            isSelected ? 'text-primary' : 'text-muted-foreground'
                          }`}
                        />
                      </div>
                      <span className="text-xs font-semibold leading-tight line-clamp-2">
                        {stepName}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Step Detail Card */}
              {activeStepDetail && (
                <motion.div
                  key={selectedStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 pt-6 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-primary/5 rounded-xl p-4 border border-primary/20"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                      {(() => {
                        const Icon = stepIcons[activeStepDetail.name] || Workflow;
                        return <Icon className="w-5 h-5" />;
                      })()}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-semibold text-primary uppercase">
                          Phase {activeStepDetail.step} / {project.workflow.length}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/80 text-muted-foreground capitalize">
                          {activeStepDetail.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-heading font-bold text-foreground">
                        {activeStepDetail.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {activeStepDetail.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <button
                      onClick={() => setSelectedStep((prev) => Math.max(0, prev - 1))}
                      disabled={selectedStep === 0}
                      className="px-3 py-1.5 text-xs rounded-lg glass-strong border border-border/40 disabled:opacity-40 hover:bg-secondary/40 transition-colors"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() =>
                        setSelectedStep((prev) =>
                          Math.min((project.workflow?.length || 1) - 1, prev + 1)
                        )
                      }
                      disabled={selectedStep === project.workflow.length - 1}
                      className="px-3 py-1.5 text-xs rounded-lg bg-primary text-primary-foreground font-medium disabled:opacity-40 hover:bg-primary/90 transition-colors"
                    >
                      Next Step
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.section>
        )}

        {/* Project Overview */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="lg:col-span-2 glass-strong rounded-2xl p-6 sm:p-8 border border-border/60 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-5 h-5 text-primary" />
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                  Project Overview
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-4">
                {project.longDescription}
              </p>
            </div>

            {project.highlights && (
              <div className="mt-6 pt-6 border-t border-border/40">
                <h4 className="text-xs font-mono uppercase tracking-wider text-primary mb-3">
                  Core Highlights
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Business Value & Architecture Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            {/* Business Value Box */}
            <div className="glass-strong rounded-2xl p-6 border border-primary/30 bg-gradient-to-br from-primary/10 via-card/50 to-secondary/20 shadow-xl flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-primary mb-3">
                  <TrendingUp className="w-5 h-5" />
                  <h3 className="font-heading font-bold text-base uppercase tracking-wider">
                    Analytics Value
                  </h3>
                </div>
                <p className="text-foreground/90 text-sm leading-relaxed">
                  {project.businessValue ||
                    'Empowers stakeholders with interactive business intelligence, clear KPI tracking, and deep dive capabilities into sales drivers.'}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-primary/20 flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>Methodology</span>
                <span className="text-primary font-bold">End-to-End Pipeline</span>
              </div>
            </div>

            {/* Key Technology Foundation */}
            <div className="glass-strong rounded-2xl p-6 border border-border/60">
              <div className="flex items-center gap-2 text-foreground mb-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <h3 className="font-heading font-semibold text-sm">
                  Data Quality & Structure
                </h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Structured data cleaning in Python guarantees high data integrity by filtering outliers, duplicates, and invalid orders before relational SQL querying and Power BI modeling.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Specialized Breakdown: Data Preparation & Business Analysis / SQL */}
        {(project.dataCleaning || project.dataPreparation || project.sqlAnalysis || project.businessAnalysis) && (
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {/* Data Preparation / Cleaning Section */}
            {(project.dataCleaning || project.dataPreparation) && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.42 }}
                className="glass-strong rounded-2xl p-6 sm:p-8 border border-border/60"
              >
                <div className="flex items-center gap-2.5 mb-6 text-primary">
                  <Code2 className="w-5 h-5" />
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    {project.dataPreparation
                      ? 'Data Preparation & Standardization'
                      : 'Data Cleaning (Python & Pandas)'}
                  </h3>
                </div>
                <div className="space-y-3">
                  {(project.dataPreparation || project.dataCleaning || []).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-secondary/30 border border-border/40 text-xs sm:text-sm text-foreground/90 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Business Analysis / SQL Analysis Section */}
            {(project.sqlAnalysis || project.businessAnalysis) && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="glass-strong rounded-2xl p-6 sm:p-8 border border-border/60"
              >
                <div className="flex items-center gap-2.5 mb-6 text-primary">
                  <Filter className="w-5 h-5" />
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    {project.businessAnalysis
                      ? 'Business Analysis Scope'
                      : 'SQL Business Analysis'}
                  </h3>
                </div>
                <div className="space-y-3">
                  {(project.businessAnalysis || project.sqlAnalysis || []).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-secondary/30 border border-border/40 text-xs sm:text-sm text-foreground/90 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        )}

        {/* Power BI Dashboard Features & Key Insights */}
        {(project.dashboardFeatures || project.keyInsights) && (
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {/* Power BI Dashboard Features */}
            {project.dashboardFeatures && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.48 }}
                className="glass-strong rounded-2xl p-6 sm:p-8 border border-border/60"
              >
                <div className="flex items-center gap-2.5 mb-6 text-primary">
                  <LayoutDashboard className="w-5 h-5" />
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    Power BI Dashboard Metrics & Visuals
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {project.dashboardFeatures.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-secondary/30 border border-border/40 text-xs font-medium text-foreground/90"
                    >
                      <BarChart3 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Key Insights */}
            {project.keyInsights && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="glass-strong rounded-2xl p-6 sm:p-8 border border-primary/30 bg-gradient-to-br from-primary/5 via-card/40 to-secondary/20"
              >
                <div className="flex items-center gap-2.5 mb-6 text-primary">
                  <Lightbulb className="w-5 h-5" />
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    Key Business Insights
                  </h3>
                </div>
                <div className="space-y-3">
                  {project.keyInsights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-card/60 border border-primary/20 text-xs sm:text-sm text-foreground/90 font-medium"
                    >
                      <Sparkles className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        )}

        {/* Lead Capture Information Fields & Target Use Cases */}
        {(project.leadInfoFields || project.useCases) && (
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {/* Lead Info Fields */}
            {project.leadInfoFields && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.42 }}
                className="glass-strong rounded-2xl p-6 sm:p-8 border border-border/60"
              >
                <div className="flex items-center gap-2.5 mb-6 text-primary">
                  <FileSpreadsheet className="w-5 h-5" />
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    Lead Information Captured
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.leadInfoFields.map((field, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-secondary/30 border border-border/40 text-xs sm:text-sm font-semibold text-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{field}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Target Use Cases */}
            {project.useCases && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="glass-strong rounded-2xl p-6 sm:p-8 border border-border/60"
              >
                <div className="flex items-center gap-2.5 mb-6 text-primary">
                  <Globe className="w-5 h-5" />
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    Target Use Cases
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {project.useCases.map((useCase, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-lg bg-secondary/40 border border-border/40 text-xs sm:text-sm font-medium text-foreground"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        )}

        {/* Future Automation Possibilities */}
        {project.futurePossibilities && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.47 }}
            className="max-w-6xl mx-auto mb-16"
          >
            <div className="glass-strong rounded-2xl p-6 sm:p-8 border border-primary/30 bg-gradient-to-br from-primary/10 via-card/50 to-secondary/20">
              <div className="flex items-center gap-2.5 mb-6 text-primary">
                <Sparkles className="w-5 h-5" />
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                  Future Automation Possibilities
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {project.futurePossibilities.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3.5 rounded-xl bg-card/60 border border-primary/20 text-xs font-semibold text-foreground"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Sentiment Classes Section */}
        {project.sentimentClasses && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.43 }}
            className="max-w-6xl mx-auto mb-16"
          >
            <div className="glass-strong rounded-2xl p-6 sm:p-8 border border-border/60">
              <div className="flex items-center gap-2.5 mb-6 text-primary">
                <Sparkles className="w-5 h-5" />
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                  Target Sentiment Classes
                </h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {project.sentimentClasses.map((sentiment, idx) => {
                  const isPositive = sentiment === 'Positive';
                  const isNegative = sentiment === 'Negative';
                  const isNeutral = sentiment === 'Neutral';

                  return (
                    <div
                      key={idx}
                      className={`p-5 rounded-2xl border flex flex-col items-center justify-center text-center transition-all ${
                        isPositive
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                          : isNegative
                          ? 'bg-red-500/10 border-red-500/30 text-red-400'
                          : 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                      }`}
                    >
                      <span className="text-2xl font-bold font-heading mb-1">
                        {sentiment}
                      </span>
                      <span className="text-xs font-mono opacity-80">
                        {isPositive
                          ? 'Favorable, optimistic & enthusiastic'
                          : isNegative
                          ? 'Critical, dissatisfied & negative'
                          : 'Objective, neutral & factual'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.section>
        )}

        {/* Machine Learning Concepts Section */}
        {project.mlConcepts && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44 }}
            className="max-w-6xl mx-auto mb-16"
          >
            <div className="glass-strong rounded-2xl p-6 sm:p-8 border border-primary/30 bg-gradient-to-br from-primary/10 via-card/50 to-secondary/20">
              <div className="flex items-center gap-2.5 mb-6 text-primary">
                <BrainCircuit className="w-5 h-5" />
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                  Machine Learning Concepts Applied
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {project.mlConcepts.map((concept, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3.5 rounded-xl bg-card/60 border border-primary/20 text-xs sm:text-sm font-semibold text-foreground"
                  >
                    <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{concept}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* General Features Section (if present and no specialized blocks) */}
        {project.features && !project.dataCleaning && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="max-w-6xl mx-auto mb-16"
          >
            <div className="text-center mb-10">
              <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-1">
                Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold gradient-text">
                Key System Features
              </h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
                Comprehensive components integrated into the recommendation workflow.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="glass-strong rounded-xl p-4 sm:p-5 border border-border/50 hover:border-primary/50 transition-all duration-300 flex items-start gap-3 group bg-card/40 hover:bg-card/70"
                >
                  <div className="w-7 h-7 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary transition-colors mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-foreground/90 font-medium leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Technologies Stack */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="glass-strong rounded-2xl p-6 sm:p-8 border border-border/60">
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="w-5 h-5 text-primary" />
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                Technologies & Tools Used
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl glass-strong border border-primary/20 hover:border-primary/50 text-sm font-mono font-medium text-foreground hover:text-primary transition-all shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="max-w-4xl mx-auto text-center glass-strong rounded-2xl p-8 sm:p-12 border border-primary/30 relative overflow-hidden bg-gradient-to-b from-primary/10 via-card to-background"
        >
          <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-3 gradient-text">
            Explore the Source Code & Queries
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto mb-8">
            Access the complete repository, cleaning scripts, SQL queries, and dashboard documentation on GitHub.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/30 hover:scale-105 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View Repository on GitHub</span>
              </a>
            )}

            <button
              onClick={() => navigate('/#projects')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass-strong hover:bg-secondary/40 text-foreground font-medium text-sm border border-border transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Projects</span>
            </button>
          </div>
        </motion.div>
      </main>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-2xl"
            onClick={() => setIsImageModalOpen(false)}
          >
            <div className="relative max-w-7xl w-full max-h-[95vh] flex flex-col">
              <div className="flex items-center justify-between pb-3 text-white">
                <span className="font-mono text-sm font-semibold">
                  {project.title} — Full Resolution View
                </span>
                <button
                  onClick={() => setIsImageModalOpen(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div
                className="overflow-auto rounded-xl border border-white/20 bg-card/80"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={project.image}
                  alt={`${project.title} Full Resolution`}
                  className="w-full h-auto object-contain max-h-[80vh] mx-auto"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
