import { motion } from 'framer-motion';

const FamilyTree = ({ t }) => {

  // Универсальный, но с разными вариантами появления
  const Card = ({ title, names, delay, direction = 'up' }) => {
    const variants = {
      up:    { y: 30, opacity: 0 },
      down:  { y: -30, opacity: 0 },
      left:  { x: -30, opacity: 0 },
      right: { x: 30, opacity: 0 }
    };

    const animate = { x: 0, y: 0, opacity: 1 };

    return (
      <motion.div
        initial={variants[direction]}
        whileInView={animate}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6, ease: 'easeOut' }}
        className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-kz-gold/30 shadow-sm text-center w-full max-w-[200px]"
      >
        <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">
          {title}
        </div>
        <div className="font-serif text-kz-blue font-bold text-lg leading-tight">
          {names}
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-16 px-4 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-kz-beige via-white to-kz-beige opacity-90"></div>

      <div className="relative z-10 flex flex-col items-center gap-6">

        {/* Заголовок — мягкое появление */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-serif text-2xl text-kz-gold font-bold mb-4"
        >
          ❖ {t.familyTitle} ❖
        </motion.h2>

        {/* Ата-Әже — выплывают сверху */}
        <Card 
          title={t.grandparentsRole}
          names={t.grandparentsNames}
          delay={0.1}
          direction="down"
        />

        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="h-6 w-0.5 bg-kz-gold/50 origin-top"
        />

        {/* Ата-ана — идут слева */}
        <Card 
          title={t.parentsRole}
          names={t.parentsNames}
          delay={0.2}
          direction="left"
        />

        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="h-6 w-0.5 bg-kz-gold/50 origin-top"
        />

        {/* Дети — один справа, один слева */}
        <div className="flex gap-4">
          <Card 
            title="Батыр"
            names="Сейтқазы"
            delay={0.3}
            direction="right"
          />
          <Card 
            title="Батыр"
            names="Расул"
            delay={0.35}
            direction="left"
          />
        </div>
      </div>
    </section>
  );
};

export default FamilyTree;
