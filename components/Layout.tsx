
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { NAV_ITEMS, SOCIAL_LINKS, SERVICES } from '../constants';
import { Menu, X, Mail } from 'lucide-react';
import ReadingProgress from './ReadingProgress';
import Breadcrumbs from './Breadcrumbs';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-lato relative">
      {/* Reading Progress Bar - Highest Z-Index */}
      <ReadingProgress />

      {/* Top Navigation - Sticky */}
      <header className="fixed top-0 left-0 w-full h-16 bg-glaz-dark text-glaz-cream z-50 flex items-center justify-between px-4 lg:px-8 border-b border-glaz-beige/20">
        <div className="flex items-center pl-16 md:pl-20"> {/* Padding left to clear sidebar */}
          <div 
            className="font-gotu text-2xl tracking-widest cursor-pointer hover:text-glaz-beige transition-colors"
            onClick={() => navigate('/')}
          >
            ATELIER GLAZ
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path}
              className={({ isActive }) => 
                `font-lato font-bold text-sm uppercase tracking-widest hover:text-glaz-beige transition-colors ${isActive ? 'text-glaz-beige border-b-2 border-glaz-beige py-1' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-glaz-cream hover:text-glaz-beige transition-colors focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-glaz-dark z-40 transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ top: '64px' }} // Start below header
      >
         <nav className="flex flex-col space-y-8 text-center">
            {NAV_ITEMS.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path}
                className={({ isActive }) => 
                  `font-gotu text-3xl text-glaz-cream hover:text-glaz-beige transition-colors ${isActive ? 'text-glaz-beige italic' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
         </nav>
         <div className="mt-12 flex space-x-6">
            {SOCIAL_LINKS.map((link) => (
                <a key={link.name} href={link.url} className="text-glaz-sage hover:text-glaz-cream transition-colors">
                  <link.icon size={28} />
                </a>
            ))}
         </div>
      </div>

      {/* Left Sidebar - Sticky */}
      <aside className="fixed top-0 left-0 w-16 h-full bg-glaz-sage z-50 flex flex-col justify-between py-20 border-r border-glaz-dark/10 hidden md:flex">
        {/* Service Shortcuts */}
        <div className="flex flex-col items-center space-y-6">
          {SERVICES.map((service) => (
             <button
               key={service.id}
               onClick={() => navigate(service.path)}
               title={service.title}
               className={`p-2 transition-all duration-200 hover:scale-110 ${location.pathname.includes(service.path) ? 'text-glaz-beige bg-glaz-dark' : 'text-glaz-cream hover:bg-glaz-dark/50'}`}
             >
               <service.icon size={20} strokeWidth={1.5} />
             </button>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col items-center space-y-6 mb-4">
           {/* CTA Contact */}
           <button 
             onClick={() => navigate('/contact')}
             className="p-2 bg-glaz-beige text-glaz-dark hover:bg-white transition-colors"
             title="Demander un devis"
           >
              <Mail size={20} />
           </button>

          <div className="w-8 h-[1px] bg-glaz-beige/50"></div>
          
          {SOCIAL_LINKS.slice(0, 4).map((link) => (
            <a 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-glaz-cream hover:text-glaz-beige hover:scale-110 transition-transform"
              title={link.name}
            >
              <link.icon size={18} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow pt-16 md:pl-16 min-h-screen z-10 relative flex flex-col">
        {/* Breadcrumbs inserted here, will only render if not on home */}
        <Breadcrumbs />
        {children}
      </main>

      {/* Footer */}
      <footer className="md:pl-16 bg-glaz-dark text-glaz-cream py-12 border-t border-glaz-beige/20 z-10 relative">
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-gotu text-xl mb-4 text-glaz-beige">Atelier Glaz</h3>
            <p className="font-cormorant italic text-lg opacity-80 max-w-xs">
              L'artisanat au service de votre communication numérique et imprimée.
            </p>
          </div>
          <div>
            <h3 className="font-lato font-bold text-sm uppercase tracking-widest mb-4 text-glaz-beige">Navigation</h3>
            <ul className="space-y-2 font-lato text-sm">
              {NAV_ITEMS.map(item => (
                <li key={item.path}><NavLink to={item.path} className="hover:underline opacity-80 hover:opacity-100">{item.label}</NavLink></li>
              ))}
            </ul>
          </div>
           <div>
            <h3 className="font-lato font-bold text-sm uppercase tracking-widest mb-4 text-glaz-beige">Légal & Plus</h3>
            <ul className="space-y-2 font-lato text-sm">
               <li><NavLink to="/legal" className="hover:underline opacity-80 hover:opacity-100">Mentions Légales</NavLink></li>
               <li><NavLink to="/legal#cgv" className="hover:underline opacity-80 hover:opacity-100">CGV</NavLink></li>
               <li><NavLink to="/legal#privacy" className="hover:underline opacity-80 hover:opacity-100">Confidentialité</NavLink></li>
               <li><NavLink to="/now" className="hover:underline opacity-80 hover:opacity-100 text-glaz-beige">/Now</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="font-lato font-bold text-sm uppercase tracking-widest mb-4 text-glaz-beige">Contact</h3>
            <p className="font-lato text-sm mb-2">contact@atelier-glaz.com</p>
            <p className="font-lato text-sm opacity-60">Basé en Bretagne, ouvert au monde.</p>
            <div className="mt-4">
               <button onClick={() => navigate('/contact')} className="text-xs uppercase border border-glaz-beige px-4 py-2 hover:bg-glaz-beige hover:text-glaz-dark transition-colors">
                  Demander un devis
               </button>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center font-lato text-xs opacity-40 border-t border-white/10 pt-8 mx-8">
          © {new Date().getFullYear()} Atelier Glaz. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
