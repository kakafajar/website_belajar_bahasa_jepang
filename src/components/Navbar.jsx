import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, BookOpen, HelpCircle } from './Icons';

/**
 * Komponen Navbar dengan dropdown navigasi modular dan dukungan responsif mobile
 */
export default function Navbar({ currentView, currentCategory, onNavigate }) {
  const [learnDropdownOpen, setLearnDropdownOpen] = useState(false);
  const [quizDropdownOpen, setQuizDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const learnMenuRef = useRef(null);
  const quizMenuRef = useRef(null);

  // Menutup dropdown desktop saat klik di luar area
  useEffect(() => {
    function handleClickOutside(event) {
      if (learnMenuRef.current && !learnMenuRef.current.contains(event.target)) {
        setLearnDropdownOpen(false);
      }
      if (quizMenuRef.current && !quizMenuRef.current.contains(event.target)) {
        setQuizDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelectNav = (view, category) => {
    onNavigate(view, category);
    setLearnDropdownOpen(false);
    setQuizDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const isLearnActive = currentView === 'learn';
  const isQuizActive = currentView === 'quiz';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <button
            type="button"
            onClick={() => handleSelectNav('learn', 'hiragana')}
            className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-600 rounded-lg p-1"
            title="Kembali ke Beranda Belajar"
          >
            <span className="w-9 h-9 rounded-lg bg-crimson-600 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-crimson-700 transition-colors">
              日
            </span>
            <div>
              <span className="text-lg font-bold text-slate-900 tracking-tight block leading-tight">
                NihongoLearn
              </span>
              <span className="text-xs text-slate-500 font-medium">Belajar Jepang 🇯🇵</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2" aria-label="Navigasi Utama">
            {/* Dropdown Menu Belajar */}
            <div className="relative" ref={learnMenuRef}>
              <button
                type="button"
                onClick={() => {
                  setLearnDropdownOpen(!learnDropdownOpen);
                  setQuizDropdownOpen(false);
                }}
                aria-expanded={learnDropdownOpen}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isLearnActive
                    ? 'bg-crimson-50 text-crimson-700'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <BookOpen size={17} className={isLearnActive ? 'text-crimson-600' : 'text-slate-500'} />
                <span>Belajar</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    learnDropdownOpen ? 'rotate-180 text-crimson-600' : 'text-slate-400'
                  }`}
                />
              </button>

              {learnDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-200 py-1.5 z-50 animate-in fade-in slide-in-from-top-1">
                  <button
                    type="button"
                    onClick={() => handleSelectNav('learn', 'hiragana')}
                    className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors ${
                      isLearnActive && currentCategory === 'hiragana'
                        ? 'bg-crimson-50 text-crimson-700 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span>Hiragana (ひらがな)</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600">46 Huruf</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelectNav('learn', 'katakana')}
                    className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors ${
                      isLearnActive && currentCategory === 'katakana'
                        ? 'bg-crimson-50 text-crimson-700 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span>Katakana (カタカナ)</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600">46 Huruf</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelectNav('learn', 'kanji')}
                    className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors ${
                      isLearnActive && currentCategory === 'kanji'
                        ? 'bg-crimson-50 text-crimson-700 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span>Kanji N5 (漢字)</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600">Dasar N5</span>
                  </button>
                </div>
              )}
            </div>

            {/* Dropdown Menu Kuis */}
            <div className="relative" ref={quizMenuRef}>
              <button
                type="button"
                onClick={() => {
                  setQuizDropdownOpen(!quizDropdownOpen);
                  setLearnDropdownOpen(false);
                }}
                aria-expanded={quizDropdownOpen}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isQuizActive
                    ? 'bg-crimson-50 text-crimson-700'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <HelpCircle size={17} className={isQuizActive ? 'text-crimson-600' : 'text-slate-500'} />
                <span>Kuis</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    quizDropdownOpen ? 'rotate-180 text-crimson-600' : 'text-slate-400'
                  }`}
                />
              </button>

              {quizDropdownOpen && (
                <div className="absolute left-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-slate-200 py-1.5 z-50 animate-in fade-in slide-in-from-top-1">
                  <button
                    type="button"
                    onClick={() => handleSelectNav('quiz', 'hiragana')}
                    className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors ${
                      isQuizActive && currentCategory === 'hiragana'
                        ? 'bg-crimson-50 text-crimson-700 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span>Kuis Hiragana</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600">10 Soal</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelectNav('quiz', 'katakana')}
                    className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors ${
                      isQuizActive && currentCategory === 'katakana'
                        ? 'bg-crimson-50 text-crimson-700 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span>Kuis Katakana</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600">10 Soal</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelectNav('quiz', 'kanji')}
                    className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors ${
                      isQuizActive && currentCategory === 'kanji'
                        ? 'bg-crimson-50 text-crimson-700 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span>Kuis Kanji N5</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600">10 Soal</span>
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Quick Active Badge (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
              Mode: {isLearnActive ? 'Belajar' : 'Kuis'} ({currentCategory.toUpperCase()})
            </span>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-600"
              aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4">
          {/* Section Belajar Mobile */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">
              <BookOpen size={14} />
              <span>Modul Belajar</span>
            </div>
            <div className="grid grid-cols-1 gap-1">
              <button
                type="button"
                onClick={() => handleSelectNav('learn', 'hiragana')}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${
                  isLearnActive && currentCategory === 'hiragana'
                    ? 'bg-crimson-50 text-crimson-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Hiragana</span>
                <span className="text-xs text-slate-400">46 Huruf</span>
              </button>
              <button
                type="button"
                onClick={() => handleSelectNav('learn', 'katakana')}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${
                  isLearnActive && currentCategory === 'katakana'
                    ? 'bg-crimson-50 text-crimson-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Katakana</span>
                <span className="text-xs text-slate-400">46 Huruf</span>
              </button>
              <button
                type="button"
                onClick={() => handleSelectNav('learn', 'kanji')}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${
                  isLearnActive && currentCategory === 'kanji'
                    ? 'bg-crimson-50 text-crimson-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Kanji N5</span>
                <span className="text-xs text-slate-400">Dasar N5</span>
              </button>
            </div>
          </div>

          {/* Section Kuis Mobile */}
          <div className="pt-2 border-t border-slate-100">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">
              <HelpCircle size={14} />
              <span>Modul Kuis</span>
            </div>
            <div className="grid grid-cols-1 gap-1">
              <button
                type="button"
                onClick={() => handleSelectNav('quiz', 'hiragana')}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${
                  isQuizActive && currentCategory === 'hiragana'
                    ? 'bg-crimson-50 text-crimson-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Kuis Hiragana</span>
                <span className="text-xs text-slate-400">10 Soal</span>
              </button>
              <button
                type="button"
                onClick={() => handleSelectNav('quiz', 'katakana')}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${
                  isQuizActive && currentCategory === 'katakana'
                    ? 'bg-crimson-50 text-crimson-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Kuis Katakana</span>
                <span className="text-xs text-slate-400">10 Soal</span>
              </button>
              <button
                type="button"
                onClick={() => handleSelectNav('quiz', 'kanji')}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${
                  isQuizActive && currentCategory === 'kanji'
                    ? 'bg-crimson-50 text-crimson-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Kuis Kanji N5</span>
                <span className="text-xs text-slate-400">10 Soal</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
