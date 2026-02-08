
import React, { useEffect, useRef } from 'react';

const BackgroundWaves: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const lines = 6;
      const step = canvas.height / (lines + 1);

      for (let i = 1; i <= lines; i++) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 + (i / lines) * 0.15})`;

        const yOffset = i * step;

        for (let x = 0; x < canvas.width; x += 5) {
          // Fourier-inspired multi-sine wave
          const baseWave = Math.sin(x * 0.002 + time + i) * 30;
          const secondHarmonic = Math.sin(x * 0.005 - time * 0.5) * 15;

          // Mouse ripple effect
          const dist = Math.sqrt(Math.pow(x - mouseRef.current.x, 2) + Math.pow(yOffset - mouseRef.current.y, 2));
          const ripple = Math.max(0, 100 - dist * 0.5) * Math.sin(dist * 0.05 - time * 5) * 0.5;

          const y = yOffset + baseWave + secondHarmonic + ripple;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-60 pointer-events-none" />;
};

export default BackgroundWaves;
