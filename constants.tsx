import { 
  Palette, 
  Cpu, 
  Globe, 
  PenTool, 
  Linkedin, 
  Instagram, 
  Youtube, 
  ShoppingCart, 
  Music,
  AtSign,
  Monitor,
  Camera,
  Layers,
  Code
} from 'lucide-react';
import { ServiceCategory, SocialLink, NavItem, BlogPost, Testimonial, StackItem, PricingPack, AudioTrack, NowData, FAQItem, GardenNote } from './types';

export const SITE_URL = 'https://www.atelier-glaz.com';
export const SITE_NAME = 'Atelier Glaz';
export const SITE_DESCRIPTION = 'Atelier de communication artisanale et numérique en Bretagne. Spécialiste PAO, IA Générative (Suno, Midjourney), Web et Rédaction.';

export const COLORS = {
  DARK: '#00313C',
  SAGE: '#446153',
  CREAM: '#FFFBF3',
  BEIGE: '#D5C8A1',
  GREY: '#E4E4E6',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'L\'Atelier', path: '/' },
  { label: 'Savoir-Faire', path: '/services' },
  { label: 'Le Journal', path: '/blog' },
  { label: 'Le Livre Suno', path: '/book' },
  { label: 'La Stack', path: '/stack' }, // New Page
  { label: 'Contact', path: '/contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'LinkedIn', url: '#', icon: Linkedin },
  { name: 'Instagram', url: '#', icon: Instagram },
  { name: 'Threads', url: '#', icon: AtSign },
  { name: 'Suno', url: '#', icon: Music },
  { name: 'YouTube', url: '#', icon: Youtube },
  { name: 'Amazon', url: '#', icon: ShoppingCart },
];

export const STACK_ITEMS: StackItem[] = [
  { name: 'MacBook Pro M3 Max', category: 'Hardware', description: 'Le cœur de l\'atelier pour les rendus vidéos lourds.', icon: Monitor },
  { name: 'Sony A7IV', category: 'Hardware', description: 'Pour la capture d\'images réelles et textures.', icon: Camera },
  { name: 'Adobe Creative Cloud', category: 'Software', description: 'Photoshop, Illustrator, InDesign, Premiere Pro.', icon: Layers },
  { name: 'VS Code', category: 'Web', description: 'Développement artisanal, sans constructeur de page lourd.', icon: Code },
  { name: 'Midjourney v6', category: 'IA', description: 'Génération d\'images haute fidélité.', icon: Cpu },
  { name: 'Suno v3.5', category: 'IA', description: 'Composition musicale assistée.', icon: Music },
];

export const PRICING_PACKS: PricingPack[] = [
  {
    id: 'pack-starter-id',
    title: 'Identité Express',
    price: 'À partir de 650€',
    description: 'Pour lancer votre activité avec une image professionnelle immédiate.',
    features: ['Logo (Déclinaisons principales)', 'Carte de visite', 'Bannière LinkedIn', 'Guide d\'usage simplifié'],
    recommended: false
  },
  {
    id: 'pack-site-vitrine',
    title: 'Vitrine Artisan',
    price: 'À partir de 1200€',
    description: 'Un site web unique, rapide et sans maintenance mensuelle obligatoire.',
    features: ['Site One-Page ou 3 Pages', 'Design sur-mesure', 'Optimisation SEO de base', 'Formation prise en main (1h)'],
    recommended: true
  },
  {
    id: 'pack-ia-content',
    title: 'Contenu IA',
    price: 'Sur devis',
    description: 'Campagne visuelle ou musicale pour marquer les esprits.',
    features: ['10 Visuels Midjourney retouchés', 'OU 1 min de vidéo/musique', 'Cession de droits incluse', 'Livraison HD'],
    recommended: false
  }
];

export const AUDIO_TRACKS: AudioTrack[] = [
  {
    id: '1',
    title: 'Aube Bretonne (Suno v3)',
    duration: '02:14',
    genre: 'Cinematic / Folk',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' // Placeholder MP3
  },
  {
    id: '2',
    title: 'Atelier Mécanique',
    duration: '01:45',
    genre: 'Lo-Fi / Industrial',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' // Placeholder MP3
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "L'utilisation de l'IA pose-t-elle des problèmes de droits d'auteur ?",
    answer: "C'est une question cruciale. À l'Atelier Glaz, nous effectuons une veille juridique constante. Pour les images, nous utilisons des outils payants (Midjourney Pro) qui nous accordent la propriété commerciale des assets. Cependant, nous recommandons toujours une retouche humaine significative (ce que nous faisons) pour garantir l'unicité et la protection de l'œuvre finale."
  },
  {
    question: "Combien de temps faut-il pour créer un site vitrine ?",
    answer: "Pour un site 'Vitrine Artisan' (One-page ou 3 pages), comptez entre 2 et 4 semaines à partir de la réception des contenus. Ce délai inclut la phase de design, le développement, et les allers-retours de correction."
  },
  {
    question: "Quelle est la différence entre vous et une agence de communication ?",
    answer: "L'interlocuteur et la flexibilité. En agence, vous parlez à un commercial, puis un chef de projet, et enfin un créatif réalise. Ici, vous parlez directement à l'artisan qui réalise. Cela garantit que rien ne se perd, et cela réduit considérablement les coûts de structure."
  },
  {
    question: "Travaillez-vous uniquement avec des clients en Bretagne ?",
    answer: "Non, bien que l'atelier soit ancré à Quimper, le numérique n'a pas de frontières. Nous travaillons régulièrement en visio avec des clients de toute la France et de l'étranger. Les outils modernes (Notion, Google Meet) rendent la collaboration fluide."
  }
];

