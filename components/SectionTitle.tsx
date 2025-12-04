import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'left' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="font-gotu text-4xl md:text-5xl text-glaz-dark mb-2">
        {title}
      </h2>
      {subtitle && (
        <div className="flex items-center gap-4 justify-center md:justify-start">
            {align === 'left' && <div className="h-[1px] w-12 bg-glaz-sage"></div>}
            <p className="font-cormorant italic text-2xl text-glaz-sage">
            {subtitle}
            </p>
            {align === 'center' && <div className="h-[1px] w-12 bg-glaz-sage"></div>}
        </div>
      )}
    </div>
  );
};

export default SectionTitle;