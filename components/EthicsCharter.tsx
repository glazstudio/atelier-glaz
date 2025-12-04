import React from 'react';
import { ShieldCheck } from 'lucide-react';

const EthicsCharter: React.FC = () => {
  return (
    <div className="bg-glaz-grey/30 border border-glaz-dark/10 p-8 md:p-12 my-12">
      <div className="flex items-start gap-6">
        <div className="bg-glaz-dark text-glaz-cream p-4 shrink-0 hidden md:block">
          <ShieldCheck size={32} />
        </div>
        <div>
          <h3 className="font-gotu text-2xl text-glaz-dark mb-4">Charte Éthique & Transparence IA</h3>
          <div className="font-lato text-gray-700 space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              À l'Atelier Glaz, l'Intelligence Artificielle est un outil, pas une finalité. Je m'engage à :
            </p>
            <ul className="list-disc list-inside space-y-2 marker:text-glaz-sage">
              <li><strong>Ne jamais générer de deepfakes</strong> ou d'images de personnes réelles sans leur consentement explicite.</li>
              <li><strong>Retoucher chaque génération</strong> manuellement. Aucune image brute ne sort de l'atelier.</li>
              <li><strong>Vérifier les sources</strong> et l'exactitude des contenus textuels générés.</li>
              <li><strong>Céder les droits commerciaux</strong> sur les créations livrées (selon CGV).</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EthicsCharter;