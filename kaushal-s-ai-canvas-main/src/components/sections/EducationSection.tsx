import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      <div className="absolute inset-0 hex-accent opacity-15" />
      
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
            ACADEMICS
          </motion.span>
          <h2 className="section-title">
            <span className="gradient-text text-glow">Education</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Academic background and learning journey
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-strong rounded-3xl overflow-hidden card-gradient hover:neon-glow transition-all duration-500">
              {/* Header */}
              <div className="relative h-48 bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/5 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern bg-grid-40 opacity-15" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-20 -right-20 w-64 h-64 border border-primary/15 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-10 -right-10 w-48 h-48 border border-secondary/15 rounded-full"
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.4, type: 'spring' }}
                    className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center neon-glow backdrop-blur-sm"
                  >
                    <GraduationCap className="w-12 h-12 text-primary" />
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 text-center">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-2"
                >
                  B.Tech in Computer Science & Engineering
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="text-lg gradient-text font-medium mb-6"
                >
                  Specialization: Artificial Intelligence & Machine Learning
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground mb-8"
                >
                  {[
                    { icon: BookOpen, text: 'Lamrin Tech Skills University Punjab' },
                    { icon: MapPin, text: 'Uttar Pradesh, India' },
                    { icon: Calendar, text: '2023 – Present' },
                  ].map((item, i) => (
                    <span key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full glass text-sm">
                      <item.icon className="w-4 h-4 text-primary" />
                      {item.text}
                    </span>
                  ))}
                </motion.div>

                {/* Key subjects */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <h4 className="text-xs font-mono text-muted-foreground mb-4 tracking-wider">KEY FOCUS AREAS</h4>
                  <div className="flex flex-wrap justify-center gap-2.5">
                    {[
                      'Artificial Intelligence',
                      'Machine Learning',
                      'Data Analytics',
                      'Deep Learning',
                      'Python Programming',
                      'Data Structures',
                      'Algorithms',
                      'Computer Vision',
                    ].map((subject, index) => (
                      <motion.span
                        key={subject}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.9 + index * 0.05 }}
                        whileHover={{ scale: 1.08 }}
                        className="skill-badge"
                      >
                        {subject}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;