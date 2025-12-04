import React from 'react';
import SectionTitle from '../components/SectionTitle';
import SEO from '../components/SEO';
import { SITE_NAME, SITE_URL } from '../constants';

const Legal: React.FC = () => {
  return (
    <div className="bg-glaz-cream min-h-screen py-24">
      <SEO 
        title="Mentions Légales & CGV"
        description="Conditions Générales de Vente et Mentions Légales de l'Atelier Glaz."
        canonical={`${SITE_URL}/legal`}
      />
      <div className="container mx-auto px-8 lg:px-16 max-w-4xl">
        <SectionTitle title="Légal" subtitle="Transparence et conditions" />

        <div className="space-y-16">
           {/* Mentions Légales */}
           <section id="mentions">
              <h2 className="font-gotu text-2xl text-glaz-dark mb-6 border-b border-glaz-sage pb-2">Mentions Légales</h2>
              <div className="font-lato text-gray-700 space-y-4">
                 <p><strong>Dénomination sociale :</strong> Atelier Glaz (Micro-entreprise)</p>
                 <p><strong>Siège social :</strong> [Votre Adresse], Bretagne, France</p>
                 <p><strong>Directeur de la publication :</strong> [Votre Nom]</p>
                 <p><strong>SIRET :</strong> [Votre Numéro SIRET]</p>
                 <p><strong>Hébergeur :</strong> [Nom Hébergeur], [Adresse Hébergeur]</p>
                 <p><strong>Contact :</strong> contact@atelier-glaz.com</p>
              </div>
           </section>

           {/* Confidentialité */}
           <section id="privacy">
              <h2 className="font-gotu text-2xl text-glaz-dark mb-6 border-b border-glaz-sage pb-2">Politique de Confidentialité</h2>
              <div className="font-lato text-gray-700 space-y-4 leading-relaxed">
                 <p>
                    L'Atelier Glaz s'engage à ce que la collecte et le traitement de vos données, effectués à partir du site atelier-glaz.com, 
                    soient conformes au règlement général sur la protection des données (RGPD).
                 </p>
                 <h3 className="font-bold text-glaz-dark mt-4">Données collectées</h3>
                 <p>
                    Nous collectons uniquement les données nécessaires à la gestion de votre demande via le formulaire de contact (Nom, Email). 
                    Ces données ne sont jamais revendues à des tiers.
                 </p>
                 <h3 className="font-bold text-glaz-dark mt-4">Cookies</h3>
                 <p>
                    Ce site utilise uniquement des cookies techniques nécessaires au bon fonctionnement ou à la mesure d'audience anonyme.
                 </p>
              </div>
           </section>

           {/* CGV */}
           <section id="cgv">
              <h2 className="font-gotu text-2xl text-glaz-dark mb-6 border-b border-glaz-sage pb-2">Conditions Générales de Vente (CGV)</h2>
              <div className="font-lato text-gray-700 space-y-4 leading-relaxed text-sm">
                 <p className="italic mb-4">Mise à jour le 01/01/2024</p>
                 
                 <h3 className="font-bold text-glaz-dark mt-4">Article 1 - Objet</h3>
                 <p>Les présentes conditions régissent les ventes de prestations de services (création web, graphisme, rédaction) et de produits numériques (ebooks) par l'Atelier Glaz.</p>
                 
                 <h3 className="font-bold text-glaz-dark mt-4">Article 2 - Prix</h3>
                 <p>Les prix de nos produits sont indiqués en euros. En tant que micro-entreprise, la TVA est non applicable (art. 293 B du CGI).</p>
                 
                 <h3 className="font-bold text-glaz-dark mt-4">Article 3 - Commandes</h3>
                 <p>Toute commande de prestation fait l'objet d'un devis préalable accepté par le client. Pour les produits numériques, la commande est validée après paiement.</p>
                 
                 <h3 className="font-bold text-glaz-dark mt-4">Article 4 - Modalités de paiement</h3>
                 <p>Le règlement des prestations s'effectue par virement bancaire. Un acompte de 30% est exigé à la signature du devis.</p>
                 
                 <h3 className="font-bold text-glaz-dark mt-4">Article 5 - Livraison</h3>
                 <p>Les délais de livraison sont donnés à titre indicatif dans le devis. Les produits numériques sont livrés immédiatement par téléchargement.</p>
                 
                 <p className="mt-8 text-xs opacity-60">Pour toute question relative aux CGV, contactez-nous.</p>
              </div>
           </section>
        </div>
      </div>
    </div>
  );
};

export default Legal;