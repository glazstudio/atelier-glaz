import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('glaz-cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('glaz-cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 md:left-16 right-0 bg-glaz-dark/95 text-glaz-cream p-6 z-50 border-t border-glaz-sage flex flex-col md:flex-row items-center justify-between gap-4 shadow-none">
      <div className="text-sm font-lato max-w-3xl">
        <p>
          <strong>Respect de la vie privée :</strong> Ce site utilise un minimum de cookies pour assurer son bon fonctionnement. 
          Aucun traçage publicitaire intrusif. Juste de l'artisanat web. 
          <Link to="/legal" className="underline hover:text-glaz-beige ml-1">En savoir plus</Link>.
        </p>
      </div>
      <div className="flex gap-4">
        <button 
          onClick={handleAccept}
          className="bg-glaz-beige text-glaz-dark font-bold text-sm uppercase tracking-widest px-6 py-3 hover:bg-white transition-colors"
        >
          J'accepte
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;