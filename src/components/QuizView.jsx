import React, { useState, useEffect } from 'react';
import {
  Volume2,
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
      <div className="py-10 max-w-2xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6 text-center">
          {/* Ikon Pencapaian */}
          <div className="w-16 h-16 rounded-2xl bg-crimson-50 text-crimson-600 mx-auto flex items-center justify-center border border-crimson-100 shadow-sm">
            <Award size={36} />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Hasil Akhir Latihan ({isRandomMode ? 'Mode Acak' : 'Mode Standar'})
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {getCategoryTitle()} Selesai!
            </h2>
            <p className="text-sm text-slate-600">{evaluation}</p>
          </div>

          {/* Nilai dan Persentase */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-around gap-4">
            <div>
              <div className="text-4xl font-extrabold text-crimson-600">
                {score} <span className="text-lg font-medium text-slate-400">/ {questions.length}</span>
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">Jawaban Benar</div>
            </div>
            <div className="w-px h-12 bg-slate-200 hidden sm:block"></div>
            <div>
              <div className="text-4xl font-extrabold text-slate-800">{finalPercentage}%</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Tingkat Akurasi</div>
            </div>
          </div>

          {/* Ringkasan Jawaban Soal */}
          <div className="text-left space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-800">Ringkasan Soal:</h3>
              <span className="text-xs text-slate-500">
                {isRandomMode ? 'Mode Soal Acak' : 'Mode Soal Standar'}
              </span>
            </div>
            <div className="max-h-72 overflow-y-auto space-y-2.5 pr-1 text-xs">
              {userAnswers.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 ${
                    item.isCorrect
                      ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
                      : 'bg-rose-50/60 border-rose-200 text-rose-950'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-japanese text-xl font-bold shrink-0 bg-white/70 px-2 py-1 rounded-lg border border-slate-200">
                      {item.questionChar}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-bold text-slate-800">Soal {idx + 1}</span>
                        {item.typeBadge && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white border border-slate-200 text-slate-600">
                            {item.typeBadge}
                          </span>
                        )}
                      </div>
                      <div className="text-slate-600 text-[11px] leading-relaxed">
                        Jawaban Anda: <span className="font-semibold">{item.options[item.selectedOption]}</span> | Kunci: <span className="font-semibold text-emerald-700">{item.options[item.correctIndex]}</span>
                      </div>
                      {item.explanation && (
                        <div className="text-slate-500 text-[10px] mt-1 pt-1 border-t border-slate-200/60">
                          {item.explanation}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="shrink-0 self-end sm:self-center">
                    {item.isCorrect ? (
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold text-[11px] bg-white/80 px-2 py-1 rounded-lg border border-emerald-200">
                        <CheckCircle size={14} /> Benar
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-rose-700 font-semibold text-[11px] bg-white/80 px-2 py-1 rounded-lg border border-rose-200">
                        <XCircle size={14} /> Salah
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleRestartQuiz}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-semibold text-sm transition-colors shadow-sm"
            >
              <RotateCcw size={16} />
              <span>Ulangi Kuis Ini</span>
            </button>
            <button
              type="button"
              onClick={handleShuffleQuestions}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-crimson-200 hover:bg-crimson-50 text-crimson-700 font-semibold text-sm transition-colors shadow-2xs"
            >
              <Shuffle size={16} />
              <span>Acak Soal Baru</span>
            </button>
            <button
              type="button"
              onClick={() => onBackToLearn(category)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors"
            >
              <BookOpen size={16} />
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
    <div className="py-8 max-w-2xl mx-auto px-4 sm:px-6 space-y-6">
      {/* Quiz Category Tabs & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Tab Kategori (Hiragana / Katakana / Kanji) - Penuh ke kanan di Mobile */}
        <div className="grid grid-cols-3 sm:flex sm:items-center gap-2 w-full sm:w-auto bg-slate-100/70 p-1 rounded-xl sm:bg-transparent sm:p-0">
          {['hiragana', 'katakana', 'kanji'].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                if (cat !== category) {
                  onSwitchCategory(cat);
                }
              }}
              className={`py-2 px-3 sm:py-1.5 sm:px-3 rounded-lg text-xs font-semibold capitalize transition-all text-center flex items-center justify-center ${
                category === cat
                  ? 'bg-crimson-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tombol Aksi (Acak Soal & Kartu Belajar) - Penuh ke kanan di Mobile */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          {isRandomMode ? (
            <button
              type="button"
              onClick={handleResetToStandard}
              className="flex-1 sm:flex-initial justify-center px-3 py-2 sm:py-1.5 rounded-lg text-xs font-semibold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 flex items-center gap-1.5 transition-colors shadow-2xs"
              title="Kembali ke urutan soal standar"
            >
              <span>Soal Standar</span>
            </button>
          ) : null}

          <button
            type="button"
            onClick={handleShuffleQuestions}
            className={`flex-1 sm:flex-initial justify-center px-3 py-2 sm:py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shadow-2xs ${
              isRandomMode
                ? 'bg-crimson-50 border border-crimson-200 text-crimson-700 hover:bg-crimson-100'
                : 'bg-white border border-slate-200 text-slate-700 hover:border-crimson-300 hover:text-crimson-600 hover:bg-crimson-50/50'
            }`}
            title="Klik untuk mengacak soal sekarang"
          >
            <Shuffle size={13} className="text-crimson-600" />
            <span>{isRandomMode ? 'Acak Soal Lagi' : 'Acak Soal'}</span>
          </button>
          <button
            type="button"
            onClick={() => onBackToLearn(category)}
            className="flex-1 sm:flex-initial justify-center px-3 py-2 sm:py-1.5 rounded-lg text-xs text-slate-600 hover:text-slate-900 bg-white border border-slate-200 sm:border-transparent sm:bg-transparent hover:bg-slate-50 sm:hover:bg-transparent font-medium inline-flex items-center gap-1.5 transition-colors"
          >
            <BookOpen size={14} />
            <span>Kartu Belajar</span>
          </button>
        </div>
      </div>

      {/* Main Quiz Card */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
        {/* Progress Bar & Counter */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1.5">
              <span>Soal {currentQuestionIndex + 1} dari {questions.length}</span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              {isRandomMode ? (
                <span className="text-crimson-600 font-bold flex items-center gap-1">
                  <Sparkles size={12} />
                  <span>Mode Acak</span>
                </span>
              ) : (
                <span className="text-slate-500 font-medium">Mode Standar</span>
              )}
            </span>
            <span>Skor: {score}</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-crimson-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Karakter Soal, Badge Kategori & Speaker Audio */}
        <div className="py-6 px-4 text-center bg-slate-50/80 rounded-2xl border border-slate-200/80 relative">
          {/* Badge Tipe Soal di Kiri Atas */}
          {currentQ.typeBadge && (
            <div className="absolute left-3 top-3 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white text-crimson-700 border border-crimson-100 shadow-2xs flex items-center gap-1">
              <span>{currentQ.typeBadge}</span>
            </div>
          )}

          {/* Tombol Speaker di Kanan Atas */}
          <button
            type="button"
            onClick={handlePlayQuestionAudio}
            className={`absolute right-3 top-3 p-2 rounded-lg text-slate-500 hover:text-crimson-600 hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-600 ${
              isPlayingAudio ? 'bg-white text-crimson-600 playing-audio shadow-sm ring-1 ring-crimson-500' : 'bg-white/60 border border-slate-200/60'
            }`}
            title="Dengarkan pengucapan audio karakter"
            aria-label="Dengarkan pengucapan soal"
          >
            <Volume2 size={18} />
          </button>

          {/* Tampilan Huruf / Kata yang Skalabel */}
          <div
            className={`font-japanese font-normal text-slate-900 mb-2 select-all tracking-normal ${
              currentQ.questionChar.length > 5
                ? 'text-2xl sm:text-3xl'
                : currentQ.questionChar.length > 2
                ? 'text-4xl sm:text-5xl'
                : 'text-6xl sm:text-7xl'
            }`}
          >
            {currentQ.questionChar}
          </div>
          <div className="text-sm sm:text-base text-slate-700 font-medium px-2 leading-snug">
            {currentQ.prompt}
          </div>
        </div>

        {/* Pilihan Ganda (4 Opsi) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === currentQ.correctAnswerIndex;

            let buttonStyle = 'bg-white border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50';

            if (isAnswered) {
              if (isCorrect) {
                buttonStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold ring-1 ring-emerald-500';
              } else if (isSelected && !isCorrect) {
                buttonStyle = 'bg-rose-50 border-rose-500 text-rose-900 font-semibold ring-1 ring-rose-500';
              } else {
                buttonStyle = 'bg-white border-slate-200 text-slate-400 opacity-60';
              }
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={isAnswered}
                onClick={() => handleSelectOption(idx)}
                className={`w-full p-4 rounded-xl border text-left text-sm transition-all flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-600 ${buttonStyle}`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-6 h-6 shrink-0 rounded-lg bg-slate-100 group-hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-xs uppercase">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="font-medium text-base truncate">{option}</span>
                </div>

                {isAnswered && (
                  <div className="shrink-0 ml-2">
                    {isCorrect && <CheckCircle size={18} className="text-emerald-600" />}
                    {isSelected && !isCorrect && <XCircle size={18} className="text-rose-600" />}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback Jawaban & Penjelasan */}
        {isAnswered && (
          <div className="space-y-4 pt-2">
            <div
              className={`p-4 rounded-xl border text-sm ${
                selectedOption === currentQ.correctAnswerIndex
                  ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                  : 'bg-rose-50/70 border-rose-200 text-rose-900'
              }`}
            >
              <div className="font-bold flex items-center gap-1.5 mb-1">
                {selectedOption === currentQ.correctAnswerIndex ? (
                  <>
                    <CheckCircle size={16} className="text-emerald-600" />
                    <span>Jawaban Tepat!</span>
                  </>
                ) : (
                  <>
                    <XCircle size={16} className="text-rose-600" />
                    <span>Jawaban Kurang Tepat</span>
                  </>
                )}
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">{currentQ.explanation}</p>
            </div>

            {/* Tombol Lanjut ke Soal Berikutnya */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNextQuestion}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-semibold text-sm shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-600"
              >
                <span>
                  {currentQuestionIndex < questions.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil Akhir'}
                </span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

