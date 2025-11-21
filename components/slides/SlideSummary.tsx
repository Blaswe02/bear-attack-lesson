import React from "react";

type SlideSummaryProps = {
  score: number;
  totalSlides: number;
  onRestart: () => void;
};

const SlideSummary: React.FC<SlideSummaryProps> = ({
  score,
  totalSlides,
  onRestart,
}) => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Lesson Summary</h2>
      <p className="mb-2">Great job finishing the bear attack lesson!</p>
      <p className="mb-4">
        Your score: <strong>{score}</strong> points out of{" "}
        <strong>{totalSlides}</strong>.
      </p>
      <button
        onClick={onRestart}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Start again
      </button>
    </div>
  );
};

export default SlideSummary;
