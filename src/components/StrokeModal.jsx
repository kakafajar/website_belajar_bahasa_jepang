import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Volume2,
  PenTool,
  Trash2,
  Info,
  RotateCcw,
  Eye,
  EyeOff,
} from './Icons';
import { hiraganaStrokeGuide } from '../data/hiraganaStrokeData';
import { playJapaneseAudio } from '../data/japaneseData';

// ==================== PEMETAAN HIRAGANA ====================
const hiraganaDakuonBaseMap = {
  // G -> K
  'が': { baseChar: 'か', baseRomaji: 'ka', note: 'Ditulis mengikuti huruf dasar "か" ditambah 2 titik tenten (゛) di kanan atas.' },
  'ぎ': { baseChar: 'き', baseRomaji: 'ki', note: 'Ditulis mengikuti huruf dasar "き" ditambah 2 titik tenten (゛) di kanan atas.' },
  'ぐ': { baseChar: 'く', baseRomaji: 'ku', note: 'Ditulis mengikuti huruf dasar "く" ditambah 2 titik tenten (゛) di kanan atas.' },
  'げ': { baseChar: 'け', baseRomaji: 'ke', note: 'Ditulis mengikuti huruf dasar "け" ditambah 2 titik tenten (゛) di kanan atas.' },
  'ご': { baseChar: 'こ', baseRomaji: 'ko', note: 'Ditulis mengikuti huruf dasar "こ" ditambah 2 titik tenten (゛) di kanan atas.' },
  // Z -> S
  'ざ': { baseChar: 'さ', baseRomaji: 'sa', note: 'Ditulis mengikuti huruf dasar "さ" ditambah 2 titik tenten (゛) di kanan atas.' },
  'じ': { baseChar: 'し', baseRomaji: 'shi', note: 'Ditulis mengikuti huruf dasar "し" ditambah 2 titik tenten (゛) di kanan atas.' },
  'ず': { baseChar: 'す', baseRomaji: 'su', note: 'Ditulis mengikuti huruf dasar "す" ditambah 2 titik tenten (゛) di kanan atas.' },
  'ぜ': { baseChar: 'せ', baseRomaji: 'se', note: 'Ditulis mengikuti huruf dasar "せ" ditambah 2 titik tenten (゛) di kanan atas.' },
  'ぞ': { baseChar: 'そ', baseRomaji: 'so', note: 'Ditulis mengikuti huruf dasar "そ" ditambah 2 titik tenten (゛) di kanan atas.' },
  // D -> T
  'だ': { baseChar: 'た', baseRomaji: 'ta', note: 'Ditulis mengikuti huruf dasar "た" ditambah 2 titik tenten (゛) di kanan atas.' },
  'ぢ': { baseChar: 'ち', baseRomaji: 'chi', note: 'Ditulis mengikuti huruf dasar "ち" ditambah 2 titik tenten (゛) di kanan atas.' },
  'づ': { baseChar: 'つ', baseRomaji: 'tsu', note: 'Ditulis mengikuti huruf dasar "つ" ditambah 2 titik tenten (゛) di kanan atas.' },
  'で': { baseChar: 'て', baseRomaji: 'te', note: 'Ditulis mengikuti huruf dasar "て" ditambah 2 titik tenten (゛) di kanan atas.' },
  'ど': { baseChar: 'と', baseRomaji: 'to', note: 'Ditulis mengikuti huruf dasar "と" ditambah 2 titik tenten (゛) di kanan atas.' },
  // B -> H
  'ば': { baseChar: 'は', baseRomaji: 'ha', note: 'Ditulis mengikuti huruf dasar "は" ditambah 2 titik tenten (゛) di kanan atas.' },
  'び': { baseChar: 'ひ', baseRomaji: 'hi', note: 'Ditulis mengikuti huruf dasar "ひ" ditambah 2 titik tenten (゛) di kanan atas.' },
  'ぶ': { baseChar: 'ふ', baseRomaji: 'fu', note: 'Ditulis mengikuti huruf dasar "ふ" ditambah 2 titik tenten (゛) di kanan atas.' },
  'べ': { baseChar: 'へ', baseRomaji: 'he', note: 'Ditulis mengikuti huruf dasar "へ" ditambah 2 titik tenten (゛) di kanan atas.' },
  'ぼ': { baseChar: 'ほ', baseRomaji: 'ho', note: 'Ditulis mengikuti huruf dasar "ほ" ditambah 2 titik tenten (゛) di kanan atas.' },
  // P -> H (Handakuon)
  'ぱ': { baseChar: 'は', baseRomaji: 'ha', note: 'Ditulis mengikuti huruf dasar "は" ditambah lingkaran kecil maru (゜) di kanan atas.' },
  'ぴ': { baseChar: 'ひ', baseRomaji: 'hi', note: 'Ditulis mengikuti huruf dasar "ひ" ditambah lingkaran kecil maru (゜) di kanan atas.' },
  'ぷ': { baseChar: 'ふ', baseRomaji: 'fu', note: 'Ditulis mengikuti huruf dasar "ふ" ditambah lingkaran kecil maru (゜) di kanan atas.' },
  'ぺ': { baseChar: 'へ', baseRomaji: 'he', note: 'Ditulis mengikuti huruf dasar "へ" ditambah lingkaran kecil maru (゜) di kanan atas.' },
  'ぽ': { baseChar: 'ほ', baseRomaji: 'ho', note: 'Ditulis mengikuti huruf dasar "ほ" ditambah lingkaran kecil maru (゜) di kanan atas.' },
};

