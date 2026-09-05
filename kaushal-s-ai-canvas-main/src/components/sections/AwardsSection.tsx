import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Download, X, Calendar, Building } from 'lucide-react';
import certOracle from '@/assets/cert-oracle.png';
import certPython from '@/assets/cert-python.png';
import certFullstack from '@/assets/cert-fullstack.png';

interface AwardItem {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  image: string;
  instructor?: string;
  platform?: string;
  credentialUrl?: string;
}

const awards: AwardItem[] = [
  {
    id: 1,
    title: 'Oracle Certified Foundations Associate – AI Foundations',
    issuer: 'Oracle University',
    date: 'Aug 2025',
    description: 'Recognized by Oracle Corporation for foundational knowledge in Artificial Intelligence and Oracle Cloud Infrastructure.',
    skills: ['AI Fundamentals', 'Machine Learning Basics', 'Oracle Cloud Infrastructure', 'Cloud AI Services'],
    image: certOracle,
    credentialUrl: 'https://drive.google.com/file/d/11Asvh-1zn43Z1DBOjWEglxSo62AmcwiB/view?usp=drive_link',
  },
  {
    id: 2,
    title: '100 Days of Code: The Complete Python Pro Bootcamp',
    issuer: 'Udemy',
    date: '2024',
    description: 'Comprehensive hands-on program focused on building strong Python programming fundamentals through daily coding challenges.',
    skills: ['Python Programming', 'Data Structures', 'OOP', 'APIs', 'Automation'],
    image: certPython,
    instructor: 'Dr. Angela Yu',
    platform: 'Udemy',
    credentialUrl: 'https://drive.google.com/file/d/1ZW02w3xzxz1uU2XWGt6lXX-oNHQ3yQld/view?usp=drive_link',
  },
  {
    id: 3,
    title: 'The Complete Full-Stack Web Development Bootcamp',
    issuer: 'Udemy',
    date: 'Jun 2025',
    description: 'Intensive hands-on program covering modern front-end and back-end web development with real-world projects.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Front-End Development', 'Responsive Design'],
    image: certFullstack,
    instructor: 'Dr. Angela Yu',
    platform: 'Udemy',
    credentialUrl: 'https://drive.google.com/file/d/1AzzPenZ1NYQOp0Dzsk125cCL17Kjn_2f/view?usp=drive_link',
  },
];

const AwardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);

  return (
    <section id="awards" ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
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
            ACHIEVEMENTS
          </motion.span>
          <h2 className="section-title">
            <span className="gradient-text text-glow">Awards & Certifications</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Recognition and professional development achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedAward(award)}
              className="group cursor-pointer"
            >
              <div className="glass-strong rounded-2xl overflow-hidden card-gradient h-full flex flex-col">
                <div className="relative h-44 overflow-hidden">
                  <img src={award.image} alt={award.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full glass-strong text-primary text-xs font-mono">
                    {award.date}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-base font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                    {award.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-primary" />
                    {award.issuer}
                  </p>
                  <p className="text-xs text-muted-foreground mb-4 line-clamp-2 flex-1 leading-relaxed">
                    {award.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {award.skills.slice(0, 3).map((skill) => (
                      <span key={skill} className="skill-badge text-[10px] px-2 py-1">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Award Modal */}
      {selectedAward && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedAward(null)}
        >
          <div className="absolute inset-0 bg-background/85 backdrop-blur-2xl" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative glass-strong rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto neon-glow"
          >
            <button
              onClick={() => setSelectedAward(null)}
              className="absolute top-4 right-4 p-2 rounded-full glass-strong hover:bg-primary/20 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-56 relative overflow-hidden">
              <img src={selectedAward.image} alt={selectedAward.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            </div>

            <div className="p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground font-mono">{selectedAward.date}</span>
              </div>

              <h3 className="text-2xl font-heading font-bold mb-2 gradient-text">
                {selectedAward.title}
              </h3>
              
              <p className="text-primary font-medium mb-4 text-sm">
                {selectedAward.issuer}
              </p>

              {selectedAward.instructor && (
                <p className="text-sm text-muted-foreground mb-2">
                  Instructor: <span className="text-foreground">{selectedAward.instructor}</span>
                </p>
              )}

              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                {selectedAward.description}
              </p>

              <h4 className="text-sm font-mono text-muted-foreground mb-3">
                Skills Covered
              </h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedAward.skills.map((skill) => (
                  <span key={skill} className="skill-badge text-xs">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                {selectedAward.credentialUrl && (
                  <>
                    <a
                      href={selectedAward.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </a>
                    <a
                      href={selectedAward.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground transition-colors text-sm font-medium"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </a>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default AwardsSection;