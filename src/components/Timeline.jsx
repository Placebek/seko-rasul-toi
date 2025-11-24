import { motion } from 'framer-motion';
import { Clock, Scissors, Star, Utensils, Music } from 'lucide-react';

const events = [
  { time: '14:00', icon: <Clock />, key: 'eventGather' },
  { time: '15:00', icon: <Scissors />, key: 'eventTusau' }, // Тұсаукесер
  { time: '15:30', icon: <Star />, key: 'eventSundet' },    // Сүндет той (выход)
  { time: '17:00', icon: <Utensils />, key: 'eventMeat' },  // Бешбармак
  { time: '19:00', icon: <Music />, key: 'eventParty' },    // Тәтті шай & Би
];

const Timeline = ({ t }) => {
  return (
    <section className="py-16 px-6 bg-white relative overflow-hidden">
      {/* Фоновый орнамент */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-kz-gold/10 rounded-full blur-2xl"></div>

      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="font-serif text-3xl text-kz-burgundy font-bold mb-2">{t.programTitle}</h2>
        <div className="h-1 w-20 bg-kz-gold mx-auto rounded-full"></div>
      </motion.div>

      <div className="relative max-w-sm mx-auto">
        {/* Вертикальная линия */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-kz-gold/20 via-kz-gold to-kz-gold/20"></div>

        <div className="space-y-8">
          {events.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative flex items-center gap-6"
            >
              {/* Иконка */}
              <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-kz-beige border-2 border-kz-gold flex items-center justify-center text-kz-blue shadow-lg">
                {event.icon}
              </div>

              {/* Текст */}
              <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 flex-grow hover:border-kz-gold/50 transition-colors">
                <span className="block text-kz-gold font-bold text-lg font-serif">{event.time}</span>
                <span className="text-gray-700 font-medium">{t[event.key]}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;