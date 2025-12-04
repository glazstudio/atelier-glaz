import React, { useState, useRef, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ 
  beforeImage, 
  afterImage,
  beforeLabel = "Original",
  afterLabel = "Retouché" 
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let clientX;

    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as React.MouseEvent).clientX;
    }

    const relativeX = clientX - containerRect.left;
    const percentage = Math.min(Math.max((relativeX / containerRect.width) * 100, 0), 100);
    
    setSliderPosition(percentage);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video overflow-hidden cursor-ew-resize border border-glaz-dark select-none group"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <img src={afterImage} alt={afterLabel} className="w-full h-full object-cover" />
        <span className="absolute top-4 right-4 bg-glaz-dark text-glaz-cream text-xs font-bold px-2 py-1 uppercase tracking-widest z-10">
          {afterLabel}
        </span>
      </div>

      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img src={beforeImage} alt={beforeLabel} className="w-full h-full object-cover max-w-none" style={{ width: containerRef.current?.offsetWidth }} />
        <span className="absolute top-4 left-4 bg-glaz-cream text-glaz-dark text-xs font-bold px-2 py-1 uppercase tracking-widest z-10">
          {beforeLabel}
        </span>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-glaz-beige z-20 flex items-center justify-center pointer-events-none group-hover:bg-white transition-colors"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-8 h-8 bg-glaz-beige rounded-full flex items-center justify-center -ml-0.5 shadow-lg group-hover:bg-white group-hover:text-glaz-dark transition-colors">
          <MoveHorizontal size={16} className="text-glaz-dark" />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;