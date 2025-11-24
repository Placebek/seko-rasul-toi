const Footer = ({ t }) => {
  return (
    <footer className="bg-kz-blue text-white py-8 text-center">
      <div className="font-serif text-xl text-kz-gold mb-2">{t.footer}</div>
      <div className="opacity-60 text-sm">
        +7 (777) 371-07-39 <br/>
        +7 (747) 705-42-71
      </div>
      <div className="mt-6 text-xs text-gray-500">
        Made with React & Жандарбек
      </div>
    </footer>
  );
};

export default Footer;