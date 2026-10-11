import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Volume2,
  ChevronLeft,
  ChevronRight,
  PenTool,
  Trash2,
  Info,
  RotateCcw,
  Play,
  Eye,
  EyeOff,
  Sparkles,
} from './Icons';
import { hiraganaStrokeGuide } from '../data/hiraganaStrokeData';
import { playJapaneseAudio } from '../data/japaneseData';

export default function StrokeModal({ characterItem, onClose }) {
  if (!characterItem) return null;

  const char = characterItem.char;
  const romaji = (characterItem.romaji || '').toLowerCase().trim();

  const guide = hiraganaStrokeGuide[char] || {
    char: char,
    romaji: romaji,
    totalStrokes: 1,
    tip: 'Latihlah goresan secara teratur untuk mendapatkan proporsi huruf yang seimbang.',
    strokes: [
      {
        step: 1,
        name: 'Goresan Utama',
        instruction: 'Tarik garis mengikuti lekukan karakter dari titik awal hingga selesai.',
        type: 'tome',
        path: '',
        start: { x: 50, y: 30 },
        dir: '↓',
      },
    ],
  };

  // State untuk mode tampilan
  const [viewMode, setViewMode] = useState('animation'); // 'animation' | 'stepByStep'
  const [currentStep, setCurrentStep] = useState(1);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [showTracingGhost, setShowTracingGhost] = useState(true);
  const [gifTimestamp, setGifTimestamp] = useState(Date.now());
  const [gifLoadError, setGifLoadError] = useState(false);

  // Canvas untuk latihan menulis bebas
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [penColor, setPenColor] = useState('#1e293b'); // default sumi ink
  const [penSize, setPenSize] = useState(7);

  // Sumber URL GIF animasi otentik (seperti di jepang.org)
  const primaryGifUrl = `https://jepang.org/images/tutorial/hiragana/${romaji}.gif?t=${gifTimestamp}`;
  const fallbackGifUrl = `https://commons.wikimedia.org/wiki/Special:FilePath/Hiragana_${char}_stroke_order_animation.gif`;

  // Keyboard navigation & Escape key to close
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        if (currentStep < guide.totalStrokes) {
          handleStepChange(currentStep + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentStep > 1) {
          handleStepChange(currentStep - 1);
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStep, guide.totalStrokes, onClose]);

  const handleStepChange = (newStep) => {
    setCurrentStep(newStep);
  };

  const restartGifAnimation = () => {
    setGifTimestamp(Date.now());
    setGifLoadError(false);
  };

  // Canvas drawing functions with responsive DPI & bounding client rect scaling
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const getCanvasCoords = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    };
  };

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { x, y } = getCanvasCoords(e);
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineWidth = penSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = penColor;
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { x, y } = getCanvasCoords(e);
    const ctx = canvas.getContext('2d');

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const handlePlayAudio = () => {
    setIsPlayingAudio(true);
    playJapaneseAudio(
      char,
      () => setIsPlayingAudio(true),
      () => setIsPlayingAudio(false)
    );
  };

  const activeStroke = guide.strokes[currentStep - 1] || guide.strokes[0];

  // Penjelasan teknik kaligrafi Jepang berdasarkan tipe goresan
  const getTechniqueBadge = (type) => {
    switch (type) {
      case 'hane':
        return {
          title: 'Kaitan (Hane)',
          desc: 'Sentakan kait kecil ke arah goresan berikutnya.',
          badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
        };
      case 'harai':
        return {
          title: 'Sapuan (Harai)',
          desc: 'Angkat pena secara perlahan membentuk ekor runcing.',
          badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        };
      default:
        return {
          title: 'Berhenti (Tome)',
          desc: 'Pena berhenti total di ujung goresan sebelum diangkat.',
          badgeBg: 'bg-rose-100 text-rose-800 border-rose-300',
        };
    }
  };

  const activeTechnique = getTechniqueBadge(activeStroke.type);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-900/65 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="stroke-modal-title"
    >
      <div
        className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl overflow-hidden max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ===================== MODAL HEADER ===================== */}
        <div className="px-5 sm:px-7 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/90">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-crimson-600 text-white flex items-center justify-center font-bold text-2xl shadow-sm">
              <span className="font-japanese leading-none">{char}</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="stroke-modal-title" className="text-lg sm:text-xl font-extrabold text-slate-900 leading-tight">
                  Tata Cara Penulisan: {char} ({guide.romaji})
                </h2>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[11px] font-bold bg-crimson-100 text-crimson-700">
                  {guide.totalStrokes} Langkah
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Panduan urutan goresan resmi (Kakijun) Hiragana Jepang
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePlayAudio}
              className={`p-2.5 rounded-xl border border-slate-200 bg-white hover:text-crimson-600 hover:border-crimson-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-600 ${
                isPlayingAudio ? 'bg-crimson-50 text-crimson-600 ring-2 ring-crimson-500' : 'text-slate-600'
              }`}
              title="Dengarkan pengucapan audio"
              aria-label="Putar audio"
            >
              <Volume2 size={20} />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-600"
              aria-label="Tutup modal"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* ===================== MODAL BODY ===================== */}
        <div className="p-4 sm:p-6 lg:p-7 overflow-y-auto space-y-6">
          {/* Main 2-Column Desktop Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            
            {/* ===================== KOLOM KIRI: ANIMASI & PANDUAN GORESAN ===================== */}
            <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col items-center">
              {/* Tab Selector: Animasi GIF Otentik vs Bagan Langkah demi Langkah */}
              <div className="w-full flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200/80">
                <div className="flex items-center gap-1.5 bg-slate-200/70 p-1 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setViewMode('animation')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      viewMode === 'animation'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Play size={13} />
                    <span>Animasi Otentik</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('stepByStep')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      viewMode === 'stepByStep'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <PenTool size={13} />
                    <span>Per Langkah</span>
                  </button>
                </div>

                {viewMode === 'animation' ? (
                  <button
                    type="button"
                    onClick={restartGifAnimation}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-crimson-600 text-xs font-semibold shadow-2xs transition-colors"
                    title="Ulangi animasi dari goresan pertama"
                  >
                    <RotateCcw size={13} />
                    <span className="hidden sm:inline">Ulangi Animasi</span>
                  </button>
                ) : (
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      disabled={currentStep <= 1}
                      onClick={() => handleStepChange(currentStep - 1)}
                      className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-40"
                      title="Langkah sebelumnya"
                    >
                      <ChevronLeft size={15} />
                    </button>
                    <span className="text-xs font-bold text-slate-700 px-1">
                      {currentStep} / {guide.totalStrokes}
                    </span>
                    <button
                      type="button"
                      disabled={currentStep >= guide.totalStrokes}
                      onClick={() => handleStepChange(currentStep + 1)}
                      className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-40"
                      title="Langkah berikutnya"
                    >
                      <ChevronRight size={15} />
                    </button>
                  </div>
                )}
              </div>

              {/* Box Kaligrafi Utama yang Lega */}
              <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px] aspect-square bg-[#fbf9f5] rounded-2xl border-2 border-slate-300 relative flex items-center justify-center shadow-inner overflow-hidden select-none">
                {/* Garis Kisi-Kisi Kaligrafi Tradisional (Sumbu Tengah Vertikal & Horizontal) */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-dashed border-slate-300/80 pointer-events-none"></div>
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 border-l border-dashed border-slate-300/80 pointer-events-none"></div>
                <div className="absolute inset-2 border border-dashed border-slate-200/60 rounded-xl pointer-events-none"></div>

                {/* TAMPILAN 1: ANIMASI KALIGRAFI OTENTIK (GIF persis seperti di jepang.org) */}
                {viewMode === 'animation' && (
                  <div className="relative w-full h-full p-4 flex items-center justify-center">
                    <img
                      src={gifLoadError ? fallbackGifUrl : primaryGifUrl}
                      alt={`Animasi penulisan Hiragana ${char}`}
                      onError={() => {
                        if (!gifLoadError) setGifLoadError(true);
                      }}
                      className="w-full h-full object-contain mix-blend-multiply drop-shadow-sm"
                    />

                    {/* Badge Penanda di Sudut */}
                    <div className="absolute bottom-3 right-3 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs shadow-xs">
                      {guide.totalStrokes} Goresan
                    </div>
                  </div>
                )}

                {/* TAMPILAN 2: BAGAN VEKTOR PER LANGKAH DENGAN INDIKATOR TARIKAN */}
                {viewMode === 'stepByStep' && (
                  <div className="relative w-full h-full p-2 flex items-center justify-center">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full p-2 relative z-10 select-none overflow-visible"
                    >
                      <defs>
                        <marker
                          id="stroke-arrow-head"
                          viewBox="0 0 10 10"
                          refX="7"
                          refY="5"
                          markerWidth="4"
                          markerHeight="4"
                          orient="auto-start-reverse"
                        >
                          <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#e63946" />
                        </marker>
                      </defs>

                      {/* Goresan Masa Depan (Garis halus abu-abu putus-putus) */}
                      {guide.strokes.map((s, idx) => {
                        if (idx < currentStep || !s.path) return null;
                        return (
                          <path
                            key={`future-${idx}`}
                            d={s.path}
                            fill="none"
                            stroke="#cbd5e1"
                            strokeWidth="4"
                            strokeDasharray="3 3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            opacity="0.45"
                          />
                        );
                      })}

                      {/* Goresan Sebelumnya (Warna Abu-Abu Netral Pekat) */}
                      {guide.strokes.map((s, idx) => {
                        if (idx >= currentStep - 1 || !s.path) return null;
                        return (
                          <g key={`prev-${idx}`}>
                            <path
                              d={s.path}
                              fill="none"
                              stroke="#94a3b8"
                              strokeWidth="7.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            {s.start && (
                              <circle
                                cx={s.start.x}
                                cy={s.start.y}
                                r="3.2"
                                fill="#64748b"
                              />
                            )}
                          </g>
                        );
                      })}

                      {/* GORESAN AKTIF (Merah Crimson dengan Animasi Tarikan) */}
                      {activeStroke && activeStroke.path ? (
                        <g key={`active-${currentStep}`}>
                          {/* Glow halo halus */}
                          <path
                            d={activeStroke.path}
                            fill="none"
                            stroke="#fecdd3"
                            strokeWidth="13"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            opacity="0.75"
                            className="stroke-animated"
                          />
                          {/* Jalur goresan utama */}
                          <path
                            d={activeStroke.path}
                            fill="none"
                            stroke="#e63946"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            markerEnd="url(#stroke-arrow-head)"
                            className="stroke-animated"
                          />

                          {/* Titik awal tarikan berdenyut dengan nomor langkah */}
                          {activeStroke.start && (
                            <g className="pulse-pin">
                              <circle
                                cx={activeStroke.start.x}
                                cy={activeStroke.start.y}
                                r="7.5"
                                fill="#e63946"
                                opacity="0.25"
                              />
                              <circle
                                cx={activeStroke.start.x}
                                cy={activeStroke.start.y}
                                r="5.2"
                                fill="#e63946"
                                stroke="#ffffff"
                                strokeWidth="1.5"
                              />
                              <text
                                x={activeStroke.start.x}
                                y={activeStroke.start.y + 1.2}
                                fontSize="4.5"
                                fontWeight="bold"
                                fill="#ffffff"
                                textAnchor="middle"
                                dominantBaseline="middle"
                              >
                                {currentStep}
                              </text>
                            </g>
                          )}
                        </g>
                      ) : (
                        <text
                          x="50"
                          y="58"
                          fontSize="60"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill="#e63946"
                          className="font-japanese"
                        >
                          {char}
                        </text>
                      )}
                    </svg>

                    <div className="absolute bottom-3 right-3 bg-slate-900/85 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1">
                      <span>Arah:</span>
                      <span className="font-mono text-crimson-300">{activeStroke.dir}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Penjelasan Instruksi Langkah Aktif */}
              <div className="w-full mt-4 bg-white border border-slate-200 rounded-xl p-3.5 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-crimson-600 text-white text-xs font-bold flex items-center justify-center">
                      {activeStroke.step}
                    </span>
                    <span className="font-bold text-slate-900 text-sm">
                      {activeStroke.name}
                    </span>
                  </div>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${activeTechnique.badgeBg}`}>
                    {activeTechnique.title}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-8">
                  {activeStroke.instruction}
                </p>
              </div>

              {/* Bagan Urutan Langkah Mini (Klik untuk memilih langkah) */}
              <div className="w-full mt-3 pt-3 border-t border-slate-200/70">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Urutan Lengkap Goresan:
                </span>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {guide.strokes.map((s) => {
                    const isSelected = viewMode === 'stepByStep' && currentStep === s.step;
                    return (
                      <button
                        key={s.step}
                        type="button"
                        onClick={() => {
                          setViewMode('stepByStep');
                          handleStepChange(s.step);
                        }}
                        className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center justify-between group ${
                          isSelected
                            ? 'bg-crimson-50 border-crimson-400 ring-2 ring-crimson-300'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <span className="text-[10px] font-bold text-slate-700 mb-1">
                          Langkah {s.step}
                        </span>
                        <div className="w-12 h-12 bg-slate-50 rounded-lg border border-slate-200/70 flex items-center justify-center p-1">
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            {guide.strokes.slice(0, s.step - 1).map((prev, pIdx) => (
                              <path
                                key={pIdx}
                                d={prev.path}
                                fill="none"
                                stroke="#94a3b8"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            ))}
                            {s.path && (
                              <path
                                d={s.path}
                                fill="none"
                                stroke="#e63946"
                                strokeWidth="9"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            )}
                          </svg>
                        </div>
                        <span className="text-[9px] text-slate-500 font-medium mt-1 truncate max-w-full">
                          {s.dir}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ===================== KOLOM KANAN: KANVAS LATIHAN MANDIRI ===================== */}
            <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-between h-full">
              {/* Header Kanvas dengan Tombol Hapus & Tracing */}
              <div className="w-full flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200/80">
                <span className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                  <PenTool size={16} className="text-crimson-600" />
                  <span>Coba Tulis di Sini</span>
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setShowTracingGhost(!showTracingGhost)}
                    className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition-colors ${
                      showTracingGhost
                        ? 'bg-crimson-50 text-crimson-700 border-crimson-200'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                    title="Aktifkan atau sembunyikan pola bayangan untuk menjiplak"
                  >
                    {showTracingGhost ? <Eye size={13} /> : <EyeOff size={13} />}
                    <span className="hidden sm:inline">Pola Jiplak</span>
                  </button>

                  <button
                    type="button"
                    onClick={clearCanvas}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-crimson-600 text-xs font-semibold shadow-2xs transition-colors"
                    title="Hapus semua coretan kanvas"
                  >
                    <Trash2 size={13} />
                    <span>Hapus</span>
                  </button>
                </div>
              </div>

              {/* Box Kanvas yang Lega dan Proporsional */}
              <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px] aspect-square bg-white rounded-2xl border-2 border-dashed border-slate-300 relative shadow-inner overflow-hidden select-none touch-none cursor-crosshair">
                {/* Garis Kisi-Kisi Kaligrafi Tradisional */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-dashed border-slate-200 pointer-events-none"></div>
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 border-l border-dashed border-slate-200 pointer-events-none"></div>

                {/* Pola Bayangan Transparan untuk Latihan Menjiplak */}
                {showTracingGhost && (
                  <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-15">
                    <span className="font-japanese text-8xl sm:text-9xl text-slate-900 leading-none">
                      {char}
                    </span>
                  </div>
                )}

                {/* Elemen HTML5 Canvas */}
                <canvas
                  ref={canvasRef}
                  width={380}
                  height={380}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                  className="absolute inset-0 w-full h-full z-10 touch-none cursor-crosshair"
                />
              </div>

              {/* Pilihan Warna Tinta & Ketebalan Pena */}
              <div className="w-full mt-4 flex items-center justify-between gap-2 bg-white border border-slate-200 rounded-xl p-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-slate-500">Warna:</span>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setPenColor('#1e293b')}
                      className={`w-6 h-6 rounded-full bg-slate-900 transition-transform ${
                        penColor === '#1e293b' ? 'ring-2 ring-offset-2 ring-slate-900 scale-110' : 'opacity-80'
                      }`}
                      title="Tinta Hitam Tradisional"
                      aria-label="Warna Hitam"
                    />
                    <button
                      type="button"
                      onClick={() => setPenColor('#e63946')}
                      className={`w-6 h-6 rounded-full bg-crimson-600 transition-transform ${
                        penColor === '#e63946' ? 'ring-2 ring-offset-2 ring-crimson-600 scale-110' : 'opacity-80'
                      }`}
                      title="Tinta Merah Kaligrafi"
                      aria-label="Warna Merah"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-slate-500">Ketebalan:</span>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setPenSize(5)}
                      className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                        penSize === 5 ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      Sedang
                    </button>
                    <button
                      type="button"
                      onClick={() => setPenSize(9)}
                      className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                        penSize === 9 ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      Tebal
                    </button>
                  </div>
                </div>
              </div>

              {/* Tips Kerapian & Contoh Kosakata */}
              <div className="w-full mt-3 space-y-2 text-xs">
                <div className="bg-amber-50/80 rounded-xl p-3 border border-amber-200/80 space-y-1">
                  <div className="font-bold text-amber-900 flex items-center gap-1.5 text-[11px]">
                    <Info size={13} className="text-amber-600" />
                    <span>Tips Keseimbangan Huruf:</span>
                  </div>
                  <p className="text-amber-800 text-[11px] leading-relaxed">{guide.tip}</p>
                </div>

                {characterItem.example && (
                  <div className="bg-slate-100/70 rounded-xl p-3 border border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">
                        Contoh Kata:
                      </span>
                      <span className="font-japanese font-bold text-slate-900 text-base">
                        {characterItem.example.word}
                      </span>
                    </div>
                    <span className="text-xs text-slate-600 font-medium bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                      {characterItem.example.meaning}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ===================== MODAL FOOTER ===================== */}
        <div className="px-5 sm:px-7 py-3.5 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between">
          <span className="text-xs text-slate-500 hidden sm:inline">
            Tekan <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-mono">Esc</kbd> untuk menutup
          </span>
          <div className="flex items-center gap-2 ml-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs transition-colors shadow-sm"
            >
              Selesai Latihan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
