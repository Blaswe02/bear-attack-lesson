import React, { useState } from 'react';
import { READING_TEXT } from '../../constants';
import { Highlighter } from 'lucide-react';

export const SlideReading: React.FC = () => {
  const [highlight, setHighlight] = useState(false);

  // Simple highlighting logic for key terms (wrapped in spans in a real app with regex, 
  // here visually simulated by bolding if highlight is on)
  const getStyledText = () => {
    if (!highlight) return READING_TEXT;
    
    const keywords = ['emergency measures', 'bear attacks', '13 people', 'Wildlife management', 'buffer zone', 'Asian black bear', 'Ussuri brown bears', 'climate change', 'shortage of beech nuts', 'hunters', 'depopulation'];
    let text = READING_TEXT;
    
    // Note: In a real react app doing this safely requires a parser. 
    // For this demo we will just render the plain text but change the container class.
    return text;
  };

  return (
    <div className="p-8 md:p-12 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div>
            <h2 className="text-3xl font-bold text-brand-blue">Reading: Japan's Emergency Plan</h2>
            <p className="text-gray-500 mt-1">Read the article below carefully.</p>
        </div>
        <button 
            onClick={() => setHighlight(!highlight)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border ${highlight ? 'bg-yellow-100 border-yellow-400 text-yellow-800' : 'bg-white border-gray-300 text-gray-600'}`}
        >
            <Highlighter size={18} />
            {highlight ? 'Highlights On' : 'Highlight Key Terms'}
        </button>
      </div>

      <div className="flex-grow bg-gray-50 p-8 rounded-xl border border-gray-200 overflow-y-auto shadow-inner">
        {READING_TEXT.split('\n').map((paragraph, idx) => (
           paragraph.trim() && (
             <p key={idx} className={`mb-6 text-lg leading-8 text-gray-800 ${highlight ? 'font-medium' : ''}`}>
               {/* Crude highlighting for visual demo */}
               {highlight ? (
                   paragraph.split(' ').map((word, wIdx) => {
                       const isKey = ['bears', 'Japan', 'attacks', 'climate', 'buffer', 'hunters'].some(k => word.toLowerCase().includes(k.toLowerCase()));
                       return isKey 
                        ? <span key={wIdx} className="bg-yellow-200 px-1 rounded mx-0.5">{word}</span> 
                        : <span key={wIdx} className="mx-0.5">{word}</span>
                   })
               ) : (
                   paragraph
               )}
             </p>
           )
        ))}
      </div>
      <div className="mt-4 flex gap-4 text-sm text-gray-500 justify-center">
          <span>Sources: japantimes.co.jp</span>
          <span>•</span>
          <span>kyodonews.com</span>
      </div>
    </div>
  );
};
