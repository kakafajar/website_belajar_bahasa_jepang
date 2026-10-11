import React, { useState, useMemo } from 'react';
import { Volume2, Search, X, Award, Table, LayoutGrid, PenTool } from './Icons';
import StrokeModal from './StrokeModal';
import {
  hiraganaList,
  katakanaList,
  kanjiList,
  chartLayout,
  playJapaneseAudio,
} from '../data/japaneseData';

export default function LearnView({ category, onStartQuiz }) {
  const [viewMode, setViewMode] = useState('chart'); // 'chart' (seperti gambar) | 'cards' (detail)
  const [groupFilter, setGroupFilter] = useState('all'); // 'all' | 'seion' | 'dakuon' | 'handakuon' | 'yoon'
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRow, setActiveRow] = useState('Semua');
  const [playingId, setPlayingId] = useState(null);
  const [selectedStrokeChar, setSelectedStrokeChar] = useState(null);

  // Ambil list data sesuai kategori
  const rawData = useMemo(() => {
    if (category === 'katakana') return katakanaList;
    if (category === 'kanji') return kanjiList;
    return hiraganaList;
  }, [category]);

  // Daftar filter baris unik untuk Hiragana / Katakana
  const rowOptions = useMemo(() => {
    if (category === 'kanji') return [];
    let items = rawData;
    if (groupFilter !== 'all') {
      items = items.filter((item) => item.group === groupFilter);
    }
    const rows = ['Semua', ...new Set(items.map((item) => item.row))];
    return rows;
  }, [category, rawData, groupFilter]);

  // Filter pencarian, grup, dan baris
  const filteredData = useMemo(() => {
    return rawData.filter((item) => {
      const query = searchQuery.trim().toLowerCase();
      const matchQuery =
        !query ||
        item.char.includes(query) ||
        item.romaji.toLowerCase().includes(query) ||
        item.meaning.toLowerCase().includes(query) ||
        (item.example && item.example.word.toLowerCase().includes(query)) ||
        (item.onyomi && item.onyomi.toLowerCase().includes(query)) ||
        (item.kunyomi && item.kunyomi.toLowerCase().includes(query));

      const matchGroup = groupFilter === 'all' || item.group === groupFilter;
      const matchRow = category === 'kanji' || activeRow === 'Semua' || item.row === activeRow;

      return matchQuery && matchGroup && matchRow;
    });
  }, [rawData, searchQuery, groupFilter, activeRow, category]);

  // Memutar audio dengan feedback visual state
  const handlePlayAudio = (idOrChar, textToSpeak) => {
    setPlayingId(idOrChar);
    playJapaneseAudio(
      textToSpeak,
      () => setPlayingId(idOrChar),
      () => setPlayingId(null)
    );
  };

  const getCategoryTitle = () => {
    if (category === 'katakana') return 'KATAKANA - カタカナ';
    if (category === 'kanji') return 'KANJI N5 - 漢字';
    return 'HIRAGANA - ひらがな';
  };

  const getCategoryDescription = () => {
    if (category === 'katakana') {
      return 'Katakana lengkap mencakup huruf dasar (Seion), bunyi bersuara (Dakuon & Handakuon), dan bunyi kombinasi (Yōon).';
    }
    if (category === 'kanji') {
      return 'Kanji adalah karakter logografis yang melambangkan arti dan konsep dalam Bahasa Jepang tingkat pemula (N5).';
    }
    return 'Tabel lengkap aksara Hiragana mencakup 46 huruf dasar (Seion), 20 dakuon (゛), 5 handakuon (゜), serta 36 kombinasi yōon (ゃ, ゅ, ょ).';
  };

  const totalCharacters = rawData.length;

  return (
    <div className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Header Info Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-crimson-50 text-crimson-700 border border-crimson-100">
            <span>Bagan Lengkap Pembelajaran</span>
            <span>•</span>
            <span>{totalCharacters} Karakter Aktif</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <span className="text-crimson-600 font-black tracking-normal">
              {getCategoryTitle()}
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {getCategoryDescription()}
          </p>
        </div>

        {/* Action Controls: Mode Switcher & CTA Kuis */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Switcher Tampilan (khusus Hiragana / Katakana) */}
          {category !== 'kanji' && (
            <div className="inline-flex bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                type="button"
                onClick={() => setViewMode('chart')}
                className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'chart'
                    ? 'bg-white text-crimson-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Tampilkan dalam bentuk tabel bagan seperti di poster"
              >
                <Table size={16} />
                <span>Bagan Tabel</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('cards')}
                className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'cards'
                    ? 'bg-white text-crimson-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Tampilkan dalam bentuk kartu karakter dengan contoh kata"
              >
                <LayoutGrid size={16} />
                <span>Kartu Detail</span>
              </button>
            </div>
          )}

          {/* CTA Latihan Kuis */}
          <button
            type="button"
            onClick={() => onStartQuiz(category)}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-semibold text-sm shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-600"
          >
            <Award size={18} />
            <span>Mulai Kuis {category === 'kanji' ? 'Kanji' : category === 'katakana' ? 'Katakana' : 'Hiragana'}</span>
          </button>
        </div>
      </div>

      {/* ======================= TAMPILAN 1: BAGAN TABEL LENGKAP PERSIS GAMBAR ======================= */}
      {viewMode === 'chart' && category !== 'kanji' && (
        <div className="space-y-6">
          {/* Petunjuk Penggunaan Bagan */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl px-4 py-3 text-xs text-amber-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="font-medium">
              💡 <strong>Tips:</strong> Klik kotak huruf {category === 'katakana' ? 'Katakana' : 'Hiragana'} mana saja di bawah ini untuk langsung mendengarkan pelafalan audionya dari penutur asli Jepang.
            </span>
            <span className="text-amber-700/80 text-[11px]">
              Tabel disusun sesuai urutan standar Gojuon, Dakuon, dan Yoon.
            </span>
          </div>

          {/* Frame Bagan Poster Utama (Tabel Atas: Seion + Dakuon & Handakuon) */}
          <div className="bg-white rounded-2xl border-2 border-crimson-500/80 p-4 sm:p-6 shadow-sm overflow-x-auto">
            <div className="min-w-[760px] space-y-6">
              {/* Header Bagan */}
              <div className="border-b-2 border-slate-200 pb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-crimson-600 text-white font-bold text-xs uppercase tracking-wider rounded-md">
                    Bagian 1
                  </span>
                  <span className="font-extrabold text-slate-900 text-lg sm:text-xl">
                    Huruf Dasar (Seion) &amp; Bunyi Bersuara (Dakuon / Handakuon) {category === 'katakana' ? 'Katakana' : 'Hiragana'}
                  </span>
                </div>
                <div className="text-xs text-slate-500 font-medium hidden sm:block">
                  Klik sel untuk memutar audio
                </div>
              </div>

              {/* Grid Baris Tabel Atas */}
              <div className="space-y-2">
                {(chartLayout[category] || chartLayout.hiragana).mainTable.rows.map((rowItem, rIdx) => (
                  <div key={rIdx} className="flex items-center gap-2">
                    {/* Blok Kiri: Seion (10 Kolom Dasar: a, ka, sa, ta, na, ha, ma, ya, ra, wa) */}
                    <div className="flex-1 grid grid-cols-10 gap-1.5 sm:gap-2">
                      {rowItem.seion.map((cell, cIdx) => {
                        if (!cell) {
                          // Sel Kosong
                          return (
                            <div
                              key={cIdx}
                              className="h-16 sm:h-20 bg-slate-50/80 rounded-lg border border-dashed border-slate-200 flex items-center justify-center opacity-40 select-none"
                            ></div>
                          );
                        }

                        const isPlaying = playingId === `main-${cell.char}`;
                        return (
                          <button
                            key={cIdx}
                            type="button"
                            onClick={() => handlePlayAudio(`main-${cell.char}`, cell.char)}
                            className={`h-16 sm:h-20 rounded-lg border transition-all flex flex-col items-center justify-center p-1 group relative ${
                              isPlaying
                                ? 'bg-crimson-50 border-crimson-500 ring-2 ring-crimson-500 shadow-sm'
                                : 'bg-white border-slate-200 hover:border-crimson-400 hover:bg-slate-50 hover:shadow-sm'
                            }`}
                            title={`Dengarkan pelafalan ${cell.char} (${cell.romaji})`}
                          >
                            <span className="font-japanese text-2xl sm:text-3xl font-medium text-slate-900 group-hover:text-crimson-600 transition-colors leading-none">
                              {cell.char}
                            </span>
                            <span className="text-[11px] sm:text-xs font-semibold text-slate-500 mt-1 font-mono tracking-tight">
                              {cell.romaji}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Pembatas Kolom Tengah (Tenten / Maru divider) */}
                    <div className="w-1 self-stretch bg-slate-200 rounded-full mx-1"></div>

                    {/* Blok Kanan: Dakuon & Handakuon (5 Kolom: ga, za, da, ba, pa) */}
                    <div className="w-[300px] sm:w-[340px] grid grid-cols-5 gap-1.5 sm:gap-2">
                      {rowItem.dakuon.map((cell, cIdx) => {
                        const isPlaying = playingId === `dakuon-${cell.char}`;
                        return (
                          <button
                            key={cIdx}
                            type="button"
                            onClick={() => handlePlayAudio(`dakuon-${cell.char}`, cell.char)}
                            className={`h-16 sm:h-20 rounded-lg border transition-all flex flex-col items-center justify-center p-1 group relative ${
                              isPlaying
                                ? 'bg-crimson-50 border-crimson-500 ring-2 ring-crimson-500 shadow-sm'
                                : 'bg-rose-50/40 border-rose-200/90 hover:border-crimson-400 hover:bg-white hover:shadow-sm'
                            }`}
                            title={`Dengarkan pelafalan ${cell.char} (${cell.romaji})`}
                          >
                            <span className="font-japanese text-2xl sm:text-3xl font-medium text-slate-900 group-hover:text-crimson-600 transition-colors leading-none">
                              {cell.char}
                            </span>
                            <span className="text-[11px] sm:text-xs font-semibold text-crimson-700 mt-1 font-mono tracking-tight">
                              {cell.romaji}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Frame Bagan Poster Bagian Bawah (Tabel Yoon: Kombinasi ya, yu, yo) */}
          <div className="bg-white rounded-2xl border-2 border-crimson-500/80 p-4 sm:p-6 shadow-sm overflow-x-auto">
            <div className="min-w-[760px] space-y-6">
              {/* Header Yoon */}
              <div className="border-b-2 border-slate-200 pb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-amber-600 text-white font-bold text-xs uppercase tracking-wider rounded-md">
                    Bagian 2
                  </span>
                  <span className="font-extrabold text-slate-900 text-lg sm:text-xl">
                    Kombinasi Aksara Glides (Yōon - 拗音) {category === 'katakana' ? 'Katakana' : 'Hiragana'}
                  </span>
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {category === 'katakana'
                    ? 'Gabungan huruf baris -i dengan ャ (ya), ュ (yu), ョ (yo) kecil'
                    : 'Gabungan huruf baris -i dengan ゃ (ya), ゅ (yu), ょ (yo) kecil'}
                </div>
              </div>

              {/* Grid 12 Kolom Yoon */}
              <div className="space-y-2">
                {(chartLayout[category] || chartLayout.hiragana).yoonTable.rows.map((rowItem, rIdx) => (
                  <div key={rIdx} className="grid grid-cols-12 gap-1.5 sm:gap-2">
                    {rowItem.items.map((cell, cIdx) => {
                      const isPlaying = playingId === `yoon-${cell.char}`;
                      return (
                        <button
                          key={cIdx}
                          type="button"
                          onClick={() => handlePlayAudio(`yoon-${cell.char}`, cell.char)}
                          className={`h-16 sm:h-20 rounded-lg border transition-all flex flex-col items-center justify-center p-1 group relative ${
                            isPlaying
                              ? 'bg-crimson-50 border-crimson-500 ring-2 ring-crimson-500 shadow-sm'
                              : 'bg-white border-slate-200 hover:border-crimson-400 hover:bg-slate-50 hover:shadow-sm'
                          }`}
                          title={`Dengarkan pelafalan ${cell.char} (${cell.romaji})`}
                        >
                          <span className="font-japanese text-xl sm:text-2xl font-medium text-slate-900 group-hover:text-crimson-600 transition-colors leading-none tracking-tighter">
                            {cell.char}
                          </span>
                          <span className="text-[10px] sm:text-xs font-semibold text-slate-500 mt-1 font-mono">
                            {cell.romaji}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================= TAMPILAN 2: GRID KARTU DETAIL & PENCARIAN ======================= */}
      {(viewMode === 'cards' || category === 'kanji') && (
        <div className="space-y-6">
          {/* Filter Bar: Grup Tipe, Pencarian, & Baris */}
          <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm space-y-4">
            {/* Filter Sub-Grup Tab (Hiragana/Katakana) */}
            {category !== 'kanji' && (
              <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
                  Kategori:
                </span>
                {[
                  { key: 'all', label: 'Semua (107)' },
                  { key: 'seion', label: 'Dasar / Seion (46)' },
                  { key: 'dakuon', label: 'Dakuon ゛(20)' },
                  { key: 'handakuon', label: 'Handakuon ゜(5)' },
                  { key: 'yoon', label: 'Kombinasi / Yōon (36)' },
                ].map((g) => (
                  <button
                    key={g.key}
                    type="button"
                    onClick={() => {
                      setGroupFilter(g.key);
                      setActiveRow('Semua');
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      groupFilter === g.key
                        ? 'bg-crimson-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input Pencarian */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Cari karakter ${category}, romaji, arti kata, atau contoh...`}
                className="w-full pl-10 pr-9 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-crimson-500 focus:ring-1 focus:ring-crimson-500 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  aria-label="Hapus pencarian"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Baris Filter (Hiragana / Katakana) */}
            {rowOptions.length > 0 && (
              <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
                <span className="text-slate-500 font-medium whitespace-nowrap mr-1">Baris:</span>
                {rowOptions.map((rowName) => (
                  <button
                    key={rowName}
                    type="button"
                    onClick={() => setActiveRow(rowName)}
                    className={`px-2.5 py-1 rounded-md font-medium whitespace-nowrap transition-colors ${
                      activeRow === rowName
                        ? 'bg-slate-800 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {rowName}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Grid Kartu Karakter */}
          {filteredData.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredData.map((item) => {
                const isPlaying = playingId === item.id;
                const isKanji = category === 'kanji';

                return (
                  <div
                    key={item.id}
                    className="group bg-white rounded-xl border border-slate-200/90 hover:border-crimson-300 hover:shadow-md transition-all duration-200 p-4 flex flex-col justify-between relative overflow-hidden"
                  >
                    {/* Header Kartu: Romaji & Tombol Audio */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 tracking-wide font-mono">
                          {item.romaji}
                        </span>
                        {item.groupLabel && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-crimson-50 text-crimson-700 font-medium hidden sm:inline-block">
                            {item.row}
                          </span>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => handlePlayAudio(item.id, item.char)}
                        className={`p-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-600 ${
                          isPlaying
                            ? 'bg-crimson-600 text-white playing-audio'
                            : 'text-slate-500 hover:text-crimson-600 hover:bg-crimson-50'
                        }`}
                        title={`Dengarkan pengucapan ${item.char}`}
                        aria-label={`Dengarkan pengucapan ${item.char}`}
                      >
                        <Volume2 size={18} />
                      </button>
                    </div>

                    {/* Tampilan Huruf Ukuran Menonjol */}
                    <div className="my-3 text-center">
                      <span className="font-japanese text-5xl sm:text-6xl font-normal text-slate-900 block group-hover:text-crimson-700 transition-colors select-all leading-tight">
                        {item.char}
                      </span>
                    </div>

                    {/* Info Detail Karakter */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                      {/* Makna */}
                      <div className="text-center font-medium text-slate-800 line-clamp-1" title={item.meaning}>
                        {item.meaning}
                      </div>

                      {/* Khusus Kanji */}
                      {isKanji && (
                        <div className="bg-slate-50 rounded-lg p-2 space-y-1 text-[11px] text-slate-600">
                          <div>
                            <span className="font-semibold text-slate-500">On:</span> {item.onyomi || '-'}
                          </div>
                          <div>
                            <span className="font-semibold text-slate-500">Kun:</span> {item.kunyomi || '-'}
                          </div>
                          <div className="flex items-center justify-between text-slate-400 pt-0.5 border-t border-slate-200/50">
                            <span>Level: {item.level}</span>
                            <span>{item.strokes} Goresan</span>
                          </div>
                        </div>
                      )}

                      {/* Contoh Kata */}
                      {item.example && (
                        <div className="pt-1 text-[11px] text-slate-500 bg-slate-50/70 rounded px-2 py-1.5 flex items-center justify-between">
                          <span className="font-japanese font-medium text-slate-800">{item.example.word}</span>
                          <span className="text-slate-500 truncate ml-1">{item.example.meaning}</span>
                        </div>
                      )}
                    </div>

                    {/* Tombol Tata Cara Penulisan Khusus Hiragana */}
                    {category === 'hiragana' && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedStrokeChar(item);
                        }}
                        className="w-full mt-2.5 py-1.5 px-2 rounded-lg bg-crimson-50 hover:bg-crimson-100 text-crimson-700 text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors border border-crimson-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-600"
                        title={`Lihat tata cara penulisan ${item.char} langkah demi langkah`}
                      >
                        <PenTool size={13} />
                        <span>Tata Cara Tulis</span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            /* Empty State */
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center font-bold text-lg">
                ?
              </div>
              <h3 className="text-lg font-bold text-slate-800">Karakter Tidak Ditemukan</h3>
              <p className="text-sm text-slate-500">
                Tidak ada karakter yang cocok dengan kata kunci &quot;{searchQuery}&quot;. Coba ganti kata kunci atau pilih kategori lain.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setGroupFilter('all');
                  setActiveRow('Semua');
                }}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-crimson-50 text-crimson-700 hover:bg-crimson-100 transition-colors"
              >
                Reset Pencarian
              </button>
            </div>
          )}
        </div>
      )}

      {/* Modal Tata Cara Penulisan Goresan Step by Step */}
      {selectedStrokeChar && (
        <StrokeModal
          characterItem={selectedStrokeChar}
          onClose={() => setSelectedStrokeChar(null)}
        />
      )}
    </div>
  );
}
