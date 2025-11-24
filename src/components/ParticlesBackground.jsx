// src/components/ParticlesBackground.jsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ParticlesBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Генерируем 15 случайных частиц
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // Позиция по горизонтали %
      y: Math.random() * 100, // Позиция по вертикали %
      size: Math.random() * 3 + 1, // Размер от 1 до 4px
      duration: Math.random() * 10 + 10, // Скорость
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-kz-gold/40 blur-[1px]"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
          }}
          initial={{ top: "110%" }}
          animate={{ top: "-10%" }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;