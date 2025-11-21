import React, { useState } from 'react';
import { TRUE_FALSE_QUESTIONS } from '../../constants';
import { Check, X } from 'lucide-react';

interface SlideTrueFalseProps {
  onScore: (points: number) => void;
}

export const SlideTrueFalse: React.FC<SlideTrueFalseProps> = ({ onScore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answered, setAnswered] = useState<boolean[]>(new Array(TRUE_FALSE_QUESTIONS.length).fill(false));
  const [feedback, setFeedback] = useState<{correct: boolean, msg: string} | null>(null);

  const handleAnswer = (userSaysTrue: boolean) => {
    if (answered[currentIndex]) return;

    const question = TRUE_FALSE_QUESTIONS[currentIndex];
    const isCorrect = userSaysTrue === question.isTrue;

    const newAnswered = [...answered];
    newAnswered[currentIndex] = true;
    setAnswered(newAnswered);

    if (isCorrect) {
      onScore(10);
      setFeedback({ correct: true, msg: "Correct! " + question.explanation });
    } else {
      onScore(-5); // Trigger Bear Claw in parent
      setFeedback({ correct: false, msg: "Incorrect. " + question.explanation });
    }
  };

  const nextQuestion = () => {
    if (currentIndex < TRUE_FALSE_QUESTIONS.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setFeedback(null);
    }
  };

  const currentQ = TRUE_FALSE_QUESTIONS[currentIndex];

  return (
    <div className="p-8 md:p-12 h-full flex flex-col items-center justify-center">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-brand-blue mb-2">True or False?</h2>
        <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Question {currentIndex + 1} of {TRUE_FALSE_QUESTIONS.length}</div>
      </div>

      <div className="bg-white w-full max-w-2xl p-8 rounded-2xl shadow-xl border border-gray-100 mb-8 min-h-[200px] flex items-center justify-center">
        <p className="text-2xl font-medium text-center text-gray-800">{currentQ.question}</p>
      </div>

      {!feedback ? (
        <div className="flex gap-6">
          <button 
            onClick={() => handleAnswer(true)}
            className="flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-green-600 transition-all shadow-lg hover:translate-y-1"
          >
            <Check size={24} /> TRUE
          </button>
          <button 
            onClick={() => handleAnswer(false)}
            className="flex items-center gap-2 bg-red-500 text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-red-600 transition-all shadow-lg hover:translate-y-1"
          >
            <X size={24} /> FALSE
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 animate-fade-in">
          <div className={`p-6 rounded-xl text-lg font-bold text-center max-w-2xl ${feedback.correct ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {feedback.msg}
          </div>
          
          {currentIndex < TRUE_FALSE_QUESTIONS.length - 1 ? (
             <button 
             onClick={nextQuestion}
             className="mt-4 bg-brand-blue text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
           >
             Next Question
           </button>
          ) : (
            <div className="text-brand-blue font-bold mt-4 text-xl">Quiz Complete!</div>
          )}
         
        </div>
      )}
    </div>
  );
};
