import React from 'react';
import { SITE_URL } from '../constants';
import SectionTitle from '../components/SectionTitle';
import SEO from '../components/SEO';
import { Layers } from 'lucide-react';
import { useData } from '../hooks/useData';

const Stack: React.FC = () => {
  const { stack, loading } = useData();

  return (
    <div className="bg-glaz-cream min-h-screen py-24">
      <SEO 
        title="La Stack de l'Atelier"
        description="Découvrez les outils matériels et logiciels utilisés par l'Atelier Glaz : Mac, Sony, Midjourney, Suno, Adobe..."
        canonical={`${SITE_URL}/stack`}
      />
      
      <div className="container mx-auto px-8 lg:px-16">
        <SectionTitle title="L'Établi Numérique" subtitle="Les outils font l'artisan" />
        
        <p className="font-lato text-xl text-gray-700 max-w-3xl mb-12 leading-relaxed">
           Un artisan est aussi bon que ses outils. Voici la liste transparente du matériel (Hardware) et des logiciels (Software) 
           qui me permettent de délivrer un travail de qualité, tous les jours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {stack.map((item, idx) => (
              <div key={idx} className="bg-white border border-glaz-grey p-8 flex flex-col gap-4 hover:border-glaz-sage transition-colors">
                 <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-bold uppercase tracking-widest px-2 py-1 ${
                       item.category === 'Hardware' ? 'bg-gray-200 text-gray-700' :
                       item.category === 'IA' ? 'bg-glaz-sage/20 text-glaz-sage' :
                       'bg-glaz-beige/30 text-glaz-dark'
                    }`}>
                       {item.category}
                    </span>
                    {item.icon && <item.icon size={20} className="text-gray-400" />}
                 </div>
                 <h3 className="font-gotu text-2xl text-glaz-dark">{item.name}</h3>
                 <p className="font-lato text-gray-600 text-sm leading-relaxed">
                    {item.description}
                 </p>
              </div>
           ))}
        </div>
        
        <div className="mt-16 p-8 bg-glaz-dark text-glaz-cream flex items-start gap-4">
           <Layers size={32} className="shrink-0 text-glaz-beige" />
           <div>
              <h4 className="font-gotu text-xl mb-2">Transparence totale</h4>
              <p className="font-lato text-sm text-gray-300">
                 Certains de ces liens peuvent être affiliés. Cela signifie que si vous achetez via ces liens, je touche une petite commission sans surcoût pour vous. 
                 Cela aide à faire tourner l'atelier.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
