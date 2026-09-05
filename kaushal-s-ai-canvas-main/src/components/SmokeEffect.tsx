import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SmokeParticle {
  id: number;
  x: number;
  y: number;
  scale: number;
  opacity: number;
  rotation: number;
}

const SmokeEffect = () => {
  const [particles, setParticles] = useState<SmokeParticle[]>([]);
  const [isEnabled, setIsEnabled] = useState(true);
  const lastScrollY = useRef(0);
  const particleId = useRef(0);
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [0, 500], [0, 0.15]);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsEnabled(false);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
      
      if (scrollDelta > 5 && isEnabled) {
        const newParticles: SmokeParticle[] = [];
        const count = Math.min(3, Math.floor(scrollDelta / 20));
        
        for (let i = 0; i < count; i++) {
          newParticles.push({
            id: particleId.current++,
            x: Math.random() * window.innerWidth,
            y: currentScrollY + Math.random() * window.innerHeight,
            scale: 0.5 + Math.random() * 1.5,
            opacity: 0.05 + Math.random() * 0.1,
            rotation: Math.random() * 360,
          });
        }
        
        setParticles(prev => [...prev.slice(-20), ...newParticles]);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isEnabled]);

  useEffect(() => {
    const cleanup = setInterval(() => {
      setParticles(prev => prev.slice(-15));
    }, 3000);
    return () => clearInterval(cleanup);
  }, []);

  if (!isEnabled) return null;

  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
      style={{ opacity }}
    >
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          initial={{ 
            x: particle.x, 
            y: particle.y,
            scale: particle.scale,
            opacity: particle.opacity,
            rotate: particle.rotation,
          }}
          animate={{ 
            y: particle.y - 150,
            scale: particle.scale * 2,
            opacity: 0,
            rotate: particle.rotation + 45,
          }}
          transition={{ 
            duration: 4, 
            ease: "easeOut" 
          }}
          style={{
            width: 100,
            height: 100,
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
      ))}
    </motion.div>
  );
};

export default SmokeEffect;
