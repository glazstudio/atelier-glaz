import { useState, useEffect } from 'react';
import { client, urlFor, getIcon } from '../lib/sanity';
import * as LOCAL_DATA from '../constants';
import { ServiceCategory, BlogPost, Testimonial, StackItem, PricingPack, AudioTrack, NowData, FAQItem } from '../types';

export function useData() {
  const [loading, setLoading] = useState(true);
  
  // États de données initialisés avec les données locales (Fallback immédiat)
  const [services, setServices] = useState<ServiceCategory[]>(LOCAL_DATA.SERVICES);
  const [posts, setPosts] = useState<BlogPost[]>(LOCAL_DATA.BLOG_POSTS);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(LOCAL_DATA.TESTIMONIALS);
  const [stack, setStack] = useState<StackItem[]>(LOCAL_DATA.STACK_ITEMS);
  const [pricing, setPricing] = useState<PricingPack[]>(LOCAL_DATA.PRICING_PACKS);
  const [audio, setAudio] = useState<AudioTrack[]>(LOCAL_DATA.AUDIO_TRACKS);
  const [now, setNow] = useState<NowData>(LOCAL_DATA.NOW_DATA);
  const [faq, setFaq] = useState<FAQItem[]>(LOCAL_DATA.FAQ_ITEMS);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Définition des requêtes GROQ pour Sanity
        // Note: Nous utilisons _type pour filtrer. Vous devrez créer ces schémas dans Sanity Studio.
        
        const servicesQuery = `*[_type == "service"]{
          id, title, shortDescription, fullDescription, iconName, path,
          projects[]->{
            id, title, description, tags, 
            "imageUrl": image.asset->url
          }
        }`;
        
        const postsQuery = `*[_type == "post"] | order(date desc){
            id, slug, title, excerpt, content, date, category,
            "imageUrl": image.asset->url
        }`;
        
        const commonQuery = `{
            "testimonials": *[_type == "testimonial"],
            "stack": *[_type == "stackItem"],
            "pricing": *[_type == "pricingPack"],
            "audio": *[_type == "audioTrack"],
            "now": *[_type == "nowPage"][0],
            "faq": *[_type == "faqItem"]
        }`;

        // Tentative de fetch parallèle
        const [remoteServices, remotePosts, commonData] = await Promise.all([
             client.fetch(servicesQuery),
             client.fetch(postsQuery),
             client.fetch(commonQuery)
        ]);

        // Mise à jour de l'état SEULEMENT si des données sont retournées par Sanity
        // Cela évite d'écraser les données locales par des tableaux vides si Sanity est vide.
        
        if (remoteServices && remoteServices.length > 0) {
            setServices(remoteServices.map((s: any) => ({
                ...s,
                icon: getIcon(s.iconName) // Transformation string -> Composant Icon
            })));
        }

        if (remotePosts && remotePosts.length > 0) {
            setPosts(remotePosts);
        }

        if (commonData) {
            if (commonData.testimonials?.length > 0) setTestimonials(commonData.testimonials);
            if (commonData.stack?.length > 0) {
                 setStack(commonData.stack.map((s: any) => ({
                     ...s,
                     icon: getIcon(s.iconName)
                 })));
            }
            if (commonData.pricing?.length > 0) setPricing(commonData.pricing);
            if (commonData.audio?.length > 0) setAudio(commonData.audio);
            if (commonData.now) setNow(commonData.now);
            if (commonData.faq?.length > 0) setFaq(commonData.faq);
        }

        setLoading(false);
      } catch (error) {
        console.log("Mode Hybride : Utilisation des données locales (Sanity non connecté ou vide).");
        // En cas d'erreur (ex: dataset pas encore créé), on reste silencieusement sur les données locales
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    loading,
    services,
    posts,
    testimonials,
    stack,
    pricing,
    audio,
    now,
    faq
  };
}