const hiraganaSeionToRomaji = {
  'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
  'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
  'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
  'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
  'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
  'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
  'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo',
  'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
  'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
  'わ': 'wa', 'を': 'wo', 'ん': 'n',
};

// ==================== PEMETAAN KATAKANA ====================
const katakanaDakuonBaseMap = {
  // G -> K
  'ガ': { baseChar: 'カ', baseRomaji: 'ka', note: 'Ditulis mengikuti huruf dasar "カ" ditambah 2 titik tenten (゛) di kanan atas.' },
  'ギ': { baseChar: 'キ', baseRomaji: 'ki', note: 'Ditulis mengikuti huruf dasar "キ" ditambah 2 titik tenten (゛) di kanan atas.' },
  'グ': { baseChar: 'ク', baseRomaji: 'ku', note: 'Ditulis mengikuti huruf dasar "ク" ditambah 2 titik tenten (゛) di kanan atas.' },
  'ゲ': { baseChar: 'ケ', baseRomaji: 'ke', note: 'Ditulis mengikuti huruf dasar "ケ" ditambah 2 titik tenten (゛) di kanan atas.' },
  'ゴ': { baseChar: 'コ', baseRomaji: 'ko', note: 'Ditulis mengikuti huruf dasar "コ" ditambah 2 titik tenten (゛) di kanan atas.' },
  // Z -> S
  'ザ': { baseChar: 'サ', baseRomaji: 'sa', note: 'Ditulis mengikuti huruf dasar "サ" ditambah 2 titik tenten (゛) di kanan atas.' },
  'ジ': { baseChar: 'シ', baseRomaji: 'shi', note: 'Ditulis mengikuti huruf dasar "シ" ditambah 2 titik tenten (゛) di kanan atas.' },
  'ズ': { baseChar: 'ス', baseRomaji: 'su', note: 'Ditulis mengikuti huruf dasar "ス" ditambah 2 titik tenten (゛) di kanan atas.' },
  'ゼ': { baseChar: 'セ', baseRomaji: 'se', note: 'Ditulis mengikuti huruf dasar "セ" ditambah 2 titik tenten (゛) di kanan atas.' },
  'ゾ': { baseChar: 'ソ', baseRomaji: 'so', note: 'Ditulis mengikuti huruf dasar "ソ" ditambah 2 titik tenten (゛) di kanan atas.' },
  // D -> T
  'ダ': { baseChar: 'タ', baseRomaji: 'ta', note: 'Ditulis mengikuti huruf dasar "タ" ditambah 2 titik tenten (゛) di kanan atas.' },
  'ヂ': { baseChar: 'チ', baseRomaji: 'chi', note: 'Ditulis mengikuti huruf dasar "チ" ditambah 2 titik tenten (゛) di kanan atas.' },
  'ヅ': { baseChar: 'ツ', baseRomaji: 'tsu', note: 'Ditulis mengikuti huruf dasar "ツ" ditambah 2 titik tenten (゛) di kanan atas.' },
  'デ': { baseChar: 'テ', baseRomaji: 'te', note: 'Ditulis mengikuti huruf dasar "テ" ditambah 2 titik tenten (゛) di kanan atas.' },
  'ド': { baseChar: 'ト', baseRomaji: 'to', note: 'Ditulis mengikuti huruf dasar "ト" ditambah 2 titik tenten (゛) di kanan atas.' },
  // B -> H
  'バ': { baseChar: 'ハ', baseRomaji: 'ha', note: 'Ditulis mengikuti huruf dasar "ハ" ditambah 2 titik tenten (゛) di kanan atas.' },
  'ビ': { baseChar: 'ヒ', baseRomaji: 'hi', note: 'Ditulis mengikuti huruf dasar "ヒ" ditambah 2 titik tenten (゛) di kanan atas.' },
  'ブ': { baseChar: 'フ', baseRomaji: 'fu', note: 'Ditulis mengikuti huruf dasar "フ" ditambah 2 titik tenten (゛) di kanan atas.' },
  'ベ': { baseChar: 'ヘ', baseRomaji: 'he', note: 'Ditulis mengikuti huruf dasar "ヘ" ditambah 2 titik tenten (゛) di kanan atas.' },
  'ボ': { baseChar: 'ホ', baseRomaji: 'ho', note: 'Ditulis mengikuti huruf dasar "ホ" ditambah 2 titik tenten (゛) di kanan atas.' },
  // P -> H (Handakuon)
  'パ': { baseChar: 'ハ', baseRomaji: 'ha', note: 'Ditulis mengikuti huruf dasar "ハ" ditambah lingkaran kecil maru (゜) di kanan atas.' },
  'ピ': { baseChar: 'ヒ', baseRomaji: 'hi', note: 'Ditulis mengikuti huruf dasar "ヒ" ditambah lingkaran kecil maru (゜) di kanan atas.' },
  'プ': { baseChar: 'フ', baseRomaji: 'fu', note: 'Ditulis mengikuti huruf dasar "フ" ditambah lingkaran kecil maru (゜) di kanan atas.' },
  'ペ': { baseChar: 'ヘ', baseRomaji: 'he', note: 'Ditulis mengikuti huruf dasar "ヘ" ditambah lingkaran kecil maru (゜) di kanan atas.' },
  'ポ': { baseChar: 'ホ', baseRomaji: 'ho', note: 'Ditulis mengikuti huruf dasar "ホ" ditambah lingkaran kecil maru (゜) di kanan atas.' },
  // V -> U (Katakana khusus)
  'ヴ': { baseChar: 'ウ', baseRomaji: 'u', note: 'Ditulis mengikuti huruf dasar "ウ" ditambah 2 titik tenten (゛).' },
};

