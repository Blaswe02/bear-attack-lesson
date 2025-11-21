import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SlideType } from './types';
import BearClaw from './components/BearClaw';
import ProgressBar from './components/ProgressBar';

// Slide Components
import SlideIntro from './components/slides/SlideIntro';
import SlideWarmup from './components/slides/SlideWarmup';
import SlideVocabulary from './components/slides/SlideVocabulary';
import SlideReading from './components/slides/SlideReading';
import SlideComprehension from './components/slides/SlideComprehension';
import SlideTrueFalse from './components/slides/SlideTrueFalse';
import SlideMatching from './components/slides/SlideMatching';
import SlideSummary from './components/slides/SlideSummary';




const SLIDE_ORDER = [
  SlideType.INTRO,
  SlideType.WARMUP,
  SlideType.VOCABULARY,
  SlideType.READING,
  SlideType.COMPREHENSION,
  SlideType.TRUE_FALSE,
  SlideType.MATCHING,
  SlideType.SUMMARY
];

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showClaw, setShowClaw] = useState(false);

  const currentSlideType = SLIDE_ORDER[currentSlideIndex];

  const handleNext = () => {
    if (currentSlideIndex < SLIDE_ORDER.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleScoreUpdate = (points: number) => {
    if (points < 0) {
      setShowClaw(true);
      // Don't reduce score below 0
      setScore(prev => Math.max(0, prev + points));
    } else {
      setScore(prev => prev + points);
    }
  };

  const renderSlide = () => {
    switch (currentSlideType) {
      case SlideType.INTRO:
        return <SlideIntro onStart={handleNext} />;
      case SlideType.WARMUP:
        return <SlideWarmup onScore={handleScoreUpdate} />;
      case SlideType.VOCABULARY:
        return <SlideVocabulary />;
      case SlideType.READING:
        return <SlideReading />;
      case SlideType.COMPREHENSION:
        return <SlideComprehension onScore={handleScoreUpdate} />;
      case SlideType.TRUE_FALSE:
        return <SlideTrueFalse onScore={handleScoreUpdate} />;
      case SlideType.MATCHING:
        return <SlideMatching onScore={handleScoreUpdate} />;
      case SlideType.SUMMARY:
        return <SlideSummary score={score} totalSlides={SLIDE_ORDER.length} onRestart={() => {
          setScore(0);
          setCurrentSlideIndex(0);
        }} />;
      default:
        return <div>Unknown Slide</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans">
      {/* Global Bear Claw Effect */}
      <BearClaw trigger={showClaw} onComplete={() => setShowClaw(false)} />

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-xl min-h-[80vh] relative overflow-hidden border border-gray-100">
           {renderSlide()}
        </div>
      </main>

      {/* Navigation Footer */}
      <ProgressBar 
        current={currentSlideIndex} 
        total={SLIDE_ORDER.length} 
        score={score} 
      />

      {/* Navigation Buttons (Floating) */}
      <div className="fixed bottom-24 right-8 flex gap-4 z-30">
        <button 
          onClick={handlePrev}
          disabled={currentSlideIndex === 0}
          className="bg-white p-3 rounded-full shadow-lg text-brand-blue hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-transform hover:scale-110"
        >
          <ArrowLeft size={24} />
        </button>
        <button 
          onClick={handleNext}
          disabled={currentSlideIndex === SLIDE_ORDER.length - 1}
          className="bg-brand-blue p-3 rounded-full shadow-lg text-white hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-transform hover:scale-110"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default App;
