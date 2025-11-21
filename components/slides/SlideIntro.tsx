import React from 'react';
import { Play } from 'lucide-react';

interface SlideIntroProps {
  onStart: () => void;
}

export const SlideIntro: React.FC<SlideIntroProps> = ({ onStart }) => {
  return (
    <div className="h-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-64 md:h-auto relative">
        <img
  src="/bear-front-page.jpg"
  alt="Bear in habitat"
  className="absolute inset-0 w-full h-full object-cover"
/>

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:hidden" />
      </div>
      <div className="w-full md:w-1/2 p-12 flex flex-col justify-center bg-white">
        <span className="text-brand-blue font-bold tracking-widest text-sm uppercase mb-4">Breaking News English</span>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Japan & The <br/>
          <span className="text-red-700">Bear Problem</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Understanding news about wildlife, rising dangers, and emergency measures.
        </p>
        
        <button 
          onClick={onStart}
          className="group flex items-center gap-3 bg-brand-blue text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all transform hover:translate-x-2 w-fit"
        >
          Start Lesson
          <Play size={20} className="fill-current" />
        </button>
      </div>
    </div>
  );
};
