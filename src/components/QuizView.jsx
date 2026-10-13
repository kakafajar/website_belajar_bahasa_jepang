import React, { useState, useEffect } from 'react';
import {
  Volume2,
  VolumeX,
  CheckCircle,
  XCircle,
  RotateCcw,
  BookOpen,
  ArrowRight,
  Award,
  Shuffle,
  Sparkles,
} from './Icons';
import { playJapaneseAudio, quizBank } from '../data/japaneseData';
import { generateRandomQuiz } from '../data/quizGenerator';
import { quizAudio } from '../utils/quizAudio';

// Mengambil kumpulan soal standar terstruktur untuk tiap kategori
function getStandardQuestions(cat) {
  const bank = quizBank[cat] || quizBank.hiragana;
  return bank.map((q) => ({
    ...q,
    typeBadge: q.typeBadge || (cat === 'kanji' ? 'Kanji N5' : cat === 'katakana' ? 'Katakana' : 'Hiragana'),
  }));
}

export default function QuizView({ category, onSwitchCategory, onBackToLearn }) {
  // Secara bawaan, gunakan soal standar agar tidak teracak saat berpindah kategori
  const [isRandomMode, setIsRandomMode] = useState(false);
  const [questions, setQuestions] = useState(() => getStandardQuestions(category));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isMuted, setIsMuted] = useState(() => quizAudio.isMuted());
  const [scoreBump, setScoreBump] = useState(false);

  // Toggle bisukan/aktifkan efek suara
  const handleToggleMute = () => {
    const nextMuted = quizAudio.toggleMute();
    setIsMuted(nextMuted);
  };

  // Saat berpindah kategori (Hiragana/Katakana/Kanji), tampilkan urutan standar yang konsisten
  useEffect(() => {
    setIsRandomMode(false);
    setQuestions(getStandardQuestions(category));
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setUserAnswers([]);
    setIsCompleted(false);
  }, [category]);

  const currentQ = questions[currentQuestionIndex] || questions[0];

  // Memutar suara soal
  const handlePlayQuestionAudio = () => {
    if (!currentQ) return;
    const soundText = currentQ.audioText || currentQ.questionChar;
    setIsPlayingAudio(true);
    playJapaneseAudio(
      soundText,
      () => setIsPlayingAudio(true),
      () => setIsPlayingAudio(false)
    );
  };

  // Memilih opsi jawaban
  const handleSelectOption = (index) => {
    if (isAnswered || !currentQ) return;

    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === currentQ.correctAnswerIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
      setScoreBump(true);
      setTimeout(() => setScoreBump(false), 450);
      quizAudio.playCorrect();
    } else {
      quizAudio.playWrong();
    }

    setUserAnswers((prev) => [
      ...prev,
      {
        questionChar: currentQ.questionChar,
        typeBadge: currentQ.typeBadge,
        selectedOption: index,
        correctIndex: currentQ.correctAnswerIndex,
        isCorrect,
        prompt: currentQ.prompt,
        options: currentQ.options,
        explanation: currentQ.explanation,
      },
    ]);
  };

  // Melangkah ke soal berikutnya atau selesaikan
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
      quizAudio.playFanfare();
    }
  };

  // Fungsi saat tombol "Acak Soal Baru" ditekan oleh pengguna
  const handleShuffleQuestions = () => {
    setIsRandomMode(true);
    setQuestions(generateRandomQuiz(category, 10));
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setUserAnswers([]);
    setIsCompleted(false);
  };

  // Mengembalikan ke soal standar
  const handleResetToStandard = () => {
    setIsRandomMode(false);
    setQuestions(getStandardQuestions(category));
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setUserAnswers([]);
    setIsCompleted(false);
  };

  // Reset kuis saat ini
  const handleRestartQuiz = () => {
    if (isRandomMode) {
      setQuestions(generateRandomQuiz(category, 10));
    } else {
      setQuestions(getStandardQuestions(category));
    }
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setUserAnswers([]);
    setIsCompleted(false);
  };

  const getCategoryTitle = () => {
    if (category === 'katakana') return 'Kuis Katakana';
    if (category === 'kanji') return 'Kuis Kanji N5';
    return 'Kuis Hiragana';
  };

  const progressPercent = questions.length > 0 
    ? Math.round(((currentQuestionIndex + 1) / questions.length) * 100)
    : 0;

  // ===================== HALAMAN HASIL KUIS (SCORECARD) =====================
  if (isCompleted) {
    const finalPercentage = Math.round((score / questions.length) * 100);
    let evaluation = isRandomMode
      ? 'Hebat! Anda berhasil menyelesaikan paket latihan soal acak.'
      : 'Terus berlatih untuk memperkuat ingatan aksara Jepang Anda.';

    if (finalPercentage >= 80) {
      evaluation = 'Luar biasa! Penguasaan karakter Jepang Anda sangat mantap dan akurat.';
    } else if (finalPercentage >= 50) {
      evaluation = 'Bagus! Anda sudah mengenali sebagian besar karakter dengan baik.';
    }

    return (
      <div className="py-8 sm:py-10 lg:py-12 max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl lg:rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 lg:p-12 space-y-6 lg:space-y-8 text-center relative overflow-hidden">
          {/* Confetti Selebrasi saat Kuis Selesai */}
          {finalPercentage >= 50 && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl lg:rounded-3xl" aria-hidden="true">
              {Array.from({ length: 22 }).map((_, i) => (
                <span
                  key={i}
                  className="confetti-piece"
                  style={{
                    left: `${(i * 4.5) + 1}%`,
                    top: '-12px',
                    backgroundColor: ['#e63946', '#10b981', '#3b82f6', '#f59e0b', '#ec4899', '#8b5cf6'][i % 6],
                    animationDelay: `${i * 0.08}s`,
                    animationDuration: `${1.9 + (i % 4) * 0.3}s`,
                    transform: `rotate(${i * 20}deg)`,
                  }}
                />
              ))}
            </div>
          )}

          {/* Ikon Pencapaian dengan Bouncy Animation */}
          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl lg:rounded-3xl bg-crimson-50 text-crimson-600 mx-auto flex items-center justify-center border border-crimson-100 shadow-sm animate-trophy-bounce">
            <Award className="w-8 h-8 lg:w-11 lg:h-11" />
          </div>

          <div className="space-y-1.5 lg:space-y-2">
            <span className="text-xs lg:text-sm font-semibold uppercase tracking-wider text-slate-400">
              Hasil Akhir Latihan ({isRandomMode ? 'Mode Acak' : 'Mode Standar'})
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
              {getCategoryTitle()} Selesai!
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600">{evaluation}</p>
          </div>

          {/* Nilai dan Persentase */}
          <div className="bg-slate-50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-slate-200 flex flex-col sm:flex-row items-center justify-around gap-6">
            <div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-crimson-600">
                {score} <span className="text-lg lg:text-2xl font-medium text-slate-400">/ {questions.length}</span>
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-slate-500 font-medium mt-1">Jawaban Benar</div>
            </div>
            <div className="w-px h-16 bg-slate-200 hidden sm:block"></div>
            <div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800">{finalPercentage}%</div>
              <div className="text-xs sm:text-sm lg:text-base text-slate-500 font-medium mt-1">Tingkat Akurasi</div>
            </div>
          </div>

          {/* Ringkasan Jawaban Soal */}
          <div className="text-left space-y-3.5 pt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-slate-800">Ringkasan Soal:</h3>
              <span className="text-xs sm:text-sm text-slate-500">
                {isRandomMode ? 'Mode Soal Acak' : 'Mode Soal Standar'}
              </span>
            </div>
            <div className="max-h-80 lg:max-h-96 overflow-y-auto space-y-3 pr-1.5 text-xs sm:text-sm">
              {userAnswers.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 lg:p-4 rounded-xl lg:rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    item.isCorrect
                      ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
                      : 'bg-rose-50/60 border-rose-200 text-rose-950'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <span className="font-japanese text-xl lg:text-2xl font-bold shrink-0 bg-white/70 px-2.5 py-1.5 rounded-xl border border-slate-200">
                      {item.questionChar}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-slate-800 text-xs sm:text-sm">Soal {idx + 1}</span>
                        {item.typeBadge && (
                          <span className="px-2 py-0.5 rounded text-[10px] sm:text-xs font-semibold bg-white border border-slate-200 text-slate-600">
                            {item.typeBadge}
                          </span>
                        )}
                      </div>
                      <div className="text-slate-600 text-[11px] sm:text-xs lg:text-sm leading-relaxed">
                        Jawaban Anda: <span className="font-semibold">{item.options[item.selectedOption]}</span> | Kunci: <span className="font-semibold text-emerald-700">{item.options[item.correctIndex]}</span>
                      </div>
                      {item.explanation && (
                        <div className="text-slate-500 text-[10px] sm:text-xs lg:text-xs mt-1.5 pt-1.5 border-t border-slate-200/60">
                          {item.explanation}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="shrink-0 self-end sm:self-center">
                    {item.isCorrect ? (
                      <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold text-xs lg:text-sm bg-white/80 px-2.5 py-1.5 rounded-lg border border-emerald-200">
                        <CheckCircle className="w-4 h-4" /> Benar
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-rose-700 font-semibold text-xs lg:text-sm bg-white/80 px-2.5 py-1.5 rounded-lg border border-rose-200">
                        <XCircle className="w-4 h-4" /> Salah
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-3 lg:gap-4">
            <button
              type="button"
              onClick={handleRestartQuiz}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 lg:px-6 lg:py-3.5 rounded-xl lg:rounded-2xl bg-crimson-600 hover:bg-crimson-700 text-white font-semibold text-sm lg:text-base transition-colors shadow-sm"
            >
              <RotateCcw className="w-4 h-4 lg:w-5 lg:h-5" />
              <span>Ulangi Kuis Ini</span>
            </button>
            <button
              type="button"
              onClick={handleShuffleQuestions}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 lg:px-6 lg:py-3.5 rounded-xl lg:rounded-2xl bg-white border border-crimson-200 hover:bg-crimson-50 text-crimson-700 font-semibold text-sm lg:text-base transition-colors shadow-2xs"
            >
              <Shuffle className="w-4 h-4 lg:w-5 lg:h-5 text-crimson-600" />
              <span>Acak Soal Baru</span>
            </button>
            <button
              type="button"
              onClick={() => onBackToLearn(category)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 lg:px-6 lg:py-3.5 rounded-xl lg:rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm lg:text-base transition-colors"
            >
              <BookOpen className="w-4 h-4 lg:w-5 lg:h-5" />
              <span>Kembali Belajar {category}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ===================== HALAMAN SOAL KUIS AKTIF =====================
  if (!currentQ) return null;

  return (
    <div className="py-4 sm:py-6 lg:py-7 max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 lg:space-y-5">
      {/* Quiz Category Tabs & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 lg:gap-4">
        {/* Tab Kategori (Hiragana / Katakana / Kanji) - Responsif dan Lebih Terbaca */}
        <div className="grid grid-cols-3 sm:flex sm:items-center gap-2 lg:gap-2.5 w-full sm:w-auto bg-slate-100/70 p-1 lg:p-1.5 rounded-xl lg:rounded-2xl sm:bg-transparent sm:p-0">
          {['hiragana', 'katakana', 'kanji'].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                if (cat !== category) {
                  onSwitchCategory(cat);
                }
              }}
              className={`py-2 px-3 sm:py-2 sm:px-4 lg:py-2.5 lg:px-5 rounded-lg lg:rounded-xl text-xs sm:text-sm font-bold capitalize transition-all text-center flex items-center justify-center ${
                category === cat
                  ? 'bg-crimson-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tombol Aksi (SFX Toggle, Acak Soal & Kartu Belajar) */}
        <div className="flex items-center gap-2 lg:gap-3 w-full sm:w-auto">
          {/* Tombol Toggle Efek Suara (SFX) */}
          <button
            type="button"
            onClick={handleToggleMute}
            className={`px-3 py-2 sm:py-2 sm:px-3.5 lg:py-2.5 lg:px-4 rounded-lg lg:rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 lg:gap-2 transition-all shadow-2xs ${
              isMuted
                ? 'bg-slate-100 text-slate-400 border border-slate-200 hover:text-slate-600'
                : 'bg-white text-slate-700 border border-slate-200 hover:text-crimson-600 hover:border-crimson-200'
            }`}
            title={isMuted ? 'Efek Suara: Bisu (Klik untuk aktifkan)' : 'Efek Suara: Aktif (Klik untuk bisukan)'}
            aria-label={isMuted ? 'Aktifkan efek suara' : 'Bisukan efek suara'}
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-crimson-600" />
            )}
            <span className="hidden sm:inline">{isMuted ? 'SFX Bisu' : 'SFX Aktif'}</span>
          </button>

          {isRandomMode ? (
            <button
              type="button"
              onClick={handleResetToStandard}
              className="flex-1 sm:flex-initial justify-center px-3 py-2 sm:py-2 sm:px-3.5 lg:py-2.5 lg:px-4 rounded-lg lg:rounded-xl text-xs sm:text-sm font-semibold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 flex items-center gap-1.5 transition-colors shadow-2xs"
              title="Kembali ke urutan soal standar"
            >
              <span>Soal Standar</span>
            </button>
          ) : null}

          <button
            type="button"
            onClick={handleShuffleQuestions}
            className={`flex-1 sm:flex-initial justify-center px-3 py-2 sm:py-2 sm:px-3.5 lg:py-2.5 lg:px-4 rounded-lg lg:rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 lg:gap-2 transition-all shadow-2xs ${
              isRandomMode
                ? 'bg-crimson-50 border border-crimson-200 text-crimson-700 hover:bg-crimson-100'
                : 'bg-white border border-slate-200 text-slate-700 hover:border-crimson-300 hover:text-crimson-600 hover:bg-crimson-50/50'
            }`}
            title="Klik untuk mengacak soal sekarang"
          >
            <Shuffle className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-crimson-600" />
            <span>{isRandomMode ? 'Acak Lagi' : 'Acak Soal'}</span>
          </button>
          <button
            type="button"
            onClick={() => onBackToLearn(category)}
            className="flex-1 sm:flex-initial justify-center px-3 py-2 sm:py-2 sm:px-3.5 lg:py-2.5 lg:px-4 rounded-lg lg:rounded-xl text-xs sm:text-sm text-slate-600 hover:text-slate-900 bg-white border border-slate-200 sm:border-transparent sm:bg-transparent hover:bg-slate-50 sm:hover:bg-transparent font-medium inline-flex items-center gap-1.5 lg:gap-2 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
            <span>Kartu Belajar</span>
          </button>
        </div>
      </div>

      {/* Main Quiz Card */}
      <div className="bg-white rounded-2xl lg:rounded-3xl border border-slate-200/90 shadow-sm p-5 sm:p-7 lg:p-8 space-y-5 lg:space-y-6">
        {/* Progress Bar & Counter */}
        <div className="space-y-2 lg:space-y-2.5">
          <div className="flex items-center justify-between text-xs sm:text-sm lg:text-base font-semibold text-slate-500">
            <span className="flex items-center gap-2">
              <span className="text-slate-700 font-bold">Soal {currentQuestionIndex + 1} dari {questions.length}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
              {isRandomMode ? (
                <span className="text-crimson-600 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  <span>Mode Acak</span>
                </span>
              ) : (
                <span className="text-slate-500 font-medium">Mode Standar</span>
              )}
            </span>
            <span className="text-slate-600">
              Skor:{' '}
              <span className={`inline-block font-extrabold text-sm sm:text-base lg:text-lg transition-all duration-300 ${scoreBump ? 'animate-score-bump text-crimson-600' : 'text-slate-800'}`}>
                {score}
              </span>
            </span>
          </div>
          <div className="w-full bg-slate-100 h-2 lg:h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-crimson-600 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Karakter Soal, Badge Kategori & Speaker Audio dengan Transisi Halus */}
        <div
          key={currentQuestionIndex}
          className="animate-quiz-card-enter py-6 px-4 sm:py-7 sm:px-6 lg:py-9 lg:px-8 text-center bg-slate-50/80 rounded-2xl lg:rounded-3xl border border-slate-200/80 relative shadow-2xs"
        >
          {/* Badge Tipe Soal di Kiri Atas */}
          {currentQ.typeBadge && (
            <div className="absolute left-3.5 top-3.5 lg:left-5 lg:top-5 px-2.5 py-1 lg:px-3.5 lg:py-1.5 rounded-lg lg:rounded-xl text-[11px] lg:text-xs font-bold bg-white text-crimson-700 border border-crimson-100 shadow-2xs flex items-center gap-1.5">
              <span>{currentQ.typeBadge}</span>
            </div>
          )}

          {/* Tombol Speaker di Kanan Atas */}
          <button
            type="button"
            onClick={handlePlayQuestionAudio}
            className={`absolute right-3.5 top-3.5 lg:right-5 lg:top-5 p-2 lg:p-2.5 rounded-lg lg:rounded-xl text-slate-500 hover:text-crimson-600 hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-600 ${
              isPlayingAudio ? 'bg-white text-crimson-600 playing-audio shadow-sm ring-1 ring-crimson-500' : 'bg-white/70 border border-slate-200/70 hover:border-crimson-200 shadow-2xs'
            }`}
            title="Dengarkan pengucapan audio karakter"
            aria-label="Dengarkan pengucapan soal"
          >
            <Volume2 className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>

          {/* Tampilan Huruf / Kata yang Sangat Jelas dan Skalabel di Layar Desktop */}
          <div
            className={`font-japanese font-normal text-slate-900 mb-2.5 select-all tracking-normal ${
              currentQ.questionChar.length > 5
                ? 'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl'
                : currentQ.questionChar.length > 2
                ? 'text-5xl sm:text-6xl lg:text-7xl xl:text-8xl'
                : 'text-7xl sm:text-8xl lg:text-9xl xl:text-[130px]'
            }`}
          >
            {currentQ.questionChar}
          </div>
          <div className="text-sm sm:text-base lg:text-lg text-slate-700 font-medium px-2 leading-relaxed max-w-xl mx-auto">
            {currentQ.prompt}
          </div>
        </div>

        {/* Pilihan Ganda (4 Opsi) dengan Feedback Animasi Halus & Ukuran yang Nyaman Dibaca */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === currentQ.correctAnswerIndex;

            let buttonStyle = 'bg-white border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.99]';
            let animationClass = '';

            if (isAnswered) {
              if (isCorrect) {
                buttonStyle = 'bg-emerald-50/90 border-emerald-500 text-emerald-950 font-semibold ring-2 ring-emerald-400/40 shadow-xs';
                animationClass = 'animate-option-correct';
              } else if (isSelected && !isCorrect) {
                buttonStyle = 'bg-rose-50/90 border-rose-500 text-rose-950 font-semibold ring-2 ring-rose-400/40 shadow-xs';
                animationClass = 'animate-option-wrong';
              } else {
                buttonStyle = 'bg-white border-slate-200 text-slate-400 opacity-50';
              }
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={isAnswered}
                onClick={() => handleSelectOption(idx)}
                className={`w-full p-3.5 sm:p-4 lg:p-4.5 lg:min-h-[70px] rounded-xl lg:rounded-2xl border text-left transition-all duration-200 flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-600 ${buttonStyle} ${animationClass}`}
              >
                <div className="flex items-center gap-3 lg:gap-3.5 min-w-0">
                  <span className="w-7 h-7 lg:w-8.5 lg:h-8.5 shrink-0 rounded-lg lg:rounded-xl bg-slate-100 group-hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs lg:text-sm uppercase transition-colors">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="font-semibold text-sm sm:text-base lg:text-lg truncate">{option}</span>
                </div>

                {isAnswered && (
                  <div className="shrink-0 ml-3">
                    {isCorrect && <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-600" />}
                    {isSelected && !isCorrect && <XCircle className="w-5 h-5 lg:w-6 lg:h-6 text-rose-600" />}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback Jawaban & Penjelasan dengan Animasi Slide Masuk */}
        {isAnswered && (
          <div className="space-y-3.5 pt-1 animate-feedback-slide-in">
            <div
              className={`p-3.5 sm:p-4 lg:p-4.5 rounded-xl lg:rounded-2xl border text-sm lg:text-base ${
                selectedOption === currentQ.correctAnswerIndex
                  ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                  : 'bg-rose-50/70 border-rose-200 text-rose-900'
              }`}
            >
              <div className="font-bold flex items-center gap-2 mb-1 text-sm lg:text-base">
                {selectedOption === currentQ.correctAnswerIndex ? (
                  <>
                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-600" />
                    <span>Jawaban Tepat!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 lg:w-5 lg:h-5 text-rose-600" />
                    <span>Jawaban Kurang Tepat</span>
                  </>
                )}
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-slate-700 leading-relaxed">{currentQ.explanation}</p>
            </div>

            {/* Tombol Lanjut ke Soal Berikutnya */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNextQuestion}
                className="inline-flex items-center gap-2 px-5 py-2.5 lg:px-7 lg:py-3 rounded-xl lg:rounded-2xl bg-crimson-600 hover:bg-crimson-700 active:scale-[0.98] text-white font-semibold text-sm lg:text-base shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-600"
              >
                <span>
                  {currentQuestionIndex < questions.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil Akhir'}
                </span>
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

