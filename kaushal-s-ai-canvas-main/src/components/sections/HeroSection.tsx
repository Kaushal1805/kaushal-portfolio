import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ChevronDown, Github, Linkedin } from 'lucide-react';
import profileImg from '@/assets/profile.jpg';

const roles = [
  'Data Analytics',
  'AI Automation & Agentic AI',
  'Machine Learning & NLP',
  'Business Intelligence',
  'n8n Workflow Automation',
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-40 opacity-20" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      {/* Aurora blobs */}
      <div className="aurora-blob w-[500px] h-[500px] bg-primary -top-40 -left-40" />
      <div className="aurora-blob w-[400px] h-[400px] bg-secondary -bottom-20 right-10" style={{ animationDelay: '4s' }} />
      <div className="aurora-blob w-[300px] h-[300px] bg-accent top-1/3 right-1/4" style={{ animationDelay: '8s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-mono text-muted-foreground">Available for Opportunities</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold mb-4 leading-tight"
            >
              <span className="text-foreground">Hi, I'm </span>
              <span className="gradient-text-shimmer">Kaushal Kumar</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-6"
            >
              <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light">
                AIML Engineering Student
              </p>
              <div className="h-12 mt-3 flex items-center justify-center lg:justify-start">
                <span className="text-lg sm:text-xl lg:text-2xl font-mono text-primary text-glow">
                  {displayText}
                  <span className="typing-cursor" />
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Passionate about building intelligent systems and extracting insights from data. 
              Currently pursuing B.Tech in Computer Science & Engineering (AI/ML).
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="https://drive.google.com/file/d/1B583hwoA3_o3OGl-PTyR-TOlmfUgsOPU/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold transition-all hover:shadow-lg neon-glow animate-glow-pulse"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
              
              <motion.a
                href="#contact"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-primary/40 text-primary font-semibold transition-all hover:bg-primary/10 hover:border-primary/70"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-4 mt-8"
            >
              {[
                { 
                  icon: Github, 
                  href: 'https://github.com/Kaushal1805', 
                  label: 'GitHub' 
                },
                { 
                  icon: Linkedin, 
                  href: 'https://www.linkedin.com/in/kaushal-kumar-a61a91262', 
                  label: 'LinkedIn' 
                },
                { 
                  customSvg: true,
                  href: 'https://medium.com/@kaushalgangwar7088', 
                  label: 'Medium Blogs' 
                },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-strong hover:bg-primary/20 hover:neon-glow transition-all duration-300 flex items-center justify-center group"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  title={social.label}
                >
                  {social.customSvg ? (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary group-hover:text-primary">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                  ) : (
                    social.icon && <social.icon className="w-5 h-5 text-primary" />
                  )}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-2xl" />
              
              {/* Animated rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 rounded-full border border-secondary/20"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-accent/15"
              />
              
              {/* Profile image container */}
              <div className="absolute inset-12 rounded-full overflow-hidden neon-glow-strong ring-2 ring-primary/30 ring-offset-2 ring-offset-background">
                <img 
                  src={profileImg} 
                  alt="Kaushal Kumar profile photo" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -right-2 px-4 py-2 rounded-xl glass-strong text-xs font-mono text-primary neon-glow"
              >
                🤖 AI/ML
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 -left-2 px-4 py-2 rounded-xl glass-strong text-xs font-mono text-secondary neon-glow"
              >
                📊 Data Science
              </motion.div>
              <motion.div
                animate={{ y: [-8, 12, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 -right-8 px-4 py-2 rounded-xl glass-strong text-xs font-mono text-accent"
              >
                🧠 Deep Learning
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm font-mono">Scroll Down</span>
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;