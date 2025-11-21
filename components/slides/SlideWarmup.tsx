import React, { useState } from 'react';

interface SlideWarmupProps {
  onScore: (points: number) => void;
}

export const SlideWarmup: React.FC<SlideWarmupProps> = ({ onScore }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string>("");

  const handleChoice = (choice: string) => {
    if (selected) return; // Prevent re-selection
    setSelected(choice);

    if (choice === 'run') {
      onScore(-5);
      setFeedback("DANGEROUS! Bears can run up to 50km/h. Running triggers their chase instinct.");
    } else if (choice === 'climb') {
      onScore(0);
      setFeedback("RISKY. Bears are excellent climbers. This might not save you.");
    } else if (choice === 'calm') {
      onScore(10);
      setFeedback("BEST CHOICE. Back away slowly while facing the bear. Do not turn your back.");
    }
  };

  return (
    <div className="p-8 md:p-12 h-full flex flex-col">
      <h2 className="text-3xl font-bold text-brand-blue mb-2">Warm-Up: What Would You Do?</h2>
      <p className="text-lg text-gray-600 mb-8">Imagine you are walking in a forest in Japan and you see a bear. How do you react?</p>

      <div className="grid md:grid-cols-2 gap-8 flex-grow">
        <div className="rounded-xl overflow-hidden shadow-lg h-64 md:h-auto">
             <img src="https://picsum.photos/600/800" alt="Forest path" className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col gap-4 justify-center">
          <button 
            onClick={() => handleChoice('calm')}
            className={`p-6 rounded-xl border-2 text-left transition-all ${
              selected === 'calm' ? 'bg-green-100 border-green-500' : 'bg-blue-50 border-blue-200 hover:bg-blue-100'
            }`}
          >
            <span className="font-bold text-xl block mb-1">Option A: Stay Calm</span>
            <span className="text-gray-600">I would stay calm, speak gently, and back away slowly.</span>
          </button>

          <button 
            onClick={() => handleChoice('climb')}
            className={`p-6 rounded-xl border-2 text-left transition-all ${
              selected === 'climb' ? 'bg-yellow-100 border-yellow-500' : 'bg-blue-50 border-blue-200 hover:bg-blue-100'
            }`}
          >
            <span className="font-bold text-xl block mb-1">Option B: Climb</span>
            <span className="text-gray-600">I would climb the nearest tree to escape.</span>
          </button>

          <button 
            onClick={() => handleChoice('run')}
            className={`p-6 rounded-xl border-2 text-left transition-all ${
              selected === 'run' ? 'bg-red-100 border-red-500' : 'bg-blue-50 border-blue-200 hover:bg-blue-100'
            }`}
          >
            <span className="font-bold text-xl block mb-1">Option C: Run</span>
            <span className="text-gray-600">I would turn around and run away as fast as possible.</span>
          </button>
        </div>
      </div>

      {feedback && (
        <div className={`mt-6 p-4 rounded-lg font-bold text-center text-lg animate-shake ${
          selected === 'run' ? 'bg-red-100 text-red-800' : 
          selected === 'climb' ? 'bg-yellow-100 text-yellow-800' : 
          'bg-green-100 text-green-800'
        }`}>
          {feedback}
        </div>
      )}
    </div>
  );
};
