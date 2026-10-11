import React, { useState } from 'react';
import {
  Volume2,
  CheckCircle,
  XCircle,
  RotateCcw,
  BookOpen,
  ArrowRight,
  Award,
} from 'lucide-react';
import { quizBank, playJapaneseAudio } from '../data/japaneseData';

export default function QuizView({ category, onSwitchCategory, onBackToLearn }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Ambil bank soal berdasarkan kategori aktif
  const questions = quizBank[category] || quizBank.hiragana;
  const currentQ = questions[currentQuestionIndex];

  // Memutar suara soal
  const handlePlayQuestionAudio = () => {
    if (!currentQ) return;
    setIsPlayingAudio(true);
    playJapaneseAudio(
      currentQ.questionChar,
      () => setIsPlayingAudio(true),
      () => setIsPlayingAudio(false)
    );
  };

  // Memilih opsi jawaban
  const handleSelectOption = (index) => {
    if (isAnswered) return;

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
        selectedOption: index,
        correctIndex: currentQ.correctAnswerIndex,
        isCorrect,
        prompt: currentQ.prompt,
        options: currentQ.options,
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

  // Reset kuis ulang
  const handleRestartQuiz = () => {
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

  const progressPercent = Math.round(((currentQuestionIndex + 1) / questions.length) * 100);

  // ===================== HALAMAN HASIL KUIS (SCORECARD) =====================
  if (isCompleted) {
    const finalPercentage = Math.round((score / questions.length) * 100);
    let evaluation = 'Terus berlatih untuk memperkuat ingatan aksara Jepang Anda!';
    let badgeColor = 'bg-amber-100 text-amber-800 border-amber-200';

    if (finalPercentage >= 80) {
      evaluation = 'Luar biasa! Penguasaan karakter Jepang Anda sangat baik.';
      badgeColor = 'bg-emerald-100 text-emerald-800 border-emerald-200';
    } else if (finalPercentage >= 50) {
      evaluation = 'Bagus! Anda sudah menguasai sebagian besar karakter dengan baik.';
      badgeColor = 'bg-blue-100 text-blue-800 border-blue-200';
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
              Hasil Akhir Latihan
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
            <h3 className="text-sm font-bold text-slate-800">Ringkasan Soal:</h3>
            <div className="max-h-60 overflow-y-auto space-y-2 pr-1 text-xs">
              {userAnswers.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border flex items-center justify-between ${
                    item.isCorrect
                      ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
                      : 'bg-rose-50/60 border-rose-200 text-rose-950'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-japanese text-xl font-bold">{item.questionChar}</span>
                    <div>
                      <div className="font-medium text-slate-700">Soal {idx + 1}</div>
                      <div className="text-slate-500 text-[11px]">
                        Jawaban Anda: {item.options[item.selectedOption]} | Kunci: {item.options[item.correctIndex]}
                      </div>
                    </div>
                  </div>
                  <div>
                    {item.isCorrect ? (
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold text-[11px]">
                        <CheckCircle size={15} /> Benar
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-rose-700 font-semibold text-[11px]">
                        <XCircle size={15} /> Salah
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleRestartQuiz}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-semibold text-sm transition-colors shadow-sm"
            >
              <RotateCcw size={16} />
              <span>Coba Kuis Lagi</span>
            </button>
            <button
              type="button"
              onClick={() => onBackToLearn(category)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors"
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
  return (
    <div className="py-8 max-w-2xl mx-auto px-4 sm:px-6 space-y-6">
      {/* Quiz Category Tabs & Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {['hiragana', 'katakana', 'kanji'].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                if (cat !== category) {
                  onSwitchCategory(cat);
                }
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                category === cat
                  ? 'bg-crimson-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onBackToLearn(category)}
          className="text-xs text-slate-500 hover:text-slate-800 font-medium inline-flex items-center gap-1"
        >
          <BookOpen size={14} />
          <span>Lihat Kartu Belajar</span>
        </button>
      </div>

      {/* Main Quiz Card */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
        {/* Progress Bar & Counter */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>
              Soal {currentQuestionIndex + 1} dari {questions.length}
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

        {/* Karakter Soal & Speaker */}
        <div className="py-4 text-center bg-slate-50/70 rounded-2xl border border-slate-100 relative">
          <button
            type="button"
            onClick={handlePlayQuestionAudio}
            className={`absolute right-3 top-3 p-2 rounded-lg text-slate-500 hover:text-crimson-600 hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-600 ${
              isPlayingAudio ? 'bg-white text-crimson-600 playing-audio shadow-sm' : ''
            }`}
            title="Dengarkan suara karakter"
            aria-label="Dengarkan pengucapan soal"
          >
            <Volume2 size={20} />
          </button>

          <div className="font-japanese text-6xl sm:text-7xl font-normal text-slate-900 mb-2 select-all">
            {currentQ.questionChar}
          </div>
          <div className="text-sm text-slate-600 font-medium">{currentQ.prompt}</div>
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
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-slate-100 group-hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-xs uppercase">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="font-medium text-base">{option}</span>
                </div>

                {isAnswered && (
                  <div>
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
