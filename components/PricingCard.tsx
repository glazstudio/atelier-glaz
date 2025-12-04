import React from 'react';
import { Check } from 'lucide-react';
import { PricingPack } from '../types';

interface PricingCardProps {
  pack: PricingPack;
  onCtaClick: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ pack, onCtaClick }) => {
  return (
    <div className={`flex flex-col h-full border ${pack.recommended ? 'border-glaz-beige bg-glaz-dark text-glaz-cream' : 'border-glaz-grey bg-white text-glaz-dark'} p-8 relative transition-transform hover:-translate-y-1`}>
      {pack.recommended && (
        <div className="absolute top-0 right-0 bg-glaz-beige text-glaz-dark text-xs font-bold uppercase tracking-widest px-3 py-1">
          Recommandé
        </div>
      )}
      
      <h3 className="font-gotu text-2xl mb-2">{pack.title}</h3>
      <div className="font-lato font-bold text-3xl mb-4 text-glaz-sage">{pack.price}</div>
      <p className={`font-lato text-sm mb-8 leading-relaxed ${pack.recommended ? 'text-gray-300' : 'text-gray-600'}`}>
        {pack.description}
      </p>

      <ul className="space-y-4 mb-8 flex-grow">
        {pack.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm font-lato">
            <Check size={16} className={`flex-shrink-0 mt-0.5 ${pack.recommended ? 'text-glaz-beige' : 'text-glaz-sage'}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button 
        onClick={onCtaClick}
        className={`w-full py-4 font-bold uppercase tracking-widest text-sm transition-colors ${
          pack.recommended 
            ? 'bg-glaz-beige text-glaz-dark hover:bg-white' 
            : 'bg-glaz-dark text-glaz-cream hover:bg-glaz-sage'
        }`}
      >
        Choisir ce pack
      </button>
    </div>
  );
};

export default PricingCard;