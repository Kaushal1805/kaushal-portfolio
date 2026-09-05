import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Loader2, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Kaushal1805', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/kaushal-kumar-a61a91262', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/Kaushal182005', label: 'X (Twitter)' },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [honeypot, setHoneypot] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/mzzplplz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formState,
          _replyto: formState.email,
          _subject: `Portfolio Contact: ${formState.subject}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="aurora-blob w-[400px] h-[400px] bg-primary bottom-0 left-0" />
      
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
            REACH OUT
          </motion.span>
          <h2 className="section-title">
            <span className="gradient-text text-glow">Get In Touch</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Have a project in mind? Let's work together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">
                Let's <span className="gradient-text">Connect</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new projects, creative ideas, 
                or opportunities to be part of your vision. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href="mailto:kaushalgangwar7088@gmail.com"
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 p-4 glass-strong rounded-xl hover:neon-glow transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:neon-glow transition-all">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground font-mono">Email</p>
                  <p className="text-foreground font-medium text-sm">kaushalgangwar7088@gmail.com</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/1B583hwoA3_o3OGl-PTyR-TOlmfUgsOPU/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 p-4 glass-strong rounded-xl hover:neon-glow transition-all group border border-primary/30"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:neon-glow transition-all">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground font-mono">Curriculum Vitae</p>
                  <p className="text-foreground font-medium text-sm flex items-center gap-1.5">
                    <span>View / Download Resume</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-mono">PDF</span>
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 p-4 glass-strong rounded-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono">Location</p>
                  <p className="text-foreground font-medium text-sm">Uttar Pradesh, India</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-mono text-muted-foreground mb-4">
                Connect on Social & Writing
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2.5 glass-strong rounded-xl hover:neon-glow transition-all"
                  >
                    <social.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{social.label}</span>
                  </motion.a>
                ))}
                <motion.a
                  href="https://medium.com/@kaushalgangwar7088"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2.5 glass-strong rounded-xl hover:neon-glow transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                  <span className="text-sm font-medium">Medium</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-6 lg:p-8 space-y-5">
              <input
                type="text"
                name="_gotcha"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-muted-foreground">Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-input border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all text-foreground placeholder:text-muted-foreground text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-muted-foreground">Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-input border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all text-foreground placeholder:text-muted-foreground text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-muted-foreground">Subject</label>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-input border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all text-foreground placeholder:text-muted-foreground text-sm"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-muted-foreground">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-input border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none text-sm"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold transition-all hover:shadow-lg neon-glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
                {status === 'success' && <CheckCircle className="w-5 h-5" />}
                {status === 'error' && <AlertCircle className="w-5 h-5" />}
                {status === 'idle' && <Send className="w-5 h-5" />}
                {status === 'loading' && 'Sending...'}
                {status === 'success' && 'Message Sent!'}
                {status === 'error' && 'Failed - Try Again'}
                {status === 'idle' && 'Send Message'}
              </motion.button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-primary"
                >
                  Message sent — Kaushal Kumar will reply soon!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;