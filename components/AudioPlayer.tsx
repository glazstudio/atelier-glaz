import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

interface AudioPlayerProps {
  url: string;
  title: string;
  genre: string;
  duration: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ url, title, genre, duration }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-glaz-dark border border-glaz-beige/20 p-4 flex items-center gap-4 group hover:border-glaz-beige transition-colors">
      <audio ref={audioRef} src={url} onEnded={() => setIsPlaying(false)} />
      
      <button 
        onClick={togglePlay}
        className="w-12 h-12 bg-glaz-beige text-glaz-dark flex items-center justify-center rounded-none hover:bg-white transition-colors flex-shrink-0"
      >
        {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
      </button>

      <div className="flex-grow">
        <h4 className="font-gotu text-glaz-cream text-lg">{title}</h4>
        <div className="flex items-center gap-2">
           <span className="text-xs text-glaz-beige uppercase tracking-wider bg-white/10 px-1">{genre}</span>
           <span className="text-xs text-gray-400 font-lato">{duration}</span>
        </div>
      </div>

      {isPlaying && (
        <div className="flex items-center gap-1">
          <div className="w-1 h-3 bg-glaz-beige animate-pulse"></div>
          <div className="w-1 h-5 bg-glaz-beige animate-pulse delay-75"></div>
          <div className="w-1 h-2 bg-glaz-beige animate-pulse delay-150"></div>
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;