export const NOW_DATA: NowData = {
  lastUpdated: '15 Octobre 2025',
  location: 'Quimper, Bretagne (Sous la pluie)',
  status: 'Ouvert aux nouveaux projets (Dispo Nov. 2025)',
  availability: 'available',
  items: [
    {
      category: 'Focus Principal',
      content: 'Refonte de l\'identité visuelle pour une cidrerie artisanale.',
      details: 'Travail sur le packaging et l\'histoire de la marque. Recherche de textures papier.'
    },
    {
      category: 'J\'apprends',
      content: 'L\'utilisation avancée des View Transitions API.',
      details: 'Pour rendre la navigation web aussi fluide qu\'une application native.'
    },
    {
      category: 'Je lis',
      content: '« L\'Éloge du carburateur » de Matthew Crawford.',
      details: 'Un retour philosophique sur le sens du travail manuel et concret.'
    },
    {
      category: 'J\'écoute',
      content: 'Une playlist de Jazz Manouche générée sur Suno v3.5.',
      details: 'Test de cohérence instrumentale sur la longueur.'
    }
  ]
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Jean M.',
    role: 'Artisan Menuisier',
    content: "J'avais peur que le côté 'IA' dénature mon travail manuel. Au contraire, l'Atelier Glaz a su capturer l'essence de mon bois avec des outils modernes. Un vrai travail d'artisan numérique."
  },
  {
    id: '2',
    author: 'Sophie L.',
    role: 'Directrice Marketing PME',
    content: "Réactivité, précision et une plume excellente pour nos rapports annuels. L'apport des visuels générés nous a permis de nous démarquer à moindre coût."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'pourquoi-artisan-numerique',
    title: 'Pourquoi je me définis comme un Artisan Numérique',
    excerpt: "À l'heure de l'automatisation massive, revendiquer le statut d'artisan peut sembler anachronique. C'est pourtant la seule voie pour garantir la qualité.",
    date: '12 Octobre 2023',
    category: 'Philosophie',
    content: `
      <p>Dans un monde où tout s'accélère, où l'on peut générer mille images en une minute, j'ai fait le choix de ralentir.</p>
      <p>L'artisan numérique ne rejette pas l'outil moderne. Le menuisier utilise une scie circulaire, je me sers de Midjourney. Mais la main guide toujours l'outil.</p>
      <h3>La main et l'algorithme</h3>
      <p>L'IA propose, l'humain dispose. C'est là toute la différence entre un "générateur de contenu" et un créateur. Mon travail consiste à sculpter la matière brute fournie par l'algorithme.</p>
    `,
    imageUrl: 'https://picsum.photos/800/400?grayscale'
  },
  {
    id: '2',
    slug: 'debuter-suno-v3',
    title: 'Débuter avec Suno v3 : Les erreurs à éviter',
    excerpt: "Générer de la musique avec l'IA est facile. Générer de la BONNE musique demande de la technique. Voici mes 5 conseils pour vos premiers prompts.",
    date: '28 Octobre 2023',
    category: 'Tutoriel IA',
    content: "Contenu complet de l'article à venir...",
    imageUrl: 'https://picsum.photos/800/401?grayscale'
  },
  {
    id: '3',
    slug: 'accessibilite-web-2024',
    title: 'L\'accessibilité web n\'est plus une option',
    excerpt: "Rendre son site accessible aux malvoyants n'est pas seulement une obligation légale, c'est un devoir moral et une opportunité SEO.",
    date: '15 Novembre 2023',
    category: 'Web',
    content: "Contenu complet de l'article à venir...",
    imageUrl: 'https://picsum.photos/800/402?grayscale'
  }
];

