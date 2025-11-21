import React, { useState, useEffect } from 'react';
import { MATCHING_PAIRS } from '../../constants';

interface SlideMatchingProps {
  onScore: (points: number) => void;
}

export const SlideMatching: React.FC<SlideMatchingProps> = ({ onScore }) => {
  const [shuffledTerms, setShuffledTerms] = useState<{id: string, text: string}[]>([]);
  const [shuffledDefs, setShuffledDefs] = useState<{id: string, text: string}[]>([]);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [selectedDef, setSelectedDef] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);

  useEffect(() => {
    // Shuffle logic
    const terms = MATCHING_PAIRS.map(p => ({ id: p.id, text: p.term })).sort(() => Math.random() - 0.5);
    const defs = MATCHING_PAIRS.map(p => ({ id: p.id, text: p.match })).sort(() => Math.random() - 0.5);
    setShuffledTerms(terms);
    setShuffledDefs(defs);
  }, []);

  useEffect(() => {
    if (selectedTerm && selectedDef) {
      if (selectedTerm === selectedDef) {
        // Match
        setMatchedIds(prev => [...prev, selectedTerm]);
        onScore(5);
        setSelectedTerm(null);
        setSelectedDef(null);
      } else {
        // No match
        onScore(-2); // Penalty
        const timer = setTimeout(() => {
          setSelectedTerm(null);
          setSelectedDef(null);
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, [selectedTerm, selectedDef, onScore]);

  const isComplete = matchedIds.length === MATCHING_PAIRS.length;

  return (
    <div className="p-8 md:p-12 h-full">
      <h2 className="text-3xl font-bold text-brand-blue mb-2">Synonym Match</h2>
      <p className="text-lg text-gray-600 mb-8">Match the word from the article with its synonym.</p>

      {isComplete ? (
        <div className="flex flex-col items-center justify-center h-64">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-3xl font-bold text-green-600">All Matched!</h3>
            <p className="text-gray-500">Great job expanding your vocabulary.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-12">
            <div className="space-y-4">
                <h3 className="font-bold text-gray-400 uppercase tracking-wider text-sm">Words</h3>
                {shuffledTerms.map(item => (
                    <button
                        key={item.id}
                        disabled={matchedIds.includes(item.id)}
                        onClick={() => setSelectedTerm(item.id)}
                        className={`w-full p-4 rounded-xl border-2 text-left font-bold transition-all ${
                            matchedIds.includes(item.id) ? 'opacity-0 pointer-events-none' :
                            selectedTerm === item.id ? 'bg-blue-100 border-blue-500 text-brand-blue scale-105 shadow-md' : 
                            'bg-white border-gray-200 hover:border-blue-300'
                        }`}
                    >
                        {item.text}
                    </button>
                ))}
            </div>

            <div className="space-y-4">
                <h3 className="font-bold text-gray-400 uppercase tracking-wider text-sm">Synonyms</h3>
                {shuffledDefs.map(item => (
                    <button
                        key={item.id}
                        disabled={matchedIds.includes(item.id)}
                        onClick={() => setSelectedDef(item.id)}
                        className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                            matchedIds.includes(item.id) ? 'opacity-0 pointer-events-none' :
                            selectedDef === item.id ? 'bg-blue-100 border-blue-500 text-brand-blue scale-105 shadow-md' : 
                            'bg-white border-gray-200 hover:border-blue-300'
                        }`}
                    >
                        {item.text}
                    </button>
                ))}
            </div>
        </div>
      )}
    </div>
  );
};
