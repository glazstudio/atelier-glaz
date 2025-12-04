import React, { useState, useEffect } from 'react';

const ReadingProgress: React.FC = () => {
  const [width, setWidth] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;
    
    if (totalHeight <= 0) {
        setWidth(0);
        return;
    }

    const percentage = (scrollPosition / totalHeight) * 100;
    setWidth(Math.min(100, Math.max(0, percentage)));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-[9999] bg-transparent pointer-events-none mix-blend-normal">
      <div 
        className="h-full bg-glaz-beige transition-all duration-100 ease-out shadow-[0_0_15px_rgba(213,200,161,0.9)]" 
        style={{ width: `${width}%` }}
        role="progressbar"
        aria-valuenow={Math.round(width)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};

export default ReadingProgress;