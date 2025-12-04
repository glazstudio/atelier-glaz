import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Construct JSON-LD Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Inject Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <div className="flex flex-col border border-glaz-grey bg-white">
        {FAQ_ITEMS.map((item, index) => (
          <div key={index} className="border-b border-glaz-grey last:border-b-0">
            <button
              onClick={() => toggleItem(index)}
              className={`w-full text-left p-6 md:p-8 flex items-start justify-between gap-4 transition-colors ${
                openIndex === index ? 'bg-glaz-cream' : 'hover:bg-glaz-cream/50'
              }`}
              aria-expanded={openIndex === index}
            >
              <span className={`font-gotu text-lg md:text-xl transition-colors ${
                openIndex === index ? 'text-glaz-sage' : 'text-glaz-dark'
              }`}>
                {item.question}
              </span>
              <span className={`flex-shrink-0 transition-transform duration-300 ${
                 openIndex === index ? 'rotate-180 text-glaz-sage' : 'text-gray-400'
              }`}>
                {openIndex === index ? <Minus size={24} strokeWidth={1} /> : <Plus size={24} strokeWidth={1} />}
              </span>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 md:p-8 pt-0 font-lato text-gray-600 leading-relaxed border-t border-glaz-dark/5 bg-glaz-cream">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;