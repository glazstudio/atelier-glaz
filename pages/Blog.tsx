import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_URL, GARDEN_NOTES } from '../constants';
import SectionTitle from '../components/SectionTitle';
import SEO from '../components/SEO';
import { Calendar, Tag, Sprout, BookOpen } from 'lucide-react';
import { useData } from '../hooks/useData';

const Blog: React.FC = () => {
  const { posts, loading } = useData();
  const [activeTab, setActiveTab] = useState<'journal' | 'garden'>('journal');

  return (
    <div className="bg-glaz-cream min-h-screen py-24">
       <SEO 
         title="Le Journal de l'Atelier" 
         description="Articles, tutoriels et réflexions sur la communication, le web et l'IA générative (Suno, Midjourney)."
         canonical={`${SITE_URL}/blog`}
       />
       <div className="container mx-auto px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
             <SectionTitle title="L'Écrit" subtitle="Réflexions et Notes" />
             
             {/* Tab Switcher */}
             <div className="flex border-b border-glaz-dark/20">
                <button 
                  onClick={() => setActiveTab('journal')}
                  className={`px-6 py-4 font-gotu text-lg transition-colors flex items-center gap-2 ${activeTab === 'journal' ? 'border-b-2 border-glaz-sage text-glaz-dark' : 'text-gray-400 hover:text-glaz-sage'}`}
                >
                   <BookOpen size={18} /> Le Journal
                </button>
                <button 
                  onClick={() => setActiveTab('garden')}
                  className={`px-6 py-4 font-gotu text-lg transition-colors flex items-center gap-2 ${activeTab === 'garden' ? 'border-b-2 border-glaz-sage text-glaz-dark' : 'text-gray-400 hover:text-glaz-sage'}`}
                >
                   <Sprout size={18} /> Jardin Numérique
                </button>
             </div>
          </div>

          {activeTab === 'journal' ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                {posts.map((post) => (
                   <article key={post.id} className="bg-white border border-glaz-grey hover:border-glaz-sage transition-all duration-300 flex flex-col h-full group">
                      <Link to={`/blog/${post.slug}`} className="block overflow-hidden h-48 relative">
                         <img 
                           src={post.imageUrl} 
                           alt={post.title} 
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                         />
                         <div className="absolute top-4 left-4">
                            <span className="bg-glaz-sage text-white text-xs font-bold uppercase tracking-widest px-2 py-1">
                               {post.category}
                            </span>
                         </div>
                      </Link>
                      <div className="p-6 flex flex-col flex-grow">
                         <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 font-lato">
                            <Calendar size={14} /> {post.date}
                         </div>
                         <h3 className="font-gotu text-xl text-glaz-dark mb-3 group-hover:text-glaz-sage transition-colors">
                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                         </h3>
                         <p className="font-lato text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                            {post.excerpt}
                         </p>
                         <Link 
                           to={`/blog/${post.slug}`}
                           className="inline-block text-sm font-bold text-glaz-dark uppercase tracking-widest border-b border-glaz-dark/20 pb-1 hover:border-glaz-sage hover:text-glaz-sage transition-colors mt-auto"
                         >
                            Lire l'article
                         </Link>
                      </div>
                   </article>
                ))}
             </div>
          ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
                {/* Notes de jardin - Placeholder constant for now, could be dynamic later */}
                {GARDEN_NOTES.map((note) => (
                   <div key={note.id} className="bg-white border border-dashed border-glaz-sage/30 p-8 rounded-sm hover:bg-glaz-cream/50 transition-colors">
                      <div className="flex items-center gap-2 mb-4">
                         <span className={`w-2 h-2 rounded-full ${note.status === 'seed' ? 'bg-red-400' : note.status === 'budding' ? 'bg-orange-400' : 'bg-green-600'}`}></span>
                         <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                            {note.status === 'seed' ? 'Graine (Idée)' : note.status === 'budding' ? 'Bourgeon (Brouillon)' : 'Fleur (Mature)'}
                         </span>
                         <span className="text-gray-300 ml-auto text-xs">{note.lastUpdated}</span>
                      </div>
                      <h3 className="font-gotu text-xl text-glaz-dark mb-2">{note.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                         {note.tags.map(tag => (
                            <span key={tag} className="bg-glaz-grey px-2 py-0.5 text-[10px] uppercase tracking-wider text-gray-600">{tag}</span>
                         ))}
                      </div>
                      <p className="font-lato text-gray-600 mb-4">{note.content}</p>
                   </div>
                ))}
             </div>
          )}
       </div>
    </div>
  );
};

export default Blog;
