import React from 'react';
import { CheckCircle } from 'lucide-react';

const TIMELINE_STEPS = [
  {
    date: 'J-0',
    title: 'Brief & Immersion',
    description: 'Rencontre avec le client, analyse des besoins et définition de la direction artistique.'
  },
  {
    date: 'J-3',
    title: 'Recherches & Pistes',
    description: 'Exploration créative, moodboards et premiers tests de prompts IA.'
  },
  {
    date: 'J-7',
    title: 'Création & Itération',
    description: 'Production des assets, retouches manuelles et allers-retours de validation.'
  },
  {
    date: 'J-15',
    title: 'Livraison Finale',
    description: 'Export des fichiers HD, mise en ligne et formation à la prise en main.'
  }
];

const Timeline: React.FC = () => {
  return (
    <div className="relative border-l-2 border-glaz-sage/30 ml-4 md:ml-8 my-12">
      {TIMELINE_STEPS.map((step, index) => (
        <div key={index} className="mb-12 ml-6 md:ml-12 relative">
          <div className="absolute -left-[2.1rem] md:-left-[3.6rem] top-1 bg-glaz-cream p-1">
            <CheckCircle size={20} className="text-glaz-sage" fill="currentColor" fillOpacity={0.2} />
          </div>
          <span className="inline-block bg-glaz-dark text-glaz-cream text-xs font-bold px-2 py-1 mb-2">
            {step.date}
          </span>
          <h3 className="font-gotu text-xl text-glaz-dark mb-2">{step.title}</h3>
          <p className="font-lato text-gray-600 leading-relaxed max-w-lg">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;