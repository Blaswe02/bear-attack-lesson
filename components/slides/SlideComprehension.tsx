import React, { useState } from 'react';

interface SlideComprehensionProps {
  onScore: (points: number) => void;
}

export const SlideComprehension: React.FC<SlideComprehensionProps> = ({ onScore }) => {
  const [revealed, setRevealed] = useState<{problem: boolean; cause: boolean; solution: boolean}>({
    problem: false,
    cause: false,
    solution: false
  });

  const reveal = (key: 'problem' | 'cause' | 'solution') => {
    if (!revealed[key]) {
      setRevealed(prev => ({ ...prev, [key]: true }));
      onScore(5);
    }
  };

  return (
    <div className="p-8 md:p-12 h-full">
      <h2 className="text-3xl font-bold text-brand-blue mb-6">Comprehension Check</h2>
      <p className="text-lg text-gray-600 mb-8">Based on the reading, identify the Problem, Cause, and Solution.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Problem */}
        <div 
            onClick={() => reveal('problem')}
            className="bg-red-50 border-2 border-red-100 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all h-80 flex flex-col"
        >
            <div className="text-red-500 font-bold uppercase tracking-widest mb-4">The Problem</div>
            <div className="flex-grow flex items-center justify-center">
                {!revealed.problem ? (
                    <span className="text-6xl text-red-200 font-bold">?</span>
                ) : (
                    <ul className="text-left space-y-3 list-disc pl-5 animate-fade-in">
                        <li>Record number of attacks</li>
                        <li>13 dead, 100+ injured (2025)</li>
                        <li>Highest death toll since 2006</li>
                    </ul>
                )}
            </div>
            <div className="text-center text-sm text-red-400 mt-4">Click to reveal</div>
        </div>

        {/* Cause */}
        <div 
            onClick={() => reveal('cause')}
            className="bg-yellow-50 border-2 border-yellow-100 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all h-80 flex flex-col"
        >
            <div className="text-yellow-600 font-bold uppercase tracking-widest mb-4">The Causes</div>
            <div className="flex-grow flex items-center justify-center">
                {!revealed.cause ? (
                    <span className="text-6xl text-yellow-200 font-bold">?</span>
                ) : (
                    <ul className="text-left space-y-3 list-disc pl-5 animate-fade-in">
                        <li>Shortage of beech nuts (Climate Change)</li>
                        <li>Fewer hunters</li>
                        <li>Depopulation of rural areas</li>
                    </ul>
                )}
            </div>
            <div className="text-center text-sm text-yellow-500 mt-4">Click to reveal</div>
        </div>

        {/* Solution */}
        <div 
            onClick={() => reveal('solution')}
            className="bg-green-50 border-2 border-green-100 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all h-80 flex flex-col"
        >
            <div className="text-green-600 font-bold uppercase tracking-widest mb-4">The Solution</div>
            <div className="flex-grow flex items-center justify-center">
                {!revealed.solution ? (
                    <span className="text-6xl text-green-200 font-bold">?</span>
                ) : (
                    <ul className="text-left space-y-3 list-disc pl-5 animate-fade-in">
                        <li>Emergency measures</li>
                        <li>Region-specific capture targets</li>
                        <li>Creating "Buffer Zones"</li>
                    </ul>
                )}
            </div>
            <div className="text-center text-sm text-green-500 mt-4">Click to reveal</div>
        </div>
      </div>
    </div>
  );
};
