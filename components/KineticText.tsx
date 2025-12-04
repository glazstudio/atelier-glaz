import React from 'react';

interface KineticTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span';
}

const KineticText: React.FC<KineticTextProps> = ({ text, className = '', as = 'h1' }) => {
  const Component = as as any;
  const words = text.split(' ');

  return (
    <Component className={`${className} overflow-hidden`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2 whitespace-nowrap">
          {word.split('').map((char, charIndex) => (
            <span 
              key={`${wordIndex}-${charIndex}`} 
              className="char-kinetic"
              style={{ animationDelay: `${(wordIndex * 100) + (charIndex * 30)}ms` }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </Component>
  );
};

export default KineticText;