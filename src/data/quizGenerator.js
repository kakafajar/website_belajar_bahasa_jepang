// Generator Soal Kuis Dinamis & Acak untuk Hiragana, Katakana, dan Kanji
// Menghasilkan soal beragam (Membaca Romaji, Tebak Karakter, Huruf Mirip, Dakuon/Handakuon, Yoon, dan Kosakata)
import { hiraganaList, katakanaList, kanjiList, quizBank } from './japaneseData';

// Algoritma Fisher-Yates untuk pengacakan array secara adil dan seragam
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Pasangan huruf rawan tertukar (Visual Confusion Pairs)
const hiraganaSimilarPairs = [
  {
    chars: ['さ', 'き'],
    romajis: ['sa', 'ki'],
    tip: 'Huruf "さ" memiliki 1 garis horizontal melintang, sedangkan "き" memiliki 2 garis horizontal.',
  },
  {
    chars: ['わ', 'れ', 'ね'],
    romajis: ['wa', 're', 'ne'],
    tip: 'Sisi kanan "わ" melengkung bulat, "れ" melengkung keluar tajam, sedangkan "ね" memiliki simpul bulatan kecil di ujungnya.',
  },
  {
    chars: ['ぬ', 'め'],
    romajis: ['nu', 'me'],
    tip: 'Huruf "ぬ" memiliki lingkaran simpul di ujung ekor kanannya, sedangkan "め" terbuka mulus tanpa simpul.',
  },
  {
    chars: ['は', 'ほ', 'ま'],
    romajis: ['ha', 'ho', 'ma'],
    tip: 'Huruf "ほ" garis atasnya tertutup tidak menembus, "は" memiliki garis tiang kiri terpisah, sedangkan "ま" memiliki dua garis melintang dengan tiang tengah menembus.',
  },
  {
    chars: ['る', 'ろ'],
    romajis: ['ru', 'ro'],
    tip: 'Huruf "る" memiliki bulatan simpul di ujung bawah, sedangkan "ろ" terbuka melengkung tanpa simpul.',
  },
  {
    chars: ['い', 'り'],
    romajis: ['i', 'ri'],
    tip: 'Huruf "い" garis kirinya lebih panjang, sedangkan "り" garis kanannya yang lebih tinggi dan melengkung panjang.',
  },
  {
    chars: ['あ', 'お'],
    romajis: ['a', 'o'],
    tip: 'Huruf "あ" memiliki bulatan di tengah, sedangkan "お" memiliki aksen titik kecil di kanan atas.',
  },
];

const katakanaSimilarPairs = [
  {
    chars: ['シ', 'ツ'],
    romajis: ['shi', 'tsu'],
    tip: 'シ (shi) dua goresan kecilnya mendatar dan goresan panjang ditarik dari bawah ke atas. ツ (tsu) dua goresan kecilnya menurun dan goresan panjang ditarik dari atas ke bawah.',
  },
  {
    chars: ['ソ', 'ン'],
    romajis: ['so', 'n'],
    tip: 'ソ (so) goresan panjang ditarik dari atas ke bawah. ン (n) goresan panjang ditarik dari bawah ke atas dengan sudut lebih landai.',
  },
  {
    chars: ['ク', 'ケ', 'ワ'],
    romajis: ['ku', 'ke', 'wa'],
    tip: 'ク (ku) goresan kiri miring ke bawah, ケ (ke) memiliki garis horizontal di tengah, sedangkan ワ (wa) bagian atasnya bersudut kotak tegas.',
  },
  {
    chars: ['コ', 'ユ', 'ヨ'],
    romajis: ['ko', 'yu', 'yo'],
    tip: 'コ (ko) seperti kotak terbuka di kiri, ユ (yu) memiliki garis horizontal bawah yang menembus ke kanan, sedangkan ヨ (yo) memiliki tiga garis mendatar seperti sisir.',
  },
  {
    chars: ['ス', 'ヌ'],
    romajis: ['su', 'nu'],
    tip: 'ス (su) garis horizontal atas lalu turun miring dengan kaki kanan, sedangkan ヌ (nu) memiliki silangan dengan centang kecil di kanan bawah.',
  },
  {
    chars: ['チ', 'テ'],
    romajis: ['chi', 'te'],
    tip: 'チ (chi) goresan atas miring dengan tiang memotong melengkung, sedangkan テ (te) dua garis horizontal sejajar dengan ekor melengkung.',
  },
  {
    chars: ['ア', 'マ'],
    romajis: ['a', 'ma'],
    tip: 'ア (a) memiliki garis horizontal atas dengan kaki vertikal miring, sedangkan マ (ma) sudutnya lebih tajam dengan goresan tambahan di bawah.',
  },
];

