import React, { useState } from 'react';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import RSVP from './components/RSVP';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import ParticlesBackground from './components/ParticlesBackground';
import { translations } from './utils/translations';
import Timeline from './components/Timeline';
import FamilyTree from './components/FamilyTree';

function App() {
  const [lang, setLang] = useState('kz');
  const t = translations[lang];

  const toggleLang = () => setLang(prev => prev === 'kz' ? 'ru' : 'kz');

  return (
    <div className="min-h-screen flex justify-center bg-gray-900">
      <div className="w-full max-w-[480px] bg-kz-beige relative shadow-2xl min-h-screen font-sans">
        
        {/* === ГЛОБАЛЬНЫЕ ЭЛЕМЕНТЫ === */}
        <ParticlesBackground />
        <AudioPlayer />
        
        {/* Кнопка языка */}
        <button 
          onClick={toggleLang}
          className="fixed top-5 right-5 z-50 w-12 h-12 rounded-full border border-kz-gold bg-white/10 backdrop-blur-md text-white font-serif font-bold shadow-lg active:scale-95 transition-transform"
        >
          {lang === 'kz' ? 'RU' : 'KZ'}
        </button>

        {/* Фоновый орнамент (статика) */}
        <div className="fixed inset-0 bg-ornament opacity-[0.03] pointer-events-none z-0 mix-blend-multiply bg-repeat"></div>

        {/* === КОНТЕНТ === */}
        <main className="relative z-10">
  <Hero t={t} />
  
  <div className="bg-gradient-to-b from-kz-beige via-white to-kz-beige">
    <Welcome t={t} />
    
    {/* СЕМЬЯ */}
    <FamilyTree t={t} />

    {/* Разделитель (фото) */}
    <div className="h-48 bg-fixed bg-center bg-cover my-6 relative" style={{backgroundImage: "url('public/img/restaurant.png')"}}>
        <div className="absolute inset-0 bg-black/30"></div>
    </div>

    {/* ПРОГРАММА */}
    <Timeline t={t} />

    {/* ФОРМА */}
    <RSVP t={t} />
    
    <MapSection t={t} />
  </div>
  
  <Footer t={t} />
</main>
      </div>
    </div>
  );
}

export default App;