import { motion } from 'framer-motion';
import { useState } from 'react';
import confetti from 'canvas-confetti';

const Welcome = ({ t }) => {
  const [bataCount, setBataCount] = useState(128);
  const [hasBlessed, setHasBlessed] = useState(false);

  const throwShashu = () => {
    if (navigator.vibrate) navigator.vibrate(200);
    const end = Date.now() + 1000;
    const colors = ['#D4AF37', '#bb0000', '#ffffff'];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  const handleBata = () => {
    if (!hasBlessed) {
      setBataCount(prev => prev + 1);
      setHasBlessed(true);
      throwShashu();
    }
  };

  // ---------------------- АНИМАЦИОННЫЕ ВАРИАНТЫ ----------------------

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  const fade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  const scaleSpring = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 120, damping: 14 }
    }
  };

  // ---------------------- JSX ----------------------

  return (
    <section className="py-20 px-6 text-center relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Декоративный знак ❖ */}
        <motion.div
          variants={fadeUp}
          className="text-4xl text-kz-gold mb-4"
        >
          ❖
        </motion.div>

        {/* Заголовок */}
        <motion.h2
          variants={fadeUp}
          className="font-serif text-3xl text-kz-blue font-bold mb-6"
        >
          {t.welcomeTitle}
        </motion.h2>

        {/* Текст */}
        <motion.p
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="text-gray-600 leading-relaxed mb-8 text-lg font-light"
        >
          {t.welcomeText}
        </motion.p>

        {/* Кнопка БАТА */}
        <motion.button
          variants={scaleSpring}
          whileHover={{ scale: 1.04, rotate: -1 }}
          whileTap={{ scale: 0.92 }}
          onClick={handleBata}
          className={`flex items-center justify-center gap-3 mx-auto px-8 py-3 rounded-full shadow-lg transition-all ${
            hasBlessed
              ? 'bg-green-100 text-green-700 border border-green-300'
              : 'bg-white text-kz-gold border border-kz-gold'
          }`}
        >
          <span className="text-2xl">{hasBlessed ? '🤲' : '🙌'}</span>

          <div className="text-left">
            <div className="text-xs uppercase font-bold tracking-wider opacity-60">
              {hasBlessed ? 'Қабыл болсын!' : 'Бата беру'}
            </div>
            <div className="font-bold text-sm">
              {bataCount} адам бата берді
            </div>
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Welcome;