// Kumpulan makna kata bahasa Indonesia untuk distractor kosakata
const hiraganaMeaningPool = [
  'Pagi', 'Malam', 'Anjing', 'Kucing', 'Laut', 'Stasiun', 'Teh', 'Payung',
  'Pohon', 'Mobil', 'Asap', 'Anak', 'Bunga Sakura', 'Putih', 'Sushi', 'Guru',
  'Langit', 'Telur', 'Peta', 'Bulan', 'Tangan', 'Teman', 'Musim panas', 'Jepang',
  'Boneka', 'Rumput laut', 'Cahaya', 'Kapal', 'Kamar', 'Bintang', 'Kota', 'Air',
  'Hutan', 'Gunung', 'Salju', 'Singa', 'Apel', 'Buku',
];

const katakanaMeaningPool = [
  'Kamera', 'Kunci', 'Kelas', 'Kue', 'Kopi', 'Salad', 'Kemeja', 'Olahraga',
  'Sweter', 'Sofa', 'Taksi', 'Keju', 'Tur', 'Televisi', 'Tomat', 'Pisau',
  'Berita', 'Mie', 'Dasi', 'Buku catatan', 'Daging ham', 'Pemanas', 'Garpu',
  'Helm', 'Hotel', 'Masker', 'Susu', 'Film', 'Menu', 'Motor', 'Kelapa',
  'Seragam', 'Yogurt', 'Radio', 'Apel', 'Aturan', 'Lemon', 'Robot', 'Anggur (Wine)',
  'Roti', 'Gas', 'Gitar', 'Gelas', 'Game', 'Golf', 'Desain', 'Jus', 'Pintu',
];

/**
 * Membuat paket 4 pilihan jawaban dengan 1 kunci dan 3 pengecoh unik.
 */
function buildOptions(correctVal, distractorPool) {
  const filtered = distractorPool.filter((item) => item !== correctVal);
  const pickedDistractors = shuffleArray(filtered).slice(0, 3);
  const options = shuffleArray([correctVal, ...pickedDistractors]);
  const correctAnswerIndex = options.indexOf(correctVal);
  return { options, correctAnswerIndex };
}

/**
 * 1. Tipe Soal: Kana ke Romaji (Membaca Karakter)
 */
function createKanaToRomajiQuestion(item, scriptName, allList) {
  const allRomaji = Array.from(new Set(allList.map((x) => x.romaji)));
  const { options, correctAnswerIndex } = buildOptions(item.romaji, allRomaji);

  return {
    id: `q-ltr-${item.id}-${Date.now()}-${Math.random()}`,
    typeBadge: 'Tebak Romaji',
    questionChar: item.char,
    audioText: item.char,
    prompt: `Bagaimana cara membaca huruf ${scriptName} di atas?`,
    options,
    correctAnswerIndex,
    explanation: `Huruf "${item.char}" dibaca "${item.romaji}". ${
      item.example ? `Contoh kata: ${item.example.word} (${item.example.meaning}).` : ''
    }`,
  };
}

/**
 * 2. Tipe Soal: Romaji ke Kana (Menebak Bentuk Karakter)
 */
function createRomajiToKanaQuestion(item, scriptName, allList) {
  // Pilih pengecoh yang satu kelompok baris atau sejenis agar menantang
  const sameGroupList = allList.filter((x) => x.group === item.group && x.char !== item.char);
  const pool = sameGroupList.length >= 3 ? sameGroupList : allList;
  const allChars = Array.from(new Set(pool.map((x) => x.char)));
  const { options, correctAnswerIndex } = buildOptions(item.char, allChars);

  return {
    id: `q-rtl-${item.id}-${Date.now()}-${Math.random()}`,
    typeBadge: 'Tebak Aksara',
    questionChar: item.romaji,
    audioText: item.char,
    prompt: `Manakah huruf ${scriptName} untuk bunyi "${item.romaji}"?`,
    options,
    correctAnswerIndex,
    explanation: `Huruf untuk bunyi "${item.romaji}" adalah "${item.char}". ${
      item.example ? `Contoh kata: ${item.example.word} (${item.example.meaning}).` : ''
    }`,
  };
}

/**
 * 3. Tipe Soal: Karakter Mirip / Jebakan Visual
 */
