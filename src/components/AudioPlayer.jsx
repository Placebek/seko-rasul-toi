// src/components/AudioPlayer.jsx
import { useState, useRef, useEffect } from 'react';
import { Music, Pause } from 'lucide-react';
import { motion } from 'framer-motion';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(null); // Для отладки ошибок

  // Новая ссылка: MP3 версия Адай (Курмангазы) — CORS-friendly, универсальный формат
  const audioUrl = 'public/audio/Тұсау+кесер.mp3'; // Тестовый звук (замени на реальный ниже)
  // Реальная казахская: 'https://archive.org/download/KurmangazyAdai/Kurmangazy%20-%20Adai.mp3' (если archive.org работает; проверь)
  // Альтернатива: 'https://www.bensound.com/bensound-music/bensound-slow-motion.mp3' (фолк-стиль, бесплатный)

  const audioRef = useRef(new Audio(audioUrl));

  const togglePlay = async () => {
    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Ждём разрешения пользователя (фикс autoplay)
        await audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
      setError(null); // Очищаем ошибки при успехе
    } catch (err) {
      console.error('Audio play error:', err);
      setError('Не удалось проиграть аудио. Проверьте соединение или политику браузера.');
    }
  };

  useEffect(() => {
  const audio = audioRef.current;
  audio.loop = true;

  // Ждём пока браузер узнает длительность, чтобы корректно применить currentTime
  const setStartTime = () => {
    try {
      audio.currentTime = 15; // начинаем с 10 секунды
    } catch (e) {
      console.error('Error setting start time:', e);
    }
  };

  audio.addEventListener('loadedmetadata', setStartTime);

  // Автостарт при первом взаимодействии
  const startOnFirstInteraction = () => {
    audio.play().then(() => {
      setIsPlaying(true);
      window.removeEventListener('click', startOnFirstInteraction);
    }).catch(err => console.error('Autoplay blocked:', err));
  };

  window.addEventListener('click', startOnFirstInteraction);

  return () => {
    window.removeEventListener('click', startOnFirstInteraction);
    audio.removeEventListener('loadedmetadata', setStartTime);
  };
}, []);



  return (
    <>
      <motion.button
        onClick={togglePlay}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={`fixed top-5 left-5 z-50 w-12 h-12 rounded-full flex items-center justify-center border border-kz-gold shadow-xl backdrop-blur-md transition-all duration-500 ${
          isPlaying ? 'bg-kz-gold text-white' : 'bg-white/20 text-kz-gold'
        }`}
        title={error || (isPlaying ? 'Пауза' : 'Включить музыку')}
      >
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
        >
          {isPlaying ? <Pause size={20} /> : <Music size={20} />}
        </motion.div>
        {/* Визуальные волны при игре */}
        {isPlaying && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-kz-gold opacity-30 animate-ping" />
        )}
      </motion.button>

      {/* Отображение ошибки (опционально, для дебага) */}
      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed top-20 left-5 z-50 bg-red-500 text-white px-4 py-2 rounded text-xs max-w-xs"
        >
          {error}
        </motion.div>
      )}
    </>
  );
};

export default AudioPlayer;