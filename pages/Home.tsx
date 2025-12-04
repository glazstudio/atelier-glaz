import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '../constants';
import SectionTitle from '../components/SectionTitle';
import SEO from '../components/SEO';
import KineticText from '../components/KineticText';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import EthicsCharter from '../components/EthicsCharter';
import FAQAccordion from '../components/FAQAccordion';
import { ArrowRight, Quote } from 'lucide-react';
import { useData } from '../hooks/useData';

const Home: React.FC = () => {
  const { services, testimonials, faq, loading } = useData();

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService", 
    "name": SITE_NAME,
    "image": "https://picsum.photos/1200/630?grayscale",
    "description": SITE_DESCRIPTION,
    "url": SITE_URL,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bretagne",
      "addressCountry": "FR"
    },
    "founder": {
      "@type": "Person",
      "name": "Artisan Glaz"
    }
  };

  return (
    <div className="flex flex-col">
      <SEO 
        title="Communication Artisanale, Web & IA"
        description="Atelier Glaz : Création de sites web, visuels IA (Midjourney), musique générative (Suno) et PAO traditionnelle en Bretagne. Une approche artisanale du numérique."
        schema={businessSchema}
      />

      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center bg-glaz-cream relative border-b border-glaz-dark/10">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-glaz-beige/10 hidden lg:block"></div>
        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <div className="max-w-3xl">
            <p className="font-lato font-bold text-glaz-sage uppercase tracking-[0.2em] mb-4">
              Micro-Entreprise de Création
            </p>
            <div className="mb-6 leading-tight font-gotu text-5xl md:text-6xl lg:text-7xl text-glaz-dark">
              L'Atelier <br/>
              <span className="italic font-cormorant text-glaz-sage">Glaz</span>
            </div>
            
            <p className="font-cormorant text-xl md:text-2xl text-glaz-dark mb-10 max-w-2xl leading-relaxed">
              « L'arrivée de l'IA générative n'est qu'une continuité dans le métier de communicant. »
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center gap-2 bg-glaz-dark text-glaz-cream px-8 py-4 font-lato font-bold hover:bg-glaz-sage transition-colors"
                aria-label="Voir les services de l'Atelier Glaz"
              >
                Découvrir l'Atelier <ArrowRight size={18} />
              </Link>
              <Link 
                to="/book" 
                className="inline-flex items-center justify-center gap-2 border-2 border-glaz-dark text-glaz-dark px-8 py-4 font-lato font-bold hover:bg-glaz-dark hover:text-glaz-cream transition-colors"
                aria-label="Voir le livre sur Suno AI"
              >
                Le Livre Suno
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Why Choose Me */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 lg:px-16">
          <SectionTitle title="L'Esprit de l'Atelier" subtitle="Pourquoi choisir un artisan du numérique ?" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="p-8 border border-glaz-grey bg-glaz-cream hover:shadow-none transition-shadow">
              <h3 className="font-gotu text-2xl mb-4 text-glaz-dark">Pour les Particuliers</h3>
              <p className="font-lato text-gray-600 leading-relaxed">
                Une écoute attentive pour vos projets personnels. Faire-part, retouche de photos de famille, ou création d'une identité visuelle pour votre mariage. Je mets mon savoir-faire au service de vos émotions.
              </p>
            </article>
            <article className="p-8 border border-glaz-grey bg-glaz-dark text-glaz-cream transform md:-translate-y-4">
              <h3 className="font-gotu text-2xl mb-4 text-glaz-beige">Pour les Entreprises</h3>
              <p className="font-lato text-gray-300 leading-relaxed">
                Une communication globale cohérente. De la rédaction de vos rapports à la gestion de vos réseaux sociaux, en passant par la création de visuels IA innovants. Une flexibilité que les grandes agences n'ont pas.
              </p>
            </article>
            <article className="p-8 border border-glaz-grey bg-glaz-cream">
              <h3 className="font-gotu text-2xl mb-4 text-glaz-dark">Pour les Artisans</h3>
              <p className="font-lato text-gray-600 leading-relaxed">
                Je parle votre langage. Celui du travail bien fait, du détail qui compte. Je construis votre vitrine numérique avec la même exigence que vous mettez dans vos créations.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Showcase / Before After */}
      <section className="py-24 bg-glaz-dark text-glaz-cream">
         <div className="container mx-auto px-8 lg:px-16">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <div className="lg:w-1/2">
                  <SectionTitle title="L'Art de la Retouche" subtitle="L'IA au service de l'image" />
                  <p className="font-lato text-gray-300 leading-relaxed mb-8">
                     L'intelligence artificielle permet d'imaginer des mondes. Mais c'est l'œil humain qui les rend crédibles. 
                     Découvrez comment je transforme une génération brute en un visuel professionnel par un travail de retouche, de grain et de colorimétrie.
                  </p>
                  <Link to="/services/ia-generative" className="text-glaz-beige border-b border-glaz-beige pb-1 hover:text-white transition-colors">En savoir plus sur l'IA Générative</Link>
               </div>
               <div className="lg:w-1/2 w-full">
                  <BeforeAfterSlider 
                    beforeImage="https://picsum.photos/800/600?grayscale&blur=2" 
                    afterImage="https://picsum.photos/800/600?grayscale"
                    beforeLabel="Génération Brute"
                    afterLabel="Finition Atelier"
                  />
               </div>
            </div>
         </div>
      </section>

      {/* Services Grid (Dynamic from Sanity/Constants) */}
      <section className="py-24 bg-glaz-cream border-t border-glaz-dark/5">
        <div className="container mx-auto px-8 lg:px-16">
          <SectionTitle title="Mes Projets" subtitle="Explorez les différents pôles de compétence" align="center"/>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-glaz-dark/10">
            {services.map((service, index) => (
              <Link 
                key={service.id} 
                to={service.path}
                className={`group block p-12 border border-glaz-dark/10 hover:bg-white transition-colors relative overflow-hidden`}
                aria-label={`En savoir plus sur : ${service.title}`}
              >
                <div className="absolute top-6 right-6 text-glaz-dark/10 group-hover:text-glaz-sage/20 transition-colors">
                  {service.icon && <service.icon size={80} strokeWidth={1} />}
                </div>
                <h3 className="font-gotu text-3xl text-glaz-dark mb-4 group-hover:text-glaz-sage transition-colors relative z-10">
                  {service.title}
                </h3>
                <p className="font-cormorant text-xl text-glaz-sage mb-6 relative z-10">
                  {service.shortDescription}
                </p>
                <p className="font-lato text-sm text-gray-600 mb-8 max-w-sm relative z-10">
                  {service.fullDescription.substring(0, 100)}...
                </p>
                <span className="inline-block font-bold text-xs uppercase tracking-widest border-b border-glaz-dark pb-1 group-hover:border-glaz-sage group-hover:text-glaz-sage transition-colors relative z-10">
                  Voir les projets
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics Charter */}
      <section className="container mx-auto px-8 lg:px-16">
         <EthicsCharter />
      </section>

      {/* FAQ Section (Dynamic from Sanity/Constants) */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-8 lg:px-16">
            <SectionTitle title="Questions Fréquentes" subtitle="Tout savoir avant de démarrer" align="center" />
            <FAQAccordion />
         </div>
      </section>

      {/* Testimonials (Dynamic from Sanity/Constants) */}
      <section className="py-24 bg-glaz-cream border-t border-glaz-dark/5">
         <div className="container mx-auto px-8 lg:px-16">
            <SectionTitle title="Ce qu'ils disent" subtitle="La parole aux clients de l'atelier" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="relative p-8 bg-white border border-glaz-grey border-l-4 border-l-glaz-beige">
                     <div className="absolute top-4 left-4 text-glaz-beige opacity-50"><Quote size={32} /></div>
                     <p className="font-cormorant text-2xl italic text-glaz-dark mb-6 relative z-10">
                        "{testimonial.content}"
                     </p>
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-[1px] bg-glaz-dark"></div>
                        <div>
                           <p className="font-gotu text-sm font-bold">{testimonial.author}</p>
                           <p className="font-lato text-xs text-gray-500 uppercase tracking-wider">{testimonial.role}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 bg-glaz-dark text-glaz-cream text-center px-4">
         <KineticText text="Un projet en tête ?" as="h2" className="font-gotu text-4xl md:text-5xl mb-6" />
         <p className="font-lato text-xl text-glaz-beige mb-10 max-w-2xl mx-auto">
            Discutons de vos besoins. L'atelier est ouvert aux artisans, entreprises et particuliers.
         </p>
         <Link 
            to="/contact"
            className="inline-block bg-glaz-beige text-glaz-dark font-lato font-bold uppercase tracking-widest px-10 py-5 hover:bg-white transition-colors"
         >
            Demander un devis gratuit
         </Link>
      </section>
    </div>
  );
};

export default Home;
