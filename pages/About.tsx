import React from 'react';
import SectionTitle from '../components/SectionTitle';
import SEO from '../components/SEO';
import { SITE_NAME } from '../constants';

const About: React.FC = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Artisan Glaz",
    "jobTitle": "Expert en Communication & IA",
    "worksFor": {
      "@type": "Organization",
      "name": SITE_NAME
    },
    "description": "Communicant hybride alliant savoir-faire artisanal et outils d'intelligence artificielle."
  };

  return (
    <div className="bg-glaz-cream min-h-screen py-24">
      <SEO 
        title="À Propos de l'Artisan"
        description="Qui est derrière Atelier Glaz ? Un communicant hybride alliant PAO traditionnelle et IA générative en Bretagne. Une approche humaine et sur-mesure."
        type="profile"
        schema={personSchema}
      />
      <div className="container mx-auto px-8 lg:px-16">
        <SectionTitle title="L'Artisan" subtitle="Derrière l'Atelier Glaz" />

        <div className="flex flex-col md:flex-row gap-16 items-start">
           {/* Portrait Placeholder */}
           <div className="w-full md:w-1/3 aspect-[3/4] bg-glaz-sage/20 border border-glaz-dark relative p-4">
              <div className="w-full h-full bg-glaz-dark flex items-center justify-center">
                 <span className="text-glaz-cream font-gotu text-lg">Portrait</span>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-glaz-sage"></div>
           </div>

           <div className="w-full md:w-2/3">
              <h3 className="font-gotu text-3xl text-glaz-dark mb-6">
                 Communicant hybride & Artisan numérique
              </h3>
              <div className="font-lato text-gray-700 leading-loose space-y-6 text-lg">
                 <p>
                    Bienvenue dans mon atelier. Je ne suis pas une agence, je ne suis pas une start-up. 
                    Je suis une micro-entreprise, ce qui signifie que lorsque vous appelez, c'est moi qui décroche. 
                    Lorsque vous envoyez un email, c'est moi qui réponds. Et lorsque le travail est fait, c'est moi qui l'ai réalisé.
                 </p>
                 <p>
                    Mon parcours est celui d'un passionné de l'image et du mot. J'ai commencé avec les outils traditionnels de la PAO, 
                    apprenant la rigueur de la typographie et l'importance de la colorimétrie.
                 </p>
                 <div className="p-8 bg-white border-l-4 border-glaz-sage my-8">
                    <p className="font-cormorant italic text-2xl text-glaz-dark">
                       "L'intelligence artificielle n'est pas une rupture, c'est un nouvel outil sur l'établi."
                    </p>
                 </div>
                 <p>
                    Aujourd'hui, j'intègre l'IA générative non pas pour aller plus vite, mais pour aller plus loin. 
                    Pour proposer à des artisans, des PME ou des particuliers des visuels et des musiques 
                    qui étaient auparavant inaccessibles sans des budgets colossaux.
                 </p>
                 <p>
                    Mon approche est celle de l'<strong>Atelier</strong> : du sur-mesure, des finitions soignées, 
                    pas de copier-coller industriel. Chaque projet est une pièce unique.
                 </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;