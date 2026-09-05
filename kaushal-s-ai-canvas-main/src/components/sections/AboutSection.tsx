import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Database, LineChart, Cpu, Sparkles, Target } from 'lucide-react';
import profileImg from '@/assets/profile.jpg';

const interests = [
  { icon: LineChart, label: 'Data Analytics', description: 'Extracting insights from complex datasets', color: 'primary' },
  { icon: Database, label: 'Data Science', description: 'Building data-driven solutions', color: 'secondary' },
  { icon: Brain, label: 'Machine Learning', description: 'Creating intelligent systems', color: 'primary' },
  { icon: Cpu, label: 'Deep Learning', description: 'Neural networks & AI models', color: 'accent' },
  { icon: Sparkles, label: 'MLOps', description: 'Deploying ML at scale', color: 'secondary' },
  { icon: Target, label: 'EDA', description: 'Exploratory Data Analysis', color: 'primary' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute inset-0 hex-accent opacity-30" />
      
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
            WHO AM I
          </motion.span>
          <h2 className="section-title">
            <span className="gradient-text text-glow">About Me</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Passionate about turning data into actionable insights
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-strong rounded-2xl p-6 lg:p-8 card-gradient relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl overflow-hidden ring-2 ring-primary/30">
                  <img src={profileImg} alt="Kaushal" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    <span className="gradient-text">Kaushal Kumar</span>
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono">AIML Student & Developer</p>
                </div>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate B.Tech student specializing in Computer Science & Engineering 
                  with a focus on Artificial Intelligence and Machine Learning at Lamrin Tech Skills University, Uttar Pradesh.
                </p>
                <p>
                  My journey in technology is driven by curiosity and a desire to solve real-world 
                  problems through data-driven solutions. I specialize in building intelligent systems 
                  that can learn, adapt, and provide meaningful insights.
                </p>
                <p>
                  Currently, I'm focused on expanding my expertise in deep learning, natural language 
                  processing, and deploying machine learning models at scale.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '3+', label: 'Projects', icon: '🚀' },
                { value: '5+', label: 'Certifications', icon: '🏆' },
                { value: '2+', label: 'Years Learning', icon: '📚' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-strong rounded-xl p-4 text-center group hover:neon-glow transition-all duration-300"
                >
                  <div className="text-xl mb-1">{stat.icon}</div>
                  <div className="text-2xl lg:text-3xl font-heading font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {interests.map((interest, index) => (
              <motion.div
                key={interest.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.04, y: -6 }}
                className="glass-strong rounded-2xl p-5 group hover:neon-glow transition-all duration-300 cursor-default relative overflow-hidden"
              >
                {/* Corner accent */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors" />
                
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 group-hover:neon-glow transition-all duration-300">
                  <interest.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-1 text-sm">
                  {interest.label}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;