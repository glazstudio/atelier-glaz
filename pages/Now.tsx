import React from 'react';
import { SITE_URL } from '../constants';
import SectionTitle from '../components/SectionTitle';
import SEO from '../components/SEO';
import { Clock, MapPin, Activity } from 'lucide-react';
import { useData } from '../hooks/useData';

const Now: React.FC = () => {
  const { now, loading } = useData();

  return (
    <div className="bg-glaz-cream min-h-screen py-24">
      <SEO 
        title="Maintenant à l'Atelier (/now)"
        description="Ce que fait l'Artisan Glaz en ce moment. Projets en cours, lectures, écoutes et disponibilités."
        canonical={`${SITE_URL}/now`}
      />
      <div className="container mx-auto px-8 lg:px-16 max-w-4xl">
        <SectionTitle title="/Now" subtitle="L'instant T à l'Atelier" />

        <div className="mb-12 font-lato text-gray-600 italic">
          <p>
            Inspiré par le mouvement <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="underline hover:text-glaz-sage">/now</a> de Derek Sivers. 
            Ceci n'est pas un flux social, mais un point d'étape mensuel sur la vie de l'atelier.
          </p>
        </div>

        {/* Status Card */}
        <div className="bg-white border border-glaz-grey p-8 mb-16 shadow-sm">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-glaz-grey pb-8">
              <div className="flex items-center gap-3">
                 <Clock size={20} className="text-glaz-sage" />
                 <div>
                    <h3 className="font-gotu text-sm font-bold uppercase tracking-widest text-glaz-dark">Dernière mise à jour</h3>
                    <p className="font-lato text-gray-600">{now.lastUpdated}</p>
                 </div>
              </div>
              <div className="flex items-center gap-3">
                 <MapPin size={20} className="text-glaz-sage" />
                 <div>
                    <h3 className="font-gotu text-sm font-bold uppercase tracking-widest text-glaz-dark">Localisation</h3>
                    <p className="font-lato text-gray-600">{now.location}</p>
                 </div>
              </div>
              <div className="flex items-center gap-3">
                 <Activity size={20} className={now.availability === 'available' ? 'text-green-600' : 'text-orange-500'} />
                 <div>
                    <h3 className="font-gotu text-sm font-bold uppercase tracking-widest text-glaz-dark">Disponibilité</h3>
                    <p className="font-lato text-gray-600">{now.status}</p>
                 </div>
              </div>
           </div>

           {/* Items List */}
           <div className="space-y-12">
              {now.items.map((item, idx) => (
                 <div key={idx} className="flex flex-col md:flex-row gap-4 md:gap-12 group">
                    <div className="md:w-1/4">
                       <h4 className="font-gotu text-xl text-glaz-sage group-hover:text-glaz-dark transition-colors">{item.category}</h4>
                    </div>
                    <div className="md:w-3/4">
                       <p className="font-cormorant text-2xl text-glaz-dark mb-2">
                          {item.content}
                       </p>
                       {item.details && (
                          <p className="font-lato text-gray-600 leading-relaxed">
                             {item.details}
                          </p>
                       )}
                    </div>
                 </div>
              ))}
           </div>
        </div>

        <div className="text-center font-lato text-sm text-gray-400">
           <p>Si mes activités du moment résonnent avec vos besoins, n'hésitez pas à me contacter.</p>
        </div>
      </div>
    </div>
  );
};

export default Now;
