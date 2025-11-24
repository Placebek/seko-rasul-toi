import { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const RSVP = ({ t }) => {
  const [formData, setFormData] = useState({ name: '', guests: '1', status: 'Келемін', wishes: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const message = `
<b>ЖАҢА ЖАУАП (React)</b> 🎉
👤 <b>Аты:</b> ${formData.name}
👥 <b>Адам саны:</b> ${formData.guests}
✅ <b>Шешім:</b> ${formData.status}
💌 <b>Тілек:</b> ${formData.wishes || '-'}
    `;

    try {
      await fetch(`https://api.telegram.org/bot7216247878:AAEutcYCx7tpw_TLFTdvqkxLSNEf1ZOIE5o/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: '-5093910671',
          text: message,
          parse_mode: 'HTML'
        })
      });
      
      setIsSent(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#58111A', '#FFFFFF']
      });

    } catch (error) {
      alert('Ошибка! Қайта көріңіз.');
    } finally {
      setIsSending(false);
    }
  };

  if (isSent) {
    return (
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="py-20 px-6 text-center bg-white m-4 rounded-xl shadow-lg border border-kz-gold"
      >
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-serif text-2xl text-kz-blue mb-2">{t.thankYou}</h3>
      </motion.div>
    );
  }

  return (
    <section className="py-10 px-4 bg-white/50 backdrop-blur-sm">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="bg-white p-6 rounded-xl shadow-xl border-t-4 border-kz-gold"
      >
        <h2 className="font-serif text-2xl text-kz-blue text-center mb-6">{t.formTitle}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">{t.nameLabel}</label>
            <input 
              name="name" required 
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-kz-gold transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">{t.countLabel}</label>
            <select name="guests" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg bg-white">
              {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
              <option value="6+">6+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">{t.statusLabel}</label>
            <div className="flex flex-col gap-2">
              {['Келемін', 'Келе алмаймын'].map((val, idx) => (
                <label key={val} className="flex items-center p-3 border rounded-lg cursor-pointer has-[:checked]:border-kz-gold has-[:checked]:bg-kz-gold/5 transition-all">
                  <input 
                    type="radio" name="status" value={val} 
                    defaultChecked={idx === 0}
                    onChange={handleChange}
                    className="w-5 h-5 accent-kz-gold mr-3"
                  />
                  <span className="text-sm">{idx === 0 ? t.yes : t.no}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">{t.wishes}</label>
            <textarea name="wishes" rows="2" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:border-kz-gold outline-none"></textarea>
          </div>

          <motion.button 
            whileTap={{ scale: 0.95 }}
            disabled={isSending}
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-kz-gold to-[#B8860B] text-white font-bold rounded-full shadow-lg shadow-kz-gold/40 text-lg uppercase tracking-wide disabled:opacity-70"
          >
            {isSending ? t.sending : t.send}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default RSVP;