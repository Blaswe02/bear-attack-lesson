import React from 'react';
import { RotateCcw, Trophy } from 'lucide-react';

interface SlideSummaryProps {
  score: number;
  totalSlides: number;
  onRestart: () => void;
}

export const SlideSummary: React.FC<SlideSummaryProps> = ({ score, onRestart }) => {
  return (
    <div className="p-8 md:p-12 h-full flex flex-col items-center justify-center text-center">
      <div className="bg-yellow-100 p-8 rounded-full mb-6 animate-bounce">
        <Trophy size={64} className="text-yellow-600" />
      </div>
      
      <h2 className="text-4xl font-bold text-brand-blue mb-4">Lesson Complete!</h2>
      <p className="text-xl text-gray-600 mb-8">You are now better prepared to discuss wildlife news.</p>

      <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg mb-10 w-full max-w-md">
        <div className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-2">Final Score</div>
        <div className="text-6xl font-bold text-brand-blue">{score}</div>
        <div className="text-sm text-gray-400 mt-2">Points gathered</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-10">
        <div className="bg-blue-50 p-6 rounded-xl text-left">
            <h3 className="font-bold text-blue-800 mb-2">Reading</h3>
            <p className="text-sm text-blue-600">Identified problems, causes, and solutions regarding bear attacks.</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl text-left">
            <h3 className="font-bold text-blue-800 mb-2">Vocabulary</h3>
            <p className="text-sm text-blue-600">Learned terms like 'surged', 'buffer zone', and 'habitat'.</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl text-left">
            <h3 className="font-bold text-blue-800 mb-2">Safety</h3>
            <p className="text-sm text-blue-600">Discussed how to react calmly in dangerous situations.</p>
        </div>
      </div>

      <button 
        onClick={onRestart}
        className="flex items-center gap-2 text-gray-500 hover:text-brand-blue transition-colors"
      >
        <RotateCcw size={20} />
        Restart Lesson
      </button>
    </div>
  );
};