export const SERVICES: ServiceCategory[] = [
  {
    id: 'comm-traditionnelle',
    title: 'Communication Traditionnelle',
    shortDescription: 'PAO, Retouche photo & Identité visuelle',
    fullDescription: 'Dans le silence de l\'atelier numérique, je façonne vos visuels avec la précision de l\'artisan. De la retouche photo minutieuse à la mise en page de vos documents, chaque pixel est pesé. Je conçois des identités de marque qui durent, loin des modes éphémères.',
    icon: Palette,
    path: '/services/comm-traditionnelle',
    projects: [
      {
        id: 'retouche-mode',
        title: 'Retouche "Grain de Peau"',
        description: 'Travail de texture et colorimétrie pour une campagne de mode locale.',
        tags: ['Photoshop', 'Mode', 'Retouche'],
        imageUrl: 'https://picsum.photos/800/600?grayscale'
      },
      {
        id: 'mise-en-page-mag',
        title: 'Mise en page Magazine',
        description: 'Direction artistique et exécution pour un trimestriel culturel.',
        tags: ['InDesign', 'Editorial', 'Print'],
        imageUrl: 'https://picsum.photos/800/601?grayscale'
      },
       {
        id: 'branding-artisan',
        title: 'Identité "Bois & Fer"',
        description: 'Création de logo et charte graphique pour un ébéniste.',
        tags: ['Illustrator', 'Branding', 'Logo'],
        imageUrl: 'https://picsum.photos/800/602?grayscale'
      }
    ]
  },
  {
    id: 'ia-generative',
    title: 'IA Générative',
    shortDescription: 'Images, Vidéos & Musique',
    fullDescription: 'L\'intelligence artificielle n\'est pas une fin, c\'est un nouveau pinceau. J\'utilise les algorithmes pour étendre le champ des possibles : création d\'images oniriques, clips vidéos conceptuels, et compositions musicales sur-mesure via Suno.',
    icon: Cpu,
    path: '/services/ia-generative',
    projects: [
      {
        id: 'visuels-campagne',
        title: 'Campagne Onirique',
        description: 'Série de visuels générés et retouchés pour une marque de thé.',
        tags: ['Midjourney', 'Photoshop', 'Direction Artistique'],
        imageUrl: 'https://picsum.photos/800/603?grayscale'
      },
      {
        id: 'clip-musical',
        title: 'Clip "Echoes"',
        description: 'Génération vidéo cohérente pour accompagner une sortie musicale.',
        tags: ['Runway', 'Premiere Pro', 'Video'],
        imageUrl: 'https://picsum.photos/800/604?grayscale'
      }
    ]
  },
  {
    id: 'web',
    title: 'Web & Social',
    shortDescription: 'Sites vitrines & Community Management',
    fullDescription: 'Un site web doit être solide comme un meuble bien construit. Je réalise des sites vitrines épurés, rapides et efficaces. J\'anime également vos communautés avec un ton authentique et engagé.',
    icon: Globe,
    path: '/services/web',
    projects: [
      {
        id: 'site-architecte',
        title: 'Portfolio Architecte',
        description: 'Site minimaliste mettant en valeur les photos de projets.',
        tags: ['React', 'Minimalisme', 'Web Design'],
        imageUrl: 'https://picsum.photos/800/605?grayscale'
      },
      {
        id: 'cm-festival',
        title: 'CM Festival de Jazz',
        description: 'Stratégie de contenu et modération durant l\'événement.',
        tags: ['Social Media', 'Instagram', 'Storytelling'],
        imageUrl: 'https://picsum.photos/800/606?grayscale'
      }
    ]
  },
  {
    id: 'redaction',
    title: 'Rédactionnel',
    shortDescription: 'Articles, Rapports & Comptes rendus',
    fullDescription: 'Les mots sont des matériaux nobles. Je rédige pour vous des articles de fond, structure vos rapports d\'activité et synthétise vos réunions. Une plume adaptable, précise et sans fioritures inutiles.',
    icon: PenTool,
    path: '/services/redaction',
    projects: [
      {
        id: 'article-blog',
        title: 'Série "L\'avenir du vin"',
        description: 'Articles de blog optimisés SEO pour un vignoble.',
        tags: ['Copywriting', 'SEO', 'Storytelling'],
        imageUrl: 'https://picsum.photos/800/607?grayscale'
      },
      {
        id: 'rapport-annuel',
        title: 'Rapport RSE',
        description: 'Rédaction et structuration des données pour une PME.',
        tags: ['Corporate', 'Synthèse'],
        imageUrl: 'https://picsum.photos/800/608?grayscale'
      }
    ]
  }
];

export const GARDEN_NOTES: GardenNote[] = [
  {
    id: '1',
    title: 'Architecture hexagonale en React',
    status: 'seed',
    lastUpdated: '10 Nov 2023',
    tags: ['Dev', 'Architecture'],
    content: 'Une réflexion sur la séparation des préoccupations dans les applications front-end modernes.'
  },
  {
    id: '2',
    title: 'Le prompt engineering est-il un métier ?',
    status: 'budding',
    lastUpdated: '05 Nov 2023',
    tags: ['IA', 'Carrière'],
    content: 'Analyse des tendances actuelles et de la pérennité de cette nouvelle compétence.'
  },
   {
    id: '3',
    title: 'Minimalisme numérique',
    status: 'flower',
    lastUpdated: '20 Oct 2023',
    tags: ['Philosophie', 'Design'],
    content: 'Pourquoi réduire la charge cognitive des interfaces est un devoir éthique.'
  }
];