function createSimilarPairQuestion(scriptType, scriptName, allList) {
  const pairs = scriptType === 'katakana' ? katakanaSimilarPairs : hiraganaSimilarPairs;
  const selectedPair = pairs[Math.floor(Math.random() * pairs.length)];
  const targetIndex = Math.floor(Math.random() * selectedPair.chars.length);
  const targetChar = selectedPair.chars[targetIndex];
  const targetRomaji = selectedPair.romajis[targetIndex];

  // Distractor opsi dari pasangan miripnya plus tambahan romaji lain
  const candidateOptions = [...selectedPair.romajis];
  const otherRomajis = allList.map((x) => x.romaji).filter((r) => !candidateOptions.includes(r));
  while (candidateOptions.length < 4 && otherRomajis.length > 0) {
    const r = otherRomajis.splice(Math.floor(Math.random() * otherRomajis.length), 1)[0];
    candidateOptions.push(r);
  }

  const { options, correctAnswerIndex } = buildOptions(targetRomaji, candidateOptions);

  return {
    id: `q-sim-${targetChar}-${Date.now()}-${Math.random()}`,
    typeBadge: 'Awas Tertukar!',
    questionChar: targetChar,
    audioText: targetChar,
    prompt: `Perhatikan bentuknya dengan teliti! Bagaimana cara membaca huruf "${targetChar}"?`,
    options,
    correctAnswerIndex,
    explanation: `Huruf "${targetChar}" dibaca "${targetRomaji}". Tips membedakan: ${selectedPair.tip}`,
  };
}

/**
 * 4. Tipe Soal: Dakuon & Handakuon (Tanda Tenten ゛ & Maru ゜)
 */
function createDakuonQuestion(item, scriptName, allList) {
  const isHandakuon = item.group === 'handakuon';
  const accentName = isHandakuon ? 'lingkaran maru (゜)' : 'tanda tenten (゛)';
  const allRomaji = Array.from(new Set(allList.map((x) => x.romaji)));
  const { options, correctAnswerIndex } = buildOptions(item.romaji, allRomaji);

  return {
    id: `q-dak-${item.id}-${Date.now()}-${Math.random()}`,
    typeBadge: isHandakuon ? 'Handakuon (Maru)' : 'Dakuon (Tenten)',
    questionChar: item.char,
    audioText: item.char,
    prompt: `Huruf ${scriptName} dengan ${accentName} di atas dibaca...`,
    options,
    correctAnswerIndex,
    explanation: `Huruf "${item.char}" dibaca "${item.romaji}". ${
      item.example ? `Contoh kata: ${item.example.word} (${item.example.meaning}).` : ''
    }`,
  };
}

/**
 * 5. Tipe Soal: Kombinasi / Yōon (2 Karakter)
 */
function createYoonQuestion(item, scriptName, allList) {
  const yoonList = allList.filter((x) => x.group === 'yoon');
  const pool = yoonList.length >= 4 ? yoonList : allList;
  const allRomaji = Array.from(new Set(pool.map((x) => x.romaji)));
  const { options, correctAnswerIndex } = buildOptions(item.romaji, allRomaji);

  return {
    id: `q-yoon-${item.id}-${Date.now()}-${Math.random()}`,
    typeBadge: 'Kombinasi (Yōon)',
    questionChar: item.char,
    audioText: item.char,
    prompt: `Bagaimana cara membaca kombinasi dua huruf ${scriptName} di atas?`,
    options,
    correctAnswerIndex,
    explanation: `Kombinasi "${item.char}" dibaca meluncur menjadi "${item.romaji}". ${
      item.example ? `Contoh kata: ${item.example.word} (${item.example.meaning}).` : ''
    }`,
  };
}

/**
 * 6. Tipe Soal: Kosakata Sehari-hari & Arti
 */
function createVocabularyQuestion(item, scriptType, scriptName) {
  const meaningPool = scriptType === 'katakana' ? katakanaMeaningPool : hiraganaMeaningPool;
  const wordDisplay = item.example ? item.example.word : item.char;
  const correctMeaning = item.example ? item.example.meaning : item.meaning;

  const { options, correctAnswerIndex } = buildOptions(correctMeaning, meaningPool);

  return {
    id: `q-voc-${item.id}-${Date.now()}-${Math.random()}`,
    typeBadge: scriptType === 'katakana' ? 'Kata Serapan' : 'Kosakata Dasar',
    questionChar: wordDisplay,
    audioText: wordDisplay.split(' ')[0],
    prompt: `Apa arti dari kosakata ${scriptName} "${wordDisplay}" dalam Bahasa Indonesia?`,
    options,
    correctAnswerIndex,
    explanation: `Kosakata "${wordDisplay}" berarti "${correctMeaning}".`,
  };
}

/**
 * Generator Utama: Menghasilkan paket 10 soal acak yang kaya dan bervariasi
 * @param {'hiragana'|'katakana'|'kanji'} category
 * @param {number} totalQuestions
 */
export function generateRandomQuiz(category = 'hiragana', totalQuestions = 10) {
  // Jika kategori adalah Kanji, acak dari koleksi soal Kanji plus randomisasi opsi
  if (category === 'kanji') {
    const rawKanjiBank = quizBank.kanji || [];
    const shuffledBank = shuffleArray(rawKanjiBank);

    // Acak juga posisi pilihan gandanya agar selalu baru
    return shuffledBank.slice(0, totalQuestions).map((q, idx) => {
      const correctOption = q.options[q.correctAnswerIndex];
      const shuffledOptions = shuffleArray(q.options);
      const newCorrectIndex = shuffledOptions.indexOf(correctOption);

      return {
        ...q,
        id: `q-kanji-${idx}-${Date.now()}-${Math.random()}`,
        typeBadge: 'Kanji N5',
        options: shuffledOptions,
        correctAnswerIndex: newCorrectIndex,
      };
    });
  }

  const isKatakana = category === 'katakana';
  const scriptName = isKatakana ? 'Katakana' : 'Hiragana';
  const dataset = isKatakana ? katakanaList : hiraganaList;

  // Bagi dataset per kelompok huruf
  const seionItems = dataset.filter((x) => x.group === 'seion');
  const dakuonItems = dataset.filter((x) => x.group === 'dakuon' || x.group === 'handakuon');
  const yoonItems = dataset.filter((x) => x.group === 'yoon');
  const vocabItems = dataset.filter((x) => x.example && x.example.word && x.example.meaning);

  const questionList = [];
  const usedKeys = new Set();

  // Helper agar tidak ada soal dengan karakter/kata yang persis sama dalam 1 sesi
  function tryAdd(questionGenerator) {
    for (let attempts = 0; attempts < 10; attempts++) {
      const q = questionGenerator();
      const dedupeKey = `${q.typeBadge}-${q.questionChar}`;
      if (!usedKeys.has(dedupeKey)) {
        usedKeys.add(dedupeKey);
        questionList.push(q);
        return true;
      }
    }
    return false;
  }

  // 1. Tipe Huruf Mirip / Jebakan (2 Soal)
  tryAdd(() => createSimilarPairQuestion(category, scriptName, dataset));
  tryAdd(() => createSimilarPairQuestion(category, scriptName, dataset));

  // 2. Tipe Kana ke Romaji (3 Soal dari Seion acak)
  const shuffledSeion = shuffleArray(seionItems);
  shuffledSeion.slice(0, 5).forEach((item) => {
    if (questionList.length < 5) {
      tryAdd(() => createKanaToRomajiQuestion(item, scriptName, dataset));
    }
  });

  // 3. Tipe Romaji ke Kana (2 Soal)
  const shuffledForRtl = shuffleArray(seionItems);
  shuffledForRtl.slice(0, 5).forEach((item) => {
    if (questionList.length < 7) {
      tryAdd(() => createRomajiToKanaQuestion(item, scriptName, dataset));
    }
  });

  // 4. Tipe Dakuon / Handakuon (1 Soal)
  if (dakuonItems.length > 0) {
    const pickedDakuon = shuffleArray(dakuonItems)[0];
    tryAdd(() => createDakuonQuestion(pickedDakuon, scriptName, dataset));
  }

  // 5. Tipe Kombinasi / Yoon (1 Soal)
  if (yoonItems.length > 0) {
    const pickedYoon = shuffleArray(yoonItems)[0];
    tryAdd(() => createYoonQuestion(pickedYoon, scriptName, dataset));
  }

  // 6. Tipe Kosakata Nyata (1 Soal)
  if (vocabItems.length > 0) {
    const pickedVocab = shuffleArray(vocabItems)[0];
    tryAdd(() => createVocabularyQuestion(pickedVocab, category, scriptName));
  }

  // Jika belum genap target (misal 10), isi dengan soal Kana ke Romaji / Kosakata tambahan
  let fallbackIndex = 0;
  const fallbackPool = shuffleArray(dataset);
  while (questionList.length < totalQuestions && fallbackIndex < fallbackPool.length) {
    const item = fallbackPool[fallbackIndex++];
    tryAdd(() => createKanaToRomajiQuestion(item, scriptName, dataset));
  }

  // Terakhir acak urutan soal secara keseluruhan
  return shuffleArray(questionList).slice(0, totalQuestions);
}
