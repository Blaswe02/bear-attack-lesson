import React from 'react';
import { VOCABULARY_LIST } from '../../constants';
import { PawPrint, Trees, Dna, Thermometer, Target, Sun, TrendingUp, Shield } from 'lucide-react';

export const SlideVocabulary: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'paw': return <PawPrint size={32} />;
      case 'tree': return <Trees size={32} />;
      case 'dna': return <Dna size={32} />;
      case 'thermometer': return <Thermometer size={32} />;
      case 'target': return <Target size={32} />;
      case 'sun': return <Sun size={32} />;
      case 'trend-up': return <TrendingUp size={32} />;
      case 'shield': return <Shield size={32} />;
      default: return <PawPrint size={32} />;
    }
  };

  return (
    <div className="p-8 md:p-12 h-full overflow-y-auto">
      <h2 className="text-3xl font-bold text-brand-blue mb-2">Vocabulary Boost</h2>
      <p className="text-lg text-gray-600 mb-8">Learn these important words before we read the news.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {VOCABULARY_LIST.map((item, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
            <div className="text-brand-blue mb-4 p-3 bg-blue-50 rounded-full w-fit group-hover:bg-blue-100 transition-colors">
              {getIcon(item.icon)}
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-900">{item.word}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
