import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-glaz-cream text-center px-4">
      <SEO title="Page Introuvable" description="Erreur 404 - Cette page n'existe pas." />
      
      <h1 className="font-gotu text-9xl text-glaz-sage/20 mb-4">404</h1>
      <h2 className="font-gotu text-3xl text-glaz-dark mb-6">Page à l'état d'ébauche...</h2>
      <p className="font-lato text-gray-600 max-w-md mb-10 leading-relaxed">
        Il semblerait que vous cherchiez un projet qui n'est pas encore sorti de l'atelier. 
        Revenez vers la lumière.
      </p>
      
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 bg-glaz-dark text-glaz-cream px-8 py-4 font-lato font-bold hover:bg-glaz-sage transition-colors"
      >
        <ArrowLeft size={18} /> Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;