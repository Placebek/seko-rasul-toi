import { motion } from 'framer-motion';

const FamilyTree = ({ t }) => {
  // Компонент карточки
  const Card = ({ title, names, delay }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-kz-gold/30 shadow-sm text-center w-full max-w-[200px]"
    >
      <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">{title}</div>
      <div className="font-serif text-kz-blue font-bold text-lg leading-tight">{names}</div>
    </motion.div>
  );

  return (
    <section className="py-16 px-4 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-kz-beige via-white to-kz-beige opacity-90"></div>
      
      <div className="relative z-10 flex flex-col items-center gap-6">
        <h2 className="font-serif text-2xl text-kz-gold font-bold mb-4">❖ {t.familyTitle} ❖</h2>

        {/* Ата-Әже (Самые уважаемые) */}
        <Card title={t.grandparentsRole} names={t.grandparentsNames} delay={0.1} />
        
        {/* Линия соединения */}
        <div className="h-6 w-0.5 bg-kz-gold/50"></div>

        {/* Ата-ана (Родители) */}
        <Card title={t.parentsRole} names={t.parentsNames} delay={0.2} />

        {/* Линия соединения */}
        <div className="h-6 w-0.5 bg-kz-gold/50"></div>

        {/* Дети (Виновники торжества) */}
        <div className="flex gap-4">
            <Card title="Батыр" names="Сейтқазы" delay={0.3} />
            <Card title="Батыр" names="Расул" delay={0.4} />
        </div>
      </div>
    </section>
  );
};

export default FamilyTree;