const katakanaSeionToRomaji = {
  'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o',
  'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko',
  'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so',
  'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to',
  'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no',
  'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho',
  'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo',
  'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo',
  'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro',
  'ワ': 'wa', 'ヲ': 'wo', 'ン': 'n',
};

// Pemetaan huruf kecil Katakana ke huruf dasar penuh
const katakanaSmallToFull = {
  'ャ': { baseChar: 'ヤ', baseRomaji: 'ya' },
  'ュ': { baseChar: 'ユ', baseRomaji: 'yu' },
  'ョ': { baseChar: 'ヨ', baseRomaji: 'yo' },
  'ァ': { baseChar: 'ア', baseRomaji: 'a' },
  'ィ': { baseChar: 'イ', baseRomaji: 'i' },
  'ゥ': { baseChar: 'ウ', baseRomaji: 'u' },
  'ェ': { baseChar: 'エ', baseRomaji: 'e' },
  'ォ': { baseChar: 'オ', baseRomaji: 'o' },
};

// Helper untuk mendapatkan link animasi gif resmi dari jepang.org
// Pada tutorial jepang.org (https://jepang.org/tutorial/huruf-katakana-dan-cara-penulisannya),
// berkas animasi Katakana berakhiran 'k' (contoh: ak.gif, shik.gif, tsuk.gif, fuk.gif, nk.gif),
// sedangkan Hiragana tanpa akhiran 'k' (contoh: a.gif, shi.gif, tsu.gif, fu.gif, n.gif).
function getJepangOrgGifUrl(romaji, isKatakana) {
  const folder = isKatakana ? 'katakana' : 'hiragana';
  const filename = isKatakana ? `${romaji}k.gif` : `${romaji}.gif`;
  return `https://jepang.org/images/tutorial/${folder}/${filename}`;
}

// Fungsi pencocokan animasi suku kata dasar untuk Hiragana & Katakana
function resolveAnimationData(characterItem, scriptType) {
  const char = characterItem.char || '';
  const romaji = (characterItem.romaji || '').toLowerCase().trim();

  // Deteksi apakah Katakana (berdasarkan prop scriptType atau karakter unicode Katakana)
  const isKatakana = scriptType === 'katakana' || /[\u30A0-\u30FF]/.test(char);
  const scriptName = isKatakana ? 'Katakana' : 'Hiragana';

  const dakuonMap = isKatakana ? katakanaDakuonBaseMap : hiraganaDakuonBaseMap;
  const seionMap = isKatakana ? katakanaSeionToRomaji : hiraganaSeionToRomaji;

  // 1. Kasus Kombinasi (2 karakter, misal きゃ / キャ, しゅ / シュ, dll.)
  if (char.length > 1) {
    const firstChar = char[0];
    const secondSmallChar = char[1];

    let secondBaseChar = '';
    let secondBaseRomaji = '';

    if (isKatakana) {
      const smallInfo = katakanaSmallToFull[secondSmallChar] || { baseChar: 'ヤ', baseRomaji: 'ya' };
      secondBaseChar = smallInfo.baseChar;
      secondBaseRomaji = smallInfo.baseRomaji;
    } else {
      secondBaseChar = secondSmallChar === 'ゃ' ? 'や' : secondSmallChar === 'ゅ' ? 'ゆ' : 'よ';
      secondBaseRomaji = secondSmallChar === 'ゃ' ? 'ya' : secondSmallChar === 'ゅ' ? 'yu' : 'yo';
    }

    const firstDakuonInfo = dakuonMap[firstChar];
    const firstBaseChar = firstDakuonInfo ? firstDakuonInfo.baseChar : firstChar;
    const firstBaseRomaji = firstDakuonInfo ? firstDakuonInfo.baseRomaji : (seionMap[firstChar] || 'ki');

    return {
      type: 'yoon',
      isKatakana,
      scriptName,
      badge: `${scriptName} Kombinasi`,
      description: `Huruf kombinasi ${char} ditulis dengan menggabungkan huruf ${firstChar} dan huruf pendamping kecil ${secondSmallChar} (sekitar 1/2 ukuran normal).`,
      parts: [
        {
          id: 'part-1',
          tabName: `1. Huruf Utama: ${firstChar}`,
          displayChar: firstChar,
          baseChar: firstBaseChar,
          baseRomaji: firstBaseRomaji,
          gifUrl: getJepangOrgGifUrl(firstBaseRomaji, isKatakana),
          wikimediaFallback: `https://commons.wikimedia.org/wiki/Special:FilePath/${scriptName}_${firstBaseChar}_stroke_order_animation.gif`,
          note: firstDakuonInfo
            ? `Tulis huruf dasar "${firstBaseChar}" lalu tambahkan tanda tenten (゛).`
            : `Tulis huruf dasar "${firstChar}" secara utuh.`,
        },
        {
          id: 'part-2',
          tabName: `2. Huruf Kecil: ${secondSmallChar}`,
          displayChar: secondSmallChar,
          baseChar: secondBaseChar,
          baseRomaji: secondBaseRomaji,
          gifUrl: getJepangOrgGifUrl(secondBaseRomaji, isKatakana),
          wikimediaFallback: `https://commons.wikimedia.org/wiki/Special:FilePath/${scriptName}_${secondBaseChar}_stroke_order_animation.gif`,
          note: `Tulis huruf "${secondBaseChar}" dengan ukuran lebih kecil (1/2 proporsi normal) di sisi kanan bawah huruf pertama.`,
        },
      ],
    };
  }

  // 2. Kasus Dakuon & Handakuon (misal が / ガ, ぱ / パ)
  if (dakuonMap[char]) {
    const info = dakuonMap[char];
    const isHandakuon = isKatakana ? char.match(/[パピプペポ]/) : char.match(/[ぱぴぷぺぽ]/);
    const badgeLabel = isHandakuon ? `${scriptName} Handakuon (Maru)` : `${scriptName} Dakuon (Tenten)`;

    return {
      type: 'dakuon',
      isKatakana,
      scriptName,
      badge: badgeLabel,
      description: `Huruf ${char} (${romaji}) menggunakan pola penulisan huruf dasar ${info.baseChar} (${info.baseRomaji}) dengan tanda aksen di kanan atas.`,
      parts: [
        {
          id: 'part-1',
          tabName: `Huruf Dasar: ${info.baseChar}`,
          displayChar: char,
          baseChar: info.baseChar,
          baseRomaji: info.baseRomaji,
          gifUrl: getJepangOrgGifUrl(info.baseRomaji, isKatakana),
          wikimediaFallback: `https://commons.wikimedia.org/wiki/Special:FilePath/${scriptName}_${info.baseChar}_stroke_order_animation.gif`,
          note: info.note,
        },
      ],
    };
  }

  // 3. Kasus Seion Dasar (46 huruf murni)
  const baseRomaji = seionMap[char] || romaji;
  return {
    type: 'seion',
    isKatakana,
    scriptName,
    badge: `${scriptName} Dasar`,
    description: `Huruf dasar ${scriptName} ${char} (${romaji}). Ikuti alur kuas kaligrafi pada animasi resmi.`,
    parts: [
      {
        id: 'part-1',
        tabName: `Huruf: ${char}`,
        displayChar: char,
        baseChar: char,
        baseRomaji: baseRomaji,
        gifUrl: getJepangOrgGifUrl(baseRomaji, isKatakana),
        wikimediaFallback: `https://commons.wikimedia.org/wiki/Special:FilePath/${scriptName}_${char}_stroke_order_animation.gif`,
        note: 'Ikuti arah dan lekukan kuas dari goresan pertama hingga selesai.',
      },
    ],
  };
}

export default function StrokeModal({ characterItem, scriptType, onClose }) {
  if (!characterItem) return null;

  const char = characterItem.char;

  // Dapatkan konfigurasi animasi huruf (otomatis mengenali Hiragana / Katakana)
  const animConfig = resolveAnimationData(characterItem, scriptType);

  // State untuk tab bagian huruf (khusus huruf kombinasi yang memiliki 2 bagian)
  const [activePartIndex, setActivePartIndex] = useState(0);
  const activePart = animConfig.parts[activePartIndex] || animConfig.parts[0];

  // State audio & tracing kanvas
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [showTracingGhost, setShowTracingGhost] = useState(true);
  const [gifTimestamp, setGifTimestamp] = useState(Date.now());
  const [gifLoadError, setGifLoadError] = useState(false);

  // Canvas latihan menulis mandiri
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [penColor, setPenColor] = useState('#1e293b');
  const [penSize, setPenSize] = useState(7);

  const guide = hiraganaStrokeGuide[char] || {
    tip: 'Latihlah goresan secara teratur untuk mendapatkan proporsi huruf yang seimbang.',
  };

  // Keyboard shortcut: Escape untuk tutup modal
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Restart animasi GIF dari frame pertama
  const restartGifAnimation = () => {
    setGifTimestamp(Date.now());
    setGifLoadError(false);
  };

  // Ganti tab bagian huruf kombinasi
  const handleSelectPart = (idx) => {
    setActivePartIndex(idx);
    setGifTimestamp(Date.now());
    setGifLoadError(false);
  };

  // Logika interaktif kanvas latihan
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

  // URL GIF animasi yang sedang aktif
  const currentGifUrl = `${activePart.gifUrl}?t=${gifTimestamp}`;
  const fallbackGifUrl = activePart.wikimediaFallback;

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
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-crimson-600 text-white flex items-center justify-center font-bold text-2xl shadow-sm flex-shrink-0">
              <span className="font-japanese leading-none">{char}</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="stroke-modal-title" className="text-lg sm:text-xl font-extrabold text-slate-900 leading-tight">
                  Tata Cara Penulisan: {char} ({characterItem.romaji})
                </h2>
                <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-crimson-100 text-crimson-700">
                  {animConfig.badge}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Panduan animasi kaligrafi resmi (Kakijun) {animConfig.scriptName} Jepang
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
            
            {/* ===================== KOLOM KIRI: ANIMASI KALIGRAFI OTENTIK ===================== */}
            <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col items-center">
              
              {/* Header Animasi & Tab Switcher (Jika Kombinasi) */}
              <div className="w-full flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200/80">
                {animConfig.parts.length > 1 ? (
                  /* Tab Pilihan Suku Kata Dasar untuk Kombinasi */
                  <div className="flex items-center gap-1.5 bg-slate-200/70 p-1 rounded-xl">
                    {animConfig.parts.map((part, pIdx) => (
                      <button
                        key={part.id}
                        type="button"
                        onClick={() => handleSelectPart(pIdx)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                          activePartIndex === pIdx
                            ? 'bg-white text-slate-900 shadow-xs ring-1 ring-slate-300'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <span>{part.tabName}</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-crimson-600 animate-pulse"></span>
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Animasi Goresan Kuas Kaligrafi
                    </span>
                  </div>
                )}

                {/* Tombol Ulangi Animasi */}
                <button
                  type="button"
                  onClick={restartGifAnimation}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-crimson-600 text-xs font-semibold shadow-2xs transition-colors flex-shrink-0"
                  title="Putar ulang animasi dari awal"
                >
                  <RotateCcw size={13} />
                  <span>Ulangi Animasi</span>
                </button>
              </div>

              {/* Box Tampilan Animasi Kaligrafi Utama yang Lega */}
              <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px] aspect-square bg-[#fbf9f5] rounded-2xl border-2 border-slate-300 relative flex items-center justify-center shadow-inner overflow-hidden select-none">
                {/* Garis Kisi-Kisi Kaligrafi Tradisional (Sumbu Tengah) */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-dashed border-slate-300/80 pointer-events-none"></div>
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 border-l border-dashed border-slate-300/80 pointer-events-none"></div>
                <div className="absolute inset-2 border border-dashed border-slate-200/60 rounded-xl pointer-events-none"></div>

                {/* Animasi GIF Otentik dari Jepang.org */}
                <div className="relative w-full h-full p-4 flex items-center justify-center">
                  <img
                    src={gifLoadError ? fallbackGifUrl : currentGifUrl}
                    alt={`Animasi penulisan ${animConfig.scriptName} ${activePart.baseChar}`}
                    onError={() => {
                      if (!gifLoadError) setGifLoadError(true);
                    }}
                    className="w-full h-full object-contain mix-blend-multiply drop-shadow-sm"
                  />

                  {/* Badge Label Huruf Dasar */}
                  <div className="absolute bottom-3 right-3 bg-slate-900/85 text-white text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-xs shadow-xs flex items-center gap-1">
                    <span>Huruf:</span>
                    <span className="font-japanese font-bold text-amber-300 text-sm">
                      {activePart.baseChar}
                    </span>
                    <span className="text-slate-300 text-[10px]">({activePart.baseRomaji})</span>
                  </div>
                </div>
              </div>

              {/* Keterangan Cara Penulisan & Pencocokan Suku Kata Dasar */}
              <div className="w-full mt-4 bg-white border border-slate-200 rounded-xl p-3.5 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <Info size={14} className="text-crimson-600" />
                    <span>Petunjuk Penulisan:</span>
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-5">
                  {activePart.note}
                </p>
                {animConfig.description && (
                  <p className="text-[11px] text-slate-500 leading-relaxed pl-5 pt-1 border-t border-slate-100">
                    {animConfig.description}
                  </p>
                )}
              </div>
            </div>

            {/* ===================== KOLOM KANAN: KANVAS LATIHAN MANDIRI ===================== */}
            <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-between h-full">
              
              {/* Header Kanvas dengan Tombol Hapus & Tracing Ghost */}
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
                    title="Nyalakan atau sembunyikan bayangan huruf untuk menjiplak"
                  >
                    {showTracingGhost ? <Eye size={13} /> : <EyeOff size={13} />}
                    <span className="hidden sm:inline">Pola Jiplak</span>
                  </button>

                  <button
                    type="button"
                    onClick={clearCanvas}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-crimson-600 text-xs font-semibold shadow-2xs transition-colors"
                    title="Hapus coretan kanvas"
                  >
                    <Trash2 size={13} />
                    <span>Hapus</span>
                  </button>
                </div>
              </div>

              {/* Box Kanvas yang Lega dan Proporsional */}
              <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px] aspect-square bg-white rounded-2xl border-2 border-dashed border-slate-300 relative shadow-inner overflow-hidden select-none touch-none cursor-crosshair">
                {/* Garis Kisi-Kisi Tradisional */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-dashed border-slate-200 pointer-events-none"></div>
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 border-l border-dashed border-slate-200 pointer-events-none"></div>

                {/* Pola Bayangan Transparan Karakter Utuh untuk Menjiplak */}
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
