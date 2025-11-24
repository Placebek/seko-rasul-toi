import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "https://massaget.kz/userdata/news/news_42683/image_l.jpg.webp", // Семья в традиционных казахских костюмах на празднике
  "https://aqmeshit-aptalygy.kz/wp-content/uploads/2023/08/s-ndet.jpg", // Невеста в национальной одежде с орнаментами
  "https://bastynews.kz/wp-content/uploads/2023/10/2021_05_25_otbasy-tarbie.jpg"  // Традиционный банкет с едой и гостями
];

const Hero = ({ t }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-screen relative flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Слайдер */}
      <div className="absolute inset-0">
        <AnimatePresence mode='wait'>
          <motion.img
            key={index}
            src={images[index]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full object-cover absolute inset-0"
          />
        </AnimatePresence>
        {/* Градиент затемнения */}
        <div className="absolute inset-0 bg-gradient-to-b from-kz-blue/50 via-kz-blue/20 to-kz-beige mix-blend-multiply"></div>
      </div>

      {/* Контент */}
      <div className="relative z-10 w-full max-w-sm">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl"
        >
           {/* Декоративная линия */}
          <div className="w-16 h-1 bg-kz-gold mx-auto mb-6 rounded-full"></div>
         
          <h1 className="font-serif text-3xl text-white font-bold mb-4 leading-tight drop-shadow-md">
            {t.heroTitle}
          </h1>
          <div className="text-kz-gold-light text-sm font-medium tracking-widest uppercase space-y-2">
            <p className="border-b border-white/20 pb-2 inline-block">{t.date}</p>
            <p className="text-white text-lg">{t.time}</p>
            <p>{t.place}</p>
          </div>
        </motion.div>
      </div>

      {/* Скролл индикатор */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 text-white flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest opacity-80">Төмен сырғытыңыз</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;