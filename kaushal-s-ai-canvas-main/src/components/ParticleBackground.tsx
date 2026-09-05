import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  char?: string;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'.split('');

  const createParticle = useCallback((canvas: HTMLCanvasElement, isMatrix = false): Particle => {
    if (isMatrix) {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        vx: 0,
        vy: 0.5 + Math.random() * 1.5,
        size: 12 + Math.random() * 6,
        alpha: 0.1 + Math.random() * 0.3,
        char: matrixChars[Math.floor(Math.random() * matrixChars.length)],
      };
    }
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: 1 + Math.random() * 2,
      alpha: 0.1 + Math.random() * 0.4,
    };
  }, [matrixChars]);

  const initParticles = useCallback((canvas: HTMLCanvasElement) => {
    const particles: Particle[] = [];
    const particleCount = Math.min(60, Math.floor((canvas.width * canvas.height) / 20000));

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(canvas, false));
    }

    particlesRef.current = particles;
  }, [createParticle]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current.forEach((particle, index) => {
      if (particle.char) {
        // Matrix rain effect
        particle.y += particle.vy;
        if (particle.y > canvas.height) {
          particle.y = -20;
          particle.x = Math.random() * canvas.width;
          particle.char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        }

        ctx.font = `${particle.size}px "Roboto Mono", monospace`;
        ctx.fillStyle = `rgba(0, 240, 255, ${particle.alpha})`;
        ctx.fillText(particle.char, particle.x, particle.y);
      } else {
        // Floating particles
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          particle.vx -= (dx / dist) * force * 0.02;
          particle.vy -= (dy / dist) * force * 0.02;
        }

        // Damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Boundaries
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${particle.alpha})`;
        ctx.fill();

        // Draw connections
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (otherIndex <= index || otherParticle.char) return;
          const ox = otherParticle.x - particle.x;
          const oy = otherParticle.y - particle.y;
          const odist = Math.sqrt(ox * ox + oy * oy);

          if (odist < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.1 * (1 - odist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      }
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [matrixChars]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(canvas);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;
