import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Kaushal1805', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/kaushal-kumar-a61a91262', label: 'LinkedIn' },
  { 
    customSvg: true,
    href: 'https://medium.com/@kaushalgangwar7088', 
    label: 'Medium' 
  },
  { icon: Twitter, href: 'https://x.com/Kaushal182005', label: 'X' },
];

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative py-16 border-t border-border/30">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      <div className="absolute inset-0 hex-accent opacity-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.a
            href="#home"
            className="font-heading text-4xl font-bold gradient-text-shimmer"
            whileHover={{ scale: 1.1 }}
          >
            KK
          </motion.a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Blogs', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors underline-animation font-mono"
              >
                {item}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1B583hwoA3_o3OGl-PTyR-TOlmfUgsOPU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline transition-colors font-mono font-semibold"
            >
              Resume ↗
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.15 }}
                className="p-2.5 rounded-xl glass-strong hover:neon-glow transition-all duration-300 flex items-center justify-center group"
                title={social.label}
              >
                {social.customSvg ? (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                ) : (
                  social.icon && <social.icon className="w-5 h-5 text-primary" />
                )}
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="section-divider" />

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1 font-mono text-xs">
              <span>© 2025 Kaushal Kumar</span>
              <span className="typing-cursor" />
            </div>
            
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-destructive fill-destructive animate-pulse" />
              <span>&</span>
              <span className="text-primary font-mono">Code</span>
            </div>

            <div className="font-mono text-xs text-primary/70">
              {time.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                second: '2-digit',
                hour12: true 
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;