import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { SITE_URL } from '../constants';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import PricingCard from '../components/PricingCard';
import Timeline from '../components/Timeline';
import SEO from '../components/SEO';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useData } from '../hooks/useData';

const Services: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { services, pricing, loading } = useData();

  // Affichage de tous les services si pas d'ID
  if (!id) {
    return (
      <div className="bg-glaz-cream min-h-screen py-24">
        <SEO 
          title="Nos Savoir-Faire"
          description="Découvrez l'ensemble des expertises de l'Atelier Glaz : Communication traditionnelle, Création IA, Web Design et Rédaction professionnelle."
          canonical={`${SITE_URL}/services`}
        />
        <div className="container mx-auto px-8 lg:px-16">
          <SectionTitle title="Savoir-Faire" subtitle="L'ensemble des compétences de l'atelier" />
          <div className="space-y-24">
             {services.map(service => (
                <section key={service.id} id={service.id} className="scroll-mt-24">
                   <div className="flex flex-col md:flex-row gap-12 items-start mb-12">
                      <div className="md:w-1/3">
                        <div className="text-glaz-sage mb-4">
                            {service.icon && <service.icon size={48} strokeWidth={1} />}
                        </div>
                        <h2 className="font-gotu text-4xl text-glaz-dark mb-4">{service.title}</h2>
                        <p className="font-lato text-gray-600 leading-relaxed mb-6">
                            {service.fullDescription}
                        </p>
                        <Link 
                           to={service.path}
                           className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-glaz-dark border-b border-glaz-dark/20 pb-1 hover:border-glaz-sage hover:text-glaz-sage transition-colors"
                        >
                           Voir en détail <ArrowRight size={14} />
                        </Link>
                      </div>
                      <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                         {service.projects.map(project => (
                             <ProjectCard key={project.id} project={project} />
                         ))}
                      </div>
                   </div>
                   <div className="w-full h-[1px] bg-glaz-dark/10"></div>
                </section>
             ))}
          </div>

          {/* Pricing Packs Section */}
          <div className="mt-32">
             <SectionTitle title="Packs de Démarrage" subtitle="Des offres claires pour bien commencer" />
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricing.map(pack => (
                   <PricingCard key={pack.id} pack={pack} onCtaClick={() => navigate('/contact')} />
                ))}
             </div>
          </div>
        </div>
      </div>
    );
  }

  const service = services.find(s => s.id === id);

  if (!service) {
    return (
       <div className="min-h-screen flex flex-col items-center justify-center bg-glaz-cream">
          <p className="font-gotu text-2xl mb-4">Service non trouvé.</p>
          <button onClick={() => navigate('/services')} className="underline">Retour</button>
       </div>
    );
  }

  // Find other services for internal linking (exclude current)
  const otherServices = services.filter(s => s.id !== service.id).slice(0, 2);

  // Schema.org pour un Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.fullDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Atelier Glaz"
    },
    "areaServed": "France",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Projets",
      "itemListElement": service.projects.map(p => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": p.title,
          "description": p.description
        }
      }))
    }
  };

  return (
    <div className="bg-glaz-cream min-h-screen">
       <SEO 
          title={service.title}
          description={service.shortDescription}
          canonical={`${SITE_URL}/services/${id}`}
          schema={serviceSchema}
       />
       {/* Header for specific service */}
       <header className="bg-glaz-dark text-glaz-cream py-20 px-8 lg:px-16 border-b border-glaz-beige/20">
          <button 
            onClick={() => navigate('/services')} 
            className="flex items-center gap-2 text-glaz-beige hover:text-white mb-8 font-lato text-sm uppercase tracking-widest transition-colors"
            aria-label="Retour à la liste des services"
          >
            <ArrowLeft size={16} /> Retour aux services
          </button>
          <div className="flex items-end gap-6">
            {service.icon && <service.icon size={64} strokeWidth={1} className="text-glaz-sage mb-2" />}
            <div>
                <h1 className="font-gotu text-5xl md:text-6xl mb-4">{service.title}</h1>
                <p className="font-cormorant text-2xl text-glaz-beige/80 italic">{service.shortDescription}</p>
            </div>
          </div>
       </header>

       <div className="container mx-auto px-8 lg:px-16 py-16">
          <div className="max-w-3xl mb-16">
             <h3 className="font-lato font-bold text-glaz-dark uppercase tracking-widest mb-4">L'approche de l'atelier</h3>
             <p className="font-lato text-lg text-gray-700 leading-loose">
                {service.fullDescription}
             </p>
             <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-glaz-sage text-white px-6 py-3 font-lato font-bold hover:bg-glaz-dark transition-colors">
                   Demander un devis pour ce service
                </Link>
             </div>
          </div>

          <SectionTitle title="Focus Projet" subtitle="Étude de cas détaillée" />
          <div className="mb-24">
            {/* We assume Timeline data is specific to a project, for now we use the constant one as placeholder for structure */}
            <Timeline />
          </div>

          <SectionTitle title="Projets Récents" subtitle="Sélection de réalisations" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {service.projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Internal Linking / See Also */}
          <div className="border-t border-glaz-dark/10 pt-16">
             <h3 className="font-gotu text-2xl text-glaz-dark mb-8">Découvrir aussi à l'atelier</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {otherServices.map(other => (
                   <Link 
                      key={other.id} 
                      to={other.path} 
                      className="group border border-glaz-grey p-6 hover:bg-white hover:border-glaz-sage transition-all"
                   >
                      <div className="flex items-center gap-4 mb-2">
                         <div className="text-glaz-sage group-hover:scale-110 transition-transform">
                             {other.icon && <other.icon size={24} />}
                         </div>
                         <h4 className="font-gotu text-xl group-hover:text-glaz-sage transition-colors">{other.title}</h4>
                      </div>
                      <p className="font-lato text-sm text-gray-500">{other.shortDescription}</p>
                   </Link>
                ))}
             </div>
          </div>
       </div>
    </div>
  );
};

export default Services;
