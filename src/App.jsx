import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LearnView from './components/LearnView';
import QuizView from './components/QuizView';

export default function App() {
  const [currentView, setCurrentView] = useState('learn'); // 'learn' | 'quiz'
  const [currentCategory, setCurrentCategory] = useState('hiragana'); // 'hiragana' | 'katakana' | 'kanji'

  const handleNavigate = (view, category) => {
    setCurrentView(view);
    if (category) {
      setCurrentCategory(category);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartQuiz = (category) => {
    setCurrentCategory(category);
    setCurrentView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToLearn = (category) => {
    setCurrentCategory(category);
    setCurrentView('learn');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Navigation Header */}
      <Navbar
        currentView={currentView}
        currentCategory={currentCategory}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'learn' ? (
          <LearnView
            category={currentCategory}
            onStartQuiz={handleStartQuiz}
          />
        ) : (
          <QuizView
            key={`quiz-${currentCategory}`} // Reset state saat berganti kategori
            category={currentCategory}
            onSwitchCategory={(cat) => setCurrentCategory(cat)}
            onBackToLearn={handleBackToLearn}
          />
        )}
      </main>

      {/* Footer Bersih dan Informatif */}
      <footer className="bg-white border-t border-slate-200 mt-16 py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <div className="flex items-center justify-center gap-2 font-semibold text-slate-700">
            <span className="w-2 h-2 rounded-full bg-crimson-600"></span>
            <span>NihongoLearn - Belajar Bahasa Jepang Interaktif</span>
          </div>
          <p className="text-slate-400">
            Modul latihan aksara Hiragana, Katakana, dan Kanji N5 dengan audio Web Speech API sintetis.
          </p>
        </div>
      </footer>
    </div>
  );
}
