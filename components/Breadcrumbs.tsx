
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { SITE_URL } from '../constants';

const routeNameMap: Record<string, string> = {
  'services': 'Savoir-Faire',
  'blog': 'Le Journal',
  'book': 'Livre Suno',
  'contact': 'Contact',
  'legal': 'Légal',
  'about': 'À Propos',
  'stack': 'La Stack',
  'now': '/Now',
  'comm-traditionnelle': 'Comm. Traditionnelle',
  'ia-generative': 'IA Générative',
  'web': 'Web & Social',
  'redaction': 'Rédactionnel'
};

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show on home page
  if (pathnames.length === 0) {
    return null;
  }

  // Generate Schema.org JSON-LD
  const breadcrumbListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": SITE_URL
      },
      ...pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const displayName = routeNameMap[name] || name.replace(/-/g, ' ');
        return {
          "@type": "ListItem",
          "position": index + 2,
          "name": displayName.charAt(0).toUpperCase() + displayName.slice(1),
          "item": `${SITE_URL}${routeTo}`
        };
      })
    ]
  };

  return (
    <nav aria-label="Breadcrumb" className="w-full bg-glaz-cream/50 backdrop-blur-sm border-b border-glaz-dark/5 py-3 px-4 md:px-8 lg:px-16 sticky top-16 z-30">
      {/* JSON-LD for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbListSchema)}
      </script>

      <ol className="flex flex-wrap items-center gap-2 text-xs font-lato uppercase tracking-widest">
        <li className="flex items-center hover:text-glaz-sage transition-colors">
          <Link to="/" aria-label="Retour à l'accueil">
            <Home size={14} className="text-glaz-dark/60" />
          </Link>
        </li>
        
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          
          // Format the name: check map, otherwise prettify slug
          let displayName = routeNameMap[value];
          if (!displayName) {
             displayName = value.replace(/-/g, ' ');
             // Truncate if too long (for blog posts)
             if (displayName.length > 20) displayName = displayName.substring(0, 20) + '...';
          }

          return (
            <li key={to} className="flex items-center">
              <ChevronRight size={12} className="text-glaz-dark/30 mx-1" />
              {last ? (
                <span className="text-glaz-dark font-bold border-b border-glaz-beige" aria-current="page">
                  {displayName}
                </span>
              ) : (
                <Link to={to} className="text-gray-500 hover:text-glaz-sage transition-colors">
                  {displayName}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
