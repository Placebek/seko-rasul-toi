import { motion } from 'framer-motion';
import { MapPin, Phone, Navigation, ExternalLink } from 'lucide-react';

const MapSection = ({ t }) => {

  const MapButton = ({ href, icon: Icon, label }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      className="
        flex items-center justify-between w-full p-4
        rounded-xl border border-gray-200 bg-white
        shadow-sm hover:shadow-md transition-all
      "
    >
      <div className="flex items-center gap-3">
        <Icon size={22} className="text-kz-blue" />
        <span className="font-semibold">{label}</span>
      </div>
      <ExternalLink size={18} className="text-gray-400" />
    </motion.a>
  );

  return (
    <section className="py-14 px-6 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-sm mx-auto"
      >
        <div className="mb-7">
          <div className="inline-flex items-center justify-center w-12 h-12 
           rounded-full bg-kz-blue/10 text-kz-blue mb-3">
            <MapPin size={26} />
          </div>

          <h2 className="text-2xl font-bold text-kz-blue">{t.mapTitle}</h2>

          <p className="text-kz-burgundy font-medium">{t.place}</p>
          <p className="text-xs text-gray-500 mt-1">Теміртау</p>
        </div>

        <div className="flex flex-col gap-4">
          <MapButton 
            href="https://go.2gis.com/YG9wz"
            icon={Navigation}
            label="2GIS"
          />

          <MapButton 
            href="https://yandex.kz/maps/ru/-/CLWmFMZo"
            icon={Navigation}
            label="Яндекс Карта"
          />

          <motion.a 
            href="tel:+77773710739"
            whileTap={{ scale: 0.96 }}
            className="
              flex items-center justify-center gap-3 w-full py-4 
              bg-kz-blue text-white rounded-xl shadow-md 
              hover:shadow-lg transition-all
            "
          >
            <Phone size={20} className="text-kz-gold" />
            <span className="font-semibold">{t.call}</span>
          </motion.a>
        </div>

      </motion.div>
    </section>
  );
};

export default MapSection;
