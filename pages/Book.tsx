import React from 'react';
import SectionTitle from '../components/SectionTitle';
import SEO from '../components/SEO';
import AudioPlayer from '../components/AudioPlayer';
import { SITE_URL } from '../constants';
import { ShoppingCart, Star, BookOpen, Download, Check, AlertTriangle } from 'lucide-react';
import { useData } from '../hooks/useData';

const Book: React.FC = () => {
  const { audio, loading } = useData();

  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": "Maîtriser Suno AI : Composer avec l'intelligence artificielle",
    "author": {
      "@type": "Person",
      "name": "Atelier Glaz"
    },
    "url": `${SITE_URL}/book`,
    "description": "Le guide complet pour maîtriser la génération musicale avec Suno v3.",
    "format": "EBook"
  };

  return (
    <div className="min-h-screen bg-glaz-cream">
       <SEO 
         title="Livre Suno AI - Guide Complet"
         description="Découvrez comment maîtriser Suno AI pour la création musicale. Un livre complet par Atelier Glaz pour transformer vos prompts en symphonies."
         type="book"
         schema={bookSchema}
       />
       
       {/* Hero Section */}
       <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[90vh]">
          {/* Left: Image / Visual */}
          <div className="bg-glaz-sage/10 flex items-center justify-center p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-glaz-dark/10">
             <div className="bg-white p-4 shadow-none border border-glaz-grey max-w-md w-full aspect-[2/3] flex flex-col items-center justify-center text-center relative transform hover:scale-105 transition-transform duration-500">
                {/* Mockup of a book cover */}
                <div className="absolute inset-4 border border-glaz-dark/10 flex flex-col items-center justify-center bg-glaz-dark text-glaz-cream p-8">
                   <div className="mb-8 opacity-50"><BookOpen size={48} strokeWidth={1} /></div>
                   <h1 className="font-gotu text-4xl mb-2">MAÎTRISER<br/>SUNO AI</h1>
                   <p className="font-cormorant italic text-xl mb-8 text-glaz-beige">Composer avec l'intelligence artificielle</p>
                   <p className="font-lato text-sm tracking-widest uppercase mt-auto">Atelier Glaz Editions</p>
                </div>
             </div>
          </div>

          {/* Right: Content */}
          <div className="p-12 lg:p-24 flex flex-col justify-center bg-white">
             <span className="font-lato font-bold text-glaz-sage uppercase tracking-widest mb-4 flex items-center gap-2">
                <Star size={16} fill="currentColor" /> Best-Seller Atelier
             </span>
             <h1 className="font-gotu text-5xl md:text-6xl text-glaz-dark mb-6">
                Le Guide Complet Suno v3
             </h1>
             <p className="font-cormorant text-2xl text-gray-600 mb-8 italic">
                "Comment transformer une idée abstraite en une symphonie concrète grâce à l'IA."
             </p>
             
             <div className="font-lato text-gray-700 leading-relaxed space-y-4 mb-10 max-w-xl">
               <p>
                 L'IA générative musicale a ouvert des portes jusqu'alors fermées aux non-musiciens. 
                 Dans cet ouvrage, je décortique l'outil <strong>Suno</strong> pour vous apprendre à prompter comme un chef d'orchestre.
               </p>
               <ul className="space-y-3 pt-4 text-glaz-dark">
                 <li className="flex items-center gap-3"><Check size={18} className="text-glaz-sage"/> Structure des prompts musicaux (Metatags)</li>
                 <li className="flex items-center gap-3"><Check size={18} className="text-glaz-sage"/> Gestion des styles et des genres</li>
                 <li className="flex items-center gap-3"><Check size={18} className="text-glaz-sage"/> Écriture de paroles optimisées pour l'IA</li>
                 <li className="flex items-center gap-3"><Check size={18} className="text-glaz-sage"/> Cas d'usages pour les créatifs</li>
               </ul>
             </div>

             <div className="flex flex-col sm:flex-row gap-4">
               <a 
                 href="#" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center justify-center gap-3 bg-[#FF9900] text-white px-8 py-4 font-lato font-bold hover:bg-[#E68A00] transition-colors"
                 aria-label="Acheter la version papier sur Amazon"
               >
                 <ShoppingCart size={20} /> Acheter version Papier
               </a>
               <a 
                 href="#" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center justify-center gap-3 bg-glaz-dark text-glaz-cream px-8 py-4 font-lato font-bold hover:bg-glaz-sage transition-colors"
                 aria-label="Acheter la version Kindle sur Amazon"
               >
                 <BookOpen size={20} /> Version Kindle
               </a>
             </div>
          </div>
       </div>

       {/* Audio Demos */}
       <section className="py-24 bg-glaz-grey/30">
          <div className="container mx-auto px-8 lg:px-16">
             <SectionTitle title="Créations de l'Atelier" subtitle="Exemples de ce que vous apprendrez à générer" />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {audio.map(track => (
                   <AudioPlayer 
                     key={track.id}
                     title={track.title}
                     genre={track.genre}
                     duration={track.duration}
                     url={track.url}
                   />
                ))}
             </div>
          </div>
       </section>

       {/* Lead Magnet Section (Checklist) */}
       <section className="bg-glaz-dark text-glaz-cream py-24 px-8 lg:px-16 border-t border-glaz-beige/20">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="font-gotu text-3xl md:text-4xl mb-4">Ne gâchez plus vos crédits Suno</h2>
                <div className="flex items-center gap-2 text-glaz-beige mb-6 font-bold uppercase tracking-widest text-sm">
                   <AlertTriangle size={18} /> Ressource Gratuite
                </div>
                <p className="font-lato text-white mb-6 text-lg">
                   Téléchargez la <strong>Checklist : Les 10 erreurs fatales du Prompt Musical</strong>.
                </p>
                <p className="font-lato text-gray-400 leading-relaxed mb-8">
                   Un PDF condensé pour vérifier vos prompts avant chaque génération. Structure, BPM, Style : ne laissez plus rien au hasard.
                </p>
             </div>
             <div className="bg-glaz-sage/20 p-8 border border-glaz-beige/20 backdrop-blur-sm">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                   <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-glaz-beige">Votre Email</label>
                      <input type="email" placeholder="email@exemple.com" className="w-full bg-glaz-dark border border-glaz-beige/40 p-3 text-white focus:border-glaz-beige outline-none transition-colors" />
                   </div>
                   <button className="w-full bg-glaz-beige text-glaz-dark font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors flex items-center justify-center gap-2">
                      Recevoir la Checklist PDF <Download size={18} />
                   </button>
                   <p className="text-xs text-center text-gray-500">Pas de spam. Promis.</p>
                </form>
             </div>
          </div>
       </section>
    </div>
  );
};

export default Book;
