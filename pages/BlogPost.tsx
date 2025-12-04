import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS, SITE_URL } from '../constants';
import SEO from '../components/SEO';
import { ArrowLeft, Calendar, Share2, Eye, EyeOff } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isZenMode, setIsZenMode] = useState(false);
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return <div className="p-24 text-center">Article non trouvé.</div>;
  }

  // Schema "HowTo" simple example if category fits
  const isTutorial = post.category.includes('Tutoriel');
  const howToSchema = isTutorial ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": post.title,
    "description": post.excerpt,
    "step": [
      { "@type": "HowToStep", "text": "Étape 1 du tutoriel..." },
      { "@type": "HowToStep", "text": "Étape 2 du tutoriel..." }
    ]
  } : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.imageUrl,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": "Artisan Glaz"
    },
    "description": post.excerpt
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isZenMode ? 'bg-[#F5F5F0]' : 'bg-glaz-cream'}`}>
       <SEO 
         title={post.title}
         description={post.excerpt}
         type="article"
         canonical={`${SITE_URL}/blog/${post.slug}`}
         image={post.imageUrl}
         schema={howToSchema || articleSchema}
       />
       
       {/* Zen Mode Toggle (Fixed) */}
       <button 
          onClick={() => setIsZenMode(!isZenMode)}
          className="fixed bottom-8 right-8 z-50 bg-glaz-dark text-glaz-cream p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          title={isZenMode ? "Quitter le mode Zen" : "Activer le mode Zen"}
       >
          {isZenMode ? <EyeOff size={20} /> : <Eye size={20} />}
       </button>

       {/* Hero Image - Hidden in Zen Mode */}
       {!isZenMode && (
         <div className="w-full h-[40vh] relative overflow-hidden">
            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-glaz-dark/40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="container mx-auto px-8 text-center text-glaz-cream">
                  <span className="inline-block bg-glaz-sage px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
                     {post.category}
                  </span>
                  <h1 className="font-gotu text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto leading-tight">
                     {post.title}
                  </h1>
               </div>
            </div>
         </div>
       )}

       <div className={`container mx-auto px-8 lg:px-16 transition-all duration-500 ${isZenMode ? 'py-24 max-w-2xl' : 'py-12 max-w-4xl'}`}>
          {!isZenMode && (
            <Link to="/blog" className="inline-flex items-center gap-2 text-glaz-sage hover:text-glaz-dark mb-8 font-lato text-sm font-bold uppercase tracking-widest">
               <ArrowLeft size={16} /> Retour au journal
            </Link>
          )}

          <div className={`${isZenMode ? 'bg-transparent' : 'bg-white p-8 md:p-16 border border-glaz-grey'}`}>
             {!isZenMode && (
                <div className="flex justify-between items-center mb-8 border-b border-glaz-grey pb-4">
                   <span className="flex items-center gap-2 text-sm text-gray-500 font-lato">
                      <Calendar size={16} /> {post.date}
                   </span>
                   <button className="flex items-center gap-2 text-sm text-glaz-sage hover:text-glaz-dark transition-colors">
                      <Share2 size={16} /> Partager
                   </button>
                </div>
             )}

             {isZenMode && <h1 className="font-gotu text-4xl mb-8 text-glaz-dark">{post.title}</h1>}

             <div className={`prose prose-lg max-w-none font-lato text-gray-700 ${isZenMode ? 'text-xl leading-loose' : ''}`}>
                <p className="font-cormorant text-2xl text-glaz-dark italic mb-8 border-l-4 border-glaz-beige pl-6">
                   {post.excerpt}
                </p>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
             </div>
          </div>
       </div>
    </div>
  );
};

export default BlogPost;