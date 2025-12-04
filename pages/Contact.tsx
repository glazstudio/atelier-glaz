import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import SEO from '../components/SEO';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: 'general', message: '' });
    }, 1500);
  };

  return (
    <div className="bg-glaz-cream min-h-screen py-24">
      <SEO 
        title="Contactez l'Atelier"
        description="Parlez-moi de votre projet. Devis gratuit pour création de site web, visuels IA ou rédaction."
        canonical="https://www.atelier-glaz.com/contact"
      />
      <div className="container mx-auto px-8 lg:px-16">
        <SectionTitle title="Contact" subtitle="Démarrons un projet ensemble" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <p className="font-lato text-xl text-glaz-dark mb-8 leading-relaxed">
              Vous avez un projet ? Une idée vague ? Ou besoin d'une expertise précise sur Suno ou Midjourney ?
              L'atelier est ouvert.
            </p>
            
            <div className="space-y-8 mt-12">
              <div className="flex items-start gap-4">
                <div className="bg-glaz-sage p-3 text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-gotu text-xl text-glaz-dark">Email</h3>
                  <a href="mailto:contact@atelier-glaz.com" className="font-lato text-glaz-sage hover:underline">contact@atelier-glaz.com</a>
                  <p className="text-sm text-gray-500 mt-1">Réponse sous 24h ouvrées.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                 <div className="bg-glaz-sage p-3 text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-gotu text-xl text-glaz-dark">Localisation</h3>
                  <p className="font-lato text-gray-600">Bretagne, France</p>
                  <p className="text-sm text-gray-500 mt-1">Disponible en visio partout dans le monde.</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-white border border-glaz-beige">
               <h4 className="font-gotu text-lg mb-2">Horaires de l'atelier</h4>
               <ul className="font-lato text-sm space-y-2 text-gray-600">
                 <li className="flex justify-between"><span>Lundi - Vendredi</span> <span>09:00 - 18:00</span></li>
                 <li className="flex justify-between"><span>Samedi</span> <span>Sur rendez-vous</span></li>
               </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 md:p-12 border border-glaz-dark/10">
             {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                   <div className="w-16 h-16 bg-glaz-sage text-white flex items-center justify-center rounded-none mb-6">
                      <Send size={32} />
                   </div>
                   <h3 className="font-gotu text-2xl text-glaz-dark mb-2">Message envoyé !</h3>
                   <p className="font-lato text-gray-600">Merci de votre confiance. Je reviens vers vous très vite.</p>
                   <button onClick={() => setStatus('idle')} className="mt-8 text-sm underline hover:text-glaz-sage">Envoyer un autre message</button>
                </div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-lato font-bold text-sm uppercase tracking-widest mb-2 text-glaz-dark">Nom complet</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-glaz-cream border-b-2 border-glaz-grey focus:border-glaz-sage outline-none py-3 px-2 transition-colors font-lato"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-lato font-bold text-sm uppercase tracking-widest mb-2 text-glaz-dark">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-glaz-cream border-b-2 border-glaz-grey focus:border-glaz-sage outline-none py-3 px-2 transition-colors font-lato"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                     <label htmlFor="subject" className="block font-lato font-bold text-sm uppercase tracking-widest mb-2 text-glaz-dark">Sujet</label>
                     <select 
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full bg-glaz-cream border-b-2 border-glaz-grey focus:border-glaz-sage outline-none py-3 px-2 transition-colors font-lato"
                     >
                        <option value="general">Renseignement général</option>
                        <option value="quote">Demande de devis</option>
                        <option value="web">Projet Web</option>
                        <option value="ia">Projet IA / Suno</option>
                        <option value="print">Projet Print / PAO</option>
                     </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-lato font-bold text-sm uppercase tracking-widest mb-2 text-glaz-dark">Votre message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-glaz-cream border-b-2 border-glaz-grey focus:border-glaz-sage outline-none py-3 px-2 transition-colors font-lato resize-none"
                      placeholder="Détaillez votre besoin..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-glaz-dark text-glaz-cream font-lato font-bold py-4 hover:bg-glaz-sage transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {status === 'submitting' ? 'Envoi en cours...' : <>Envoyer le message <Send size={18} /></>}
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-4">
                     Vos données sont utilisées uniquement pour répondre à votre demande.
                  </p>
                </form>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;