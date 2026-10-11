// Data urutan goresan (Stroke Order / Kakijun) lengkap untuk huruf Hiragana beserta koordinat vektor SVG

export const hiraganaStrokeGuide = {
  'あ': {
    char: 'あ',
    romaji: 'a',
    totalStrokes: 3,
    tip: 'Pastikan garis vertikal sedikit melengkung ke kiri, dan lingkaran ketiga menyapu besar melewati garis tengah.',
    strokes: [
      { step: 1, name: 'Garis horizontal', instruction: 'Tarik garis mendatar pendek dari kiri ke kanan dengan sedikit kemiringan ke atas.', type: 'tome', path: 'M 24 35 Q 50 32 76 30', start: { x: 24, y: 35 }, dir: '→' },
      { step: 2, name: 'Garis vertikal melengkung', instruction: 'Tarik garis vertikal dari atas menembus garis pertama, melengkung lembut ke kiri bawah.', type: 'tome', path: 'M 52 16 Q 50 50 42 84', start: { x: 52, y: 16 }, dir: '↓' },
      { step: 3, name: 'Lingkaran simpul terbuka', instruction: 'Mulai dari tengah, buat putaran kurva melengkung ke kiri bawah lalu memutar besar ke kanan dan menyapu ke bawah.', type: 'harai', path: 'M 58 44 C 36 64 28 80 44 86 C 60 90 78 72 78 54 C 78 38 58 38 46 50 C 36 60 32 74 36 82', start: { x: 58, y: 44 }, dir: '↺' }
    ]
  },
  'い': {
    char: 'い',
    romaji: 'i',
    totalStrokes: 2,
    tip: 'Garis kiri harus lebih panjang daripada garis kanan dan diakhiri dengan sedikit kaitan ke atas (hane).',
    strokes: [
      { step: 1, name: 'Garis kiri dengan kait', instruction: 'Tarik garis melengkung dari atas ke bawah di sebelah kiri, lalu akhiri dengan sedikit kaitan ke kanan atas.', type: 'hane', path: 'M 32 25 C 28 50 30 72 38 78 Q 42 78 45 68', start: { x: 32, y: 25 }, dir: '↓⤴' },
      { step: 2, name: 'Garis kanan pendek', instruction: 'Tarik garis melengkung yang lebih pendek di sebelah kanan dari atas ke bawah sejajar garis pertama.', type: 'tome', path: 'M 68 34 C 72 50 72 62 70 70', start: { x: 68, y: 34 }, dir: '↓' }
    ]
  },
  'う': {
    char: 'う',
    romaji: 'u',
    totalStrokes: 2,
    tip: 'Lengkungan bawah harus cukup lebar dan proporsional menyerupai bentuk telinga.',
    strokes: [
      { step: 1, name: 'Titik miring atas', instruction: 'Buat goresan miring kecil pendek dari kiri atas ke kanan bawah.', type: 'tome', path: 'M 42 22 Q 52 26 58 30', start: { x: 42, y: 22 }, dir: '↘' },
      { step: 2, name: 'Lengkungan membulat', instruction: 'Mulai dari bawah titik, tarik garis melengkung besar ke kanan lalu memutar ke kiri bawah.', type: 'harai', path: 'M 36 42 C 46 36 66 38 68 56 C 70 72 50 82 34 84', start: { x: 36, y: 42 }, dir: '↷' }
    ]
  },
  'え': {
    char: 'え',
    romaji: 'e',
    totalStrokes: 2,
    tip: 'Goresan kedua dilakukan dalam satu tarikan pena bersambung tanpa mengangkat pensil.',
    strokes: [
      { step: 1, name: 'Titik miring atas', instruction: 'Buat garis miring kecil di bagian tengah atas.', type: 'tome', path: 'M 45 20 Q 52 24 58 28', start: { x: 45, y: 20 }, dir: '↘' },
      { step: 2, name: 'Tarikan gelombang Z', instruction: 'Tarik garis horizontal ke kanan, serong ke kiri bawah membentuk huruf Z, lalu buat gelombang mendatar ke kanan.', type: 'tome', path: 'M 38 42 L 64 42 L 36 68 Q 66 65 76 74', start: { x: 38, y: 42 }, dir: '⚡' }
    ]
  },
  'お': {
    char: 'お',
    romaji: 'o',
    totalStrokes: 3,
    tip: 'Jangan lupakan titik kecil di kanan atas pada langkah ketiga.',
    strokes: [
      { step: 1, name: 'Garis horizontal', instruction: 'Tarik garis mendatar pendek dari kiri ke kanan.', type: 'tome', path: 'M 25 34 L 62 30', start: { x: 25, y: 34 }, dir: '→' },
      { step: 2, name: 'Vertikal dan putaran', instruction: 'Tarik garis vertikal dari atas menembus garis pertama, lalu buat lengkungan memutar besar ke kanan bawah.', type: 'tome', path: 'M 45 18 L 45 62 C 45 78 60 84 72 74 C 82 65 82 50 74 48', start: { x: 45, y: 18 }, dir: '↓↻' },
      { step: 3, name: 'Titik aksen kanan', instruction: 'Tambahkan goresan miring pendek di bagian kanan atas huruf.', type: 'tome', path: 'M 72 26 Q 78 32 82 38', start: { x: 72, y: 26 }, dir: '↘' }
    ]
  },
  'か': {
    char: 'か',
    romaji: 'ka',
    totalStrokes: 3,
    tip: 'Garis pertama memiliki sudut kaitan tajam ke kiri bawah.',
    strokes: [
      { step: 1, name: 'Lengkung berkait', instruction: 'Tarik garis horizontal ke kanan, lalu membelok tajam ke kiri bawah dengan kaitan ujung.', type: 'hane', path: 'M 28 35 Q 56 32 58 48 Q 58 72 48 80 Q 44 80 40 74', start: { x: 28, y: 35 }, dir: '→↓' },
      { step: 2, name: 'Garis pembagi vertikal', instruction: 'Tarik garis melengkung dari atas menembus garis pertama ke kiri bawah.', type: 'harai', path: 'M 42 22 Q 40 50 32 78', start: { x: 42, y: 22 }, dir: '↙' },
      { step: 3, name: 'Titik kanan', instruction: 'Tambahkan goresan titik miring kecil di sebelah kanan luar.', type: 'tome', path: 'M 68 28 Q 74 34 78 40', start: { x: 68, y: 28 }, dir: '↘' }
    ]
  },
  'き': {
    char: 'き',
    romaji: 'ki',
    totalStrokes: 4,
    tip: 'Dalam tulisan tangan standar Jepang modern, lengkungan bawah terpisah dari garis miring di atasnya.',
    strokes: [
      { step: 1, name: 'Garis horizontal atas', instruction: 'Tarik garis mendatar pertama dengan sedikit kemiringan ke atas.', type: 'tome', path: 'M 34 32 Q 52 28 68 26', start: { x: 34, y: 32 }, dir: '→' },
      { step: 2, name: 'Garis horizontal bawah', instruction: 'Tarik garis mendatar kedua yang sedikit lebih panjang sejajar di bawah garis pertama.', type: 'tome', path: 'M 30 46 Q 52 42 72 40', start: { x: 30, y: 46 }, dir: '→' },
      { step: 3, name: 'Garis serong berkait', instruction: 'Tarik garis miring dari kiri atas menembus kedua garis mendatar, diakhiri sedikit kaitan ke kiri.', type: 'hane', path: 'M 56 18 Q 50 50 44 64 Q 40 68 34 66', start: { x: 56, y: 18 }, dir: '↙' },
      { step: 4, name: 'Lengkung busur bawah', instruction: 'Buat garis melengkung terbuka ke kiri di bagian bawah seperti busur panah.', type: 'tome', path: 'M 36 74 Q 52 86 64 74', start: { x: 36, y: 74 }, dir: '⌣' }
    ]
  },
  'く': {
    char: 'く',
    romaji: 'ku',
    totalStrokes: 1,
    tip: 'Dibuat dalam satu tarikan tunggal dengan sudut sekitar 70 derajat.',
    strokes: [
      { step: 1, name: 'Garis sudut terbuka', instruction: 'Tarik garis miring dari kanan atas ke kiri tengah, lalu langsung membelok ke kanan bawah tanpa mengangkat pena.', type: 'harai', path: 'M 64 24 L 32 54 L 66 82', start: { x: 64, y: 24 }, dir: '↙↘' }
    ]
  },
  'け': {
    char: 'け',
    romaji: 'ke',
    totalStrokes: 3,
    tip: 'Garis kiri melengkung anggun dengan kaitan di ujung bawahnya.',
    strokes: [
      { step: 1, name: 'Tiang kiri berkait', instruction: 'Tarik garis melengkung ke bawah di sebelah kiri, akhiri dengan kaitan ke kanan atas.', type: 'hane', path: 'M 32 20 Q 30 52 30 78 Q 30 82 36 76', start: { x: 32, y: 20 }, dir: '↓⤴' },
      { step: 2, name: 'Garis horizontal kanan', instruction: 'Tarik garis mendatar di sebelah kanan atas.', type: 'tome', path: 'M 50 38 Q 64 36 76 34', start: { x: 50, y: 38 }, dir: '→' },
      { step: 3, name: 'Tiang kanan vertikal', instruction: 'Tarik garis vertikal menembus garis mendatar, menyapu sedikit melengkung ke bawah.', type: 'harai', path: 'M 65 22 Q 65 55 58 84', start: { x: 65, y: 22 }, dir: '↓' }
    ]
  },
  'こ': {
    char: 'こ',
    romaji: 'ko',
    totalStrokes: 2,
    tip: 'Dua garis horizontal saling melengkapi seperti mangkuk terbuka.',
    strokes: [
      { step: 1, name: 'Garis atas berkait', instruction: 'Tarik garis horizontal di atas dari kiri ke kanan dengan sedikit kaitan ke kiri bawah.', type: 'hane', path: 'M 32 32 Q 54 28 70 28 Q 70 34 64 36', start: { x: 32, y: 32 }, dir: '→' },
      { step: 2, name: 'Garis bawah melengkung', instruction: 'Tarik garis horizontal melengkung lembut di bawah sebagai penopang.', type: 'tome', path: 'M 30 70 Q 52 74 72 68', start: { x: 30, y: 70 }, dir: '→' }
    ]
  },
  'さ': {
    char: 'さ',
    romaji: 'sa',
    totalStrokes: 3,
    tip: 'Mirip dengan huruf "き", namun hanya memiliki 1 garis horizontal.',
    strokes: [
      { step: 1, name: 'Garis horizontal', instruction: 'Tarik garis mendatar dari kiri ke kanan sedikit miring ke atas.', type: 'tome', path: 'M 32 36 Q 52 32 72 30', start: { x: 32, y: 36 }, dir: '→' },
      { step: 2, name: 'Garis miring berkait', instruction: 'Tarik garis menyilang dari atas ke kanan bawah dengan kaitan ke kiri bawah.', type: 'hane', path: 'M 54 18 Q 50 50 44 64 Q 40 68 34 66', start: { x: 54, y: 18 }, dir: '↙' },
      { step: 3, name: 'Lengkung bawah', instruction: 'Buat kurva melengkung terbuka di bagian bawah.', type: 'tome', path: 'M 36 72 Q 54 84 66 72', start: { x: 36, y: 72 }, dir: '⌣' }
    ]
  },
  'し': {
    char: 'し',
    romaji: 'shi',
    totalStrokes: 1,
    tip: 'Cukup satu goresan vertikal yang melengkung lembut ke kanan atas seperti kail pancing.',
    strokes: [
      { step: 1, name: 'Kail melengkung', instruction: 'Tarik garis lurus dari atas ke bawah, lalu melengkung halus dan menyapu naik ke kanan atas.', type: 'harai', path: 'M 42 18 L 42 66 Q 42 86 64 80 Q 72 76 76 68', start: { x: 42, y: 18 }, dir: '↓↗' }
    ]
  },
  'す': {
    char: 'す',
    romaji: 'su',
    totalStrokes: 2,
    tip: 'Lingkaran simpul di tengah harus rapat dan proporsional.',
    strokes: [
      { step: 1, name: 'Garis horizontal', instruction: 'Tarik garis mendatar dari kiri ke kanan.', type: 'tome', path: 'M 26 34 Q 52 30 76 28', start: { x: 26, y: 34 }, dir: '→' },
      { step: 2, name: 'Tiang bersimpul', instruction: 'Tarik garis vertikal ke bawah, buat simpul lingkaran kecil melingkar ke kiri, lalu lanjutkan lurus ke bawah.', type: 'harai', path: 'M 52 18 L 52 50 C 44 48 38 54 40 64 C 42 72 52 72 54 62 L 54 86', start: { x: 52, y: 18 }, dir: '↓' }
    ]
  },
  'せ': {
    char: 'せ',
    romaji: 'se',
    totalStrokes: 3,
    tip: 'Garis horizontal harus cukup panjang untuk menopang kedua tiang.',
    strokes: [
      { step: 1, name: 'Garis horizontal panjang', instruction: 'Tarik garis mendatar dari kiri ke kanan sedikit miring ke atas.', type: 'tome', path: 'M 22 42 Q 52 38 80 34', start: { x: 22, y: 42 }, dir: '→' },
      { step: 2, name: 'Tiang kanan bersudut', instruction: 'Tarik garis vertikal di sisi kanan menembus garis pertama lalu membelok horizontal ke kiri.', type: 'tome', path: 'M 68 22 L 68 64 Q 68 76 56 76 L 36 76', start: { x: 68, y: 22 }, dir: '↓←' },
      { step: 3, name: 'Tiang kiri berkait', instruction: 'Tarik garis vertikal di sisi kiri menembus garis dasar dengan kaitan ke kanan.', type: 'hane', path: 'M 38 28 L 38 72 Q 38 80 44 76', start: { x: 38, y: 28 }, dir: '↓' }
    ]
  },
  'そ': {
    char: 'そ',
    romaji: 'so',
    totalStrokes: 1,
    tip: 'Seluruh huruf diselesaikan dalam satu goresan berkesinambungan tanpa mengangkat pena.',
    strokes: [
      { step: 1, name: 'Bentuk Z melengkung', instruction: 'Tarik garis mendatar pendek ke kanan, serong ke kiri bawah seperti huruf Z, lalu buat kurva melengkung membulat ke kanan bawah.', type: 'tome', path: 'M 34 26 L 66 26 L 34 52 Q 68 48 70 66 Q 70 84 46 86 Q 34 84 32 76', start: { x: 34, y: 26 }, dir: 'Z↷' }
    ]
  },
  'た': {
    char: 'た',
    romaji: 'ta',
    totalStrokes: 4,
    tip: 'Dua goresan di sebelah kanan menyerupai bentuk huruf "こ" mini.',
    strokes: [
      { step: 1, name: 'Garis horizontal kiri', instruction: 'Tarik garis mendatar dari kiri ke kanan.', type: 'tome', path: 'M 24 38 Q 42 34 56 32', start: { x: 24, y: 38 }, dir: '→' },
      { step: 2, name: 'Garis serong miring', instruction: 'Tarik garis miring memotong garis pertama dari kiri atas ke kanan bawah.', type: 'tome', path: 'M 40 20 Q 36 50 26 76', start: { x: 40, y: 20 }, dir: '↙' },
      { step: 3, name: 'Garis kanan atas', instruction: 'Buat goresan mendatar pendek di bagian kanan atas.', type: 'tome', path: 'M 56 42 Q 68 40 78 40', start: { x: 56, y: 42 }, dir: '→' },
      { step: 4, name: 'Garis kanan bawah', instruction: 'Buat goresan mendatar melengkung pendek di kanan bawah.', type: 'tome', path: 'M 54 62 Q 68 64 78 60', start: { x: 54, y: 62 }, dir: '→' }
    ]
  },
  'ち': {
    char: 'ち',
    romaji: 'chi',
    totalStrokes: 2,
    tip: 'Perhatikan bahwa arah perut melingkar menghadap ke kanan.',
    strokes: [
      { step: 1, name: 'Garis horizontal atas', instruction: 'Tarik garis mendatar sedikit miring ke atas.', type: 'tome', path: 'M 30 30 Q 52 26 72 24', start: { x: 30, y: 30 }, dir: '→' },
      { step: 2, name: 'Tiang berlingkar', instruction: 'Tarik garis miring dari atas menembus garis pertama, lalu buat lengkungan membulat besar ke kanan seperti angka 5.', type: 'harai', path: 'M 48 16 L 46 48 C 58 44 76 48 76 66 C 76 84 54 88 38 80', start: { x: 48, y: 16 }, dir: '↓↷' }
    ]
  },
  'つ': {
    char: 'つ',
    romaji: 'tsu',
    totalStrokes: 1,
    tip: 'Hanya satu tarikan melengkung halus menyerupai gelombang ombak atau busur sabit.',
    strokes: [
      { step: 1, name: 'Gelombang melengkung', instruction: 'Tarik garis horizontal ke kanan atas, lalu buat lengkungan setengah lingkaran besar ke bawah dan menyapu ke kiri.', type: 'harai', path: 'M 30 36 Q 68 28 72 50 Q 76 74 42 82 Q 32 82 28 76', start: { x: 30, y: 36 }, dir: '↷' }
    ]
  },
  'て': {
    char: 'て',
    romaji: 'te',
    totalStrokes: 1,
    tip: 'Satu tarikan garis mendatar lalu memutar melengkung seperti huruf C terbalik.',
    strokes: [
      { step: 1, name: 'Garis dan lengkung', instruction: 'Tarik garis mendatar dari kiri ke kanan, lalu putar balik ke kiri bawah membentuk lengkungan sabit halus.', type: 'harai', path: 'M 28 34 Q 56 30 74 30 L 72 44 Q 50 44 42 62 Q 36 78 54 84 Q 68 86 78 76', start: { x: 28, y: 34 }, dir: '→↷' }
    ]
  },
  'と': {
    char: 'と',
    romaji: 'to',
    totalStrokes: 2,
    tip: 'Goresan pertama pendek miring, lalu goresan kedua melengkung besar memeluk goresan pertama.',
    strokes: [
      { step: 1, name: 'Garis miring pendek', instruction: 'Tarik garis serong pendek dari kiri atas ke kanan bawah.', type: 'tome', path: 'M 40 24 L 54 48', start: { x: 40, y: 24 }, dir: '↘' },
      { step: 2, name: 'Lengkung busur besar', instruction: 'Mulai dari atas titik, tarik kurva melengkung membulat besar ke bawah dan menyapu ke kiri bawah.', type: 'tome', path: 'M 64 34 Q 38 48 38 68 Q 38 86 64 84 Q 74 82 78 76', start: { x: 64, y: 34 }, dir: '↷' }
    ]
  },
  'な': {
    char: 'な',
    romaji: 'na',
    totalStrokes: 4,
    tip: 'Goresan keempat memiliki simpul lingkaran kecil di bagian kanan bawah.',
    strokes: [
      { step: 1, name: 'Garis horizontal kiri', instruction: 'Tarik garis mendatar pendek di kiri atas.', type: 'tome', path: 'M 26 36 Q 38 34 50 32', start: { x: 26, y: 36 }, dir: '→' },
      { step: 2, name: 'Garis miring menyilang', instruction: 'Tarik garis miring memotong garis pertama dari atas ke kanan bawah.', type: 'tome', path: 'M 38 22 Q 36 50 30 70', start: { x: 38, y: 22 }, dir: '↙' },
      { step: 3, name: 'Titik miring atas', instruction: 'Buat titik aksen kecil di kanan atas.', type: 'tome', path: 'M 64 26 L 72 34', start: { x: 64, y: 26 }, dir: '↘' },
      { step: 4, name: 'Tiang bersimpul bawah', instruction: 'Tarik garis vertikal di kanan bawah, buat lingkaran simpul kecil melingkar, lalu akhiri ke kanan.', type: 'harai', path: 'M 66 46 L 66 66 C 66 76 56 78 54 70 C 52 62 62 60 76 72', start: { x: 66, y: 46 }, dir: '↓' }
    ]
  },
  'に': {
    char: 'に',
    romaji: 'ni',
    totalStrokes: 3,
    tip: 'Sisi kiri adalah tiang vertikal berkait, dan sisi kanan adalah bentuk seperti "こ".',
    strokes: [
      { step: 1, name: 'Tiang kiri berkait', instruction: 'Tarik garis vertikal di sebelah kiri dengan sedikit kaitan ke kanan atas.', type: 'hane', path: 'M 32 20 Q 30 52 30 78 Q 30 82 36 76', start: { x: 32, y: 20 }, dir: '↓⤴' },
      { step: 2, name: 'Garis kanan atas', instruction: 'Tarik garis mendatar pendek di sebelah kanan atas.', type: 'tome', path: 'M 54 36 Q 68 32 78 32', start: { x: 54, y: 36 }, dir: '→' },
      { step: 3, name: 'Garis kanan bawah', instruction: 'Tarik garis mendatar melengkung di kanan bawah.', type: 'tome', path: 'M 52 66 Q 66 70 80 64', start: { x: 52, y: 66 }, dir: '→' }
    ]
  },
  'ぬ': {
    char: 'ぬ',
    romaji: 'nu',
    totalStrokes: 2,
    tip: 'Sangat mirip dengan huruf "め", tetapi "ぬ" memiliki simpul lingkaran kecil di ujung kanan bawah.',
    strokes: [
      { step: 1, name: 'Garis serong kiri', instruction: 'Tarik garis miring dari kiri atas ke kanan bawah.', type: 'tome', path: 'M 34 26 Q 44 54 62 76', start: { x: 34, y: 26 }, dir: '↘' },
      { step: 2, name: 'Lengkungan bersimpul', instruction: 'Mulai dari atas, buat lengkungan besar memutar ke kanan dan bawah, lalu buat simpul kecil melingkar di ujung kanan bawah.', type: 'harai', path: 'M 52 20 C 34 52 24 74 38 84 C 54 90 74 74 74 54 C 74 40 58 42 50 56 C 46 64 56 78 68 76 C 74 74 72 68 68 68', start: { x: 52, y: 20 }, dir: '↻' }
    ]
  },
  'ね': {
    char: 'ね',
    romaji: 'ne',
    totalStrokes: 2,
    tip: 'Garis vertikal lurus di kiri dibuat lebih dulu, lalu buat gelombang Z yang diakhiri simpul bundar.',
    strokes: [
      { step: 1, name: 'Garis vertikal lurus', instruction: 'Tarik garis tegak lurus dari atas ke bawah di sebelah kiri.', type: 'tome', path: 'M 32 18 L 32 84', start: { x: 32, y: 18 }, dir: '↓' },
      { step: 2, name: 'Bentuk Z bersimpul', instruction: 'Mulai dari kiri, tarik mendatar, serong ke kiri bawah menembus tiang pertama, memutar ke kanan atas lalu buat simpul bundar kecil di ujung ekor.', type: 'tome', path: 'M 24 38 L 48 38 L 26 64 C 44 54 68 54 68 70 C 68 84 56 84 54 74 C 52 64 62 64 72 74', start: { x: 24, y: 38 }, dir: 'Z↻' }
    ]
  },
  'の': {
    char: 'の',
    romaji: 'no',
    totalStrokes: 1,
    tip: 'Hanya satu tarikan bersambung membentuk pusaran kurva melingkar dari tengah ke luar.',
    strokes: [
      { step: 1, name: 'Pusaran melingkar', instruction: 'Mulai dari tengah, tarik sedikit ke kiri bawah lalu putar lingkaran penuh melengkung ke kanan atas dan menyapu halus ke bawah.', type: 'harai', path: 'M 48 30 L 36 56 C 30 72 40 84 56 84 C 74 84 82 66 82 48 C 82 28 64 26 46 36 C 34 46 26 64 30 76', start: { x: 48, y: 30 }, dir: '🌀' }
    ]
  },
  'は': {
    char: 'は',
    romaji: 'ha',
    totalStrokes: 3,
    tip: 'Berbeda dari "ほ", garis horizontal pada "は" tidak memiliki penutup di atas tiang kanan.',
    strokes: [
      { step: 1, name: 'Tiang kiri berkait', instruction: 'Tarik garis vertikal melengkung di kiri dengan kaitan ke kanan.', type: 'hane', path: 'M 30 20 Q 28 52 28 78 Q 28 82 34 76', start: { x: 30, y: 20 }, dir: '↓⤴' },
      { step: 2, name: 'Garis horizontal tengah', instruction: 'Tarik garis mendatar pendek di sebelah kanan.', type: 'tome', path: 'M 48 36 Q 64 32 76 32', start: { x: 48, y: 36 }, dir: '→' },
      { step: 3, name: 'Tiang bersimpul kanan', instruction: 'Tarik garis vertikal menembus garis mendatar, buat lingkaran simpul kecil melingkar ke kiri, lalu datar ke kanan.', type: 'tome', path: 'M 62 20 L 62 62 C 62 76 50 78 48 68 C 46 58 58 58 74 68', start: { x: 62, y: 20 }, dir: '↓' }
    ]
  },
  'ひ': {
    char: 'ひ',
    romaji: 'hi',
    totalStrokes: 1,
    tip: 'Satu tarikan garis membentuk mangkuk dengan garis dasar horizontal di awal.',
    strokes: [
      { step: 1, name: 'Garis mangkuk bersambung', instruction: 'Tarik garis mendatar pendek ke kanan, membelok miring ke kiri bawah, melengkung membulat ke kanan atas, lalu turun vertikal.', type: 'tome', path: 'M 28 32 L 48 32 L 32 58 Q 42 86 64 80 Q 74 76 76 64 L 76 46', start: { x: 28, y: 32 }, dir: '→⌣↓' }
    ]
  },
  'ふ': {
    char: 'ふ',
    romaji: 'fu',
    totalStrokes: 4,
    tip: 'Empat goresan seimbang di sekeliling titik tengah.',
    strokes: [
      { step: 1, name: 'Titik atas', instruction: 'Buat titik miring kecil di bagian tengah atas.', type: 'tome', path: 'M 46 18 Q 54 22 58 28', start: { x: 46, y: 18 }, dir: '↘' },
      { step: 2, name: 'Batang tengah melengkung', instruction: 'Tarik kurva melengkung vertikal di tengah dengan sedikit kaitan ke kiri.', type: 'hane', path: 'M 52 34 Q 48 60 42 78 Q 40 82 34 78', start: { x: 52, y: 34 }, dir: '↓' },
      { step: 3, name: 'Titik kiri', instruction: 'Buat titik goresan kecil di sebelah kiri luar.', type: 'harai', path: 'M 26 48 Q 28 58 24 66', start: { x: 26, y: 48 }, dir: '↙' },
      { step: 4, name: 'Titik kanan', instruction: 'Buat titik goresan kecil di sebelah kanan luar.', type: 'tome', path: 'M 72 46 Q 76 56 80 64', start: { x: 72, y: 46 }, dir: '↘' }
    ]
  },
  'へ': {
    char: 'へ',
    romaji: 'he',
    totalStrokes: 1,
    tip: 'Bentuk seperti gunung atau atap rumah, garis kedua ke kanan bawah lebih panjang.',
    strokes: [
      { step: 1, name: 'Puncak atap', instruction: 'Tarik garis serong ke kanan atas, lalu membelok tajam ke kanan bawah dengan tarikan yang lebih panjang.', type: 'harai', path: 'M 24 60 L 46 32 L 80 68', start: { x: 24, y: 60 }, dir: '↗↘' }
    ]
  },
  'ほ': {
    char: 'ほ',
    romaji: 'ho',
    totalStrokes: 4,
    tip: 'Memiliki 2 garis horizontal di sisi kanan, tiang vertikal tidak menembus garis paling atas.',
    strokes: [
      { step: 1, name: 'Tiang kiri berkait', instruction: 'Tarik garis vertikal di sebelah kiri dengan sedikit kaitan ke kanan.', type: 'hane', path: 'M 28 20 Q 26 52 26 78 Q 26 82 32 76', start: { x: 28, y: 20 }, dir: '↓⤴' },
      { step: 2, name: 'Garis horizontal atas', instruction: 'Tarik garis mendatar di sisi kanan atas.', type: 'tome', path: 'M 46 28 Q 64 24 76 24', start: { x: 46, y: 28 }, dir: '→' },
      { step: 3, name: 'Garis horizontal bawah', instruction: 'Tarik garis mendatar sejajar di bawah garis horizontal pertama.', type: 'tome', path: 'M 46 44 Q 64 40 76 40', start: { x: 46, y: 44 }, dir: '→' },
      { step: 4, name: 'Tiang bersimpul kanan', instruction: 'Mulai dari garis horizontal atas, tarik garis vertikal ke bawah menembus garis kedua, buat simpul melingkar di bawah.', type: 'tome', path: 'M 62 26 L 62 64 C 62 76 50 78 48 68 C 46 58 58 58 74 68', start: { x: 62, y: 26 }, dir: '↓' }
    ]
  },
  'ま': {
    char: 'ま',
    romaji: 'ma',
    totalStrokes: 3,
    tip: 'Dua garis horizontal sejajar, ditembus tiang vertikal bersimpul di tengah.',
    strokes: [
      { step: 1, name: 'Garis horizontal atas', instruction: 'Tarik garis mendatar pertama di bagian atas.', type: 'tome', path: 'M 30 30 Q 52 26 74 24', start: { x: 30, y: 30 }, dir: '→' },
      { step: 2, name: 'Garis horizontal bawah', instruction: 'Tarik garis mendatar kedua yang sedikit lebih pendek di bawahnya.', type: 'tome', path: 'M 32 46 Q 52 42 70 40', start: { x: 32, y: 46 }, dir: '→' },
      { step: 3, name: 'Tiang vertikal bersimpul', instruction: 'Tarik garis vertikal menembus kedua garis mendatar, buat simpul lingkaran kecil di bawah, lalu tarik mendatar ke kanan.', type: 'tome', path: 'M 52 16 L 52 64 C 52 76 40 78 38 68 C 36 58 48 58 68 68', start: { x: 52, y: 16 }, dir: '↓' }
    ]
  },
  'み': {
    char: 'み',
    romaji: 'mi',
    totalStrokes: 2,
    tip: 'Goresan pertama membentuk angka 4 melengkung, disusul goresan miring yang menyapu lembut.',
    strokes: [
      { step: 1, name: 'Badan huruf melingkar', instruction: 'Tarik garis horizontal, serong ke kiri bawah, buat simpul lingkaran kecil memutar ke kanan mendatar.', type: 'tome', path: 'M 28 32 L 64 32 L 36 64 C 36 74 46 76 56 70 L 76 70', start: { x: 28, y: 32 }, dir: '→↙→' },
      { step: 2, name: 'Garis serong kanan', instruction: 'Tarik garis miring dari kanan atas memotong garis mendatar ke kanan bawah.', type: 'harai', path: 'M 66 40 Q 60 62 52 82', start: { x: 66, y: 40 }, dir: '↙' }
    ]
  },
  'む': {
    char: 'む',
    romaji: 'mu',
    totalStrokes: 3,
    tip: 'Jangan lupakan titik kecil di kanan atas pada langkah ketiga.',
    strokes: [
      { step: 1, name: 'Garis horizontal', instruction: 'Tarik garis mendatar dari kiri ke kanan.', type: 'tome', path: 'M 24 38 Q 44 34 60 32', start: { x: 24, y: 38 }, dir: '→' },
      { step: 2, name: 'Tiang berlingkar dan naik', instruction: 'Tarik garis vertikal menembus garis pertama, buat simpul lingkaran ke kiri, lalu belok dan menyapu naik ke kanan atas.', type: 'tome', path: 'M 44 20 L 44 60 C 44 74 32 76 30 66 C 28 54 44 54 62 66 Q 72 74 76 60', start: { x: 44, y: 20 }, dir: '↓↗' },
      { step: 3, name: 'Titik kanan atas', instruction: 'Tambahkan titik goresan miring kecil di kanan atas.', type: 'tome', path: 'M 70 30 L 78 38', start: { x: 70, y: 30 }, dir: '↘' }
    ]
  },
  'め': {
    char: 'め',
    romaji: 'me',
    totalStrokes: 2,
    tip: 'Mirip huruf "ぬ", tetapi bagian akhir "め" tidak memiliki simpul lingkaran kecil.',
    strokes: [
      { step: 1, name: 'Garis serong kiri', instruction: 'Tarik garis miring dari kiri atas ke kanan bawah.', type: 'tome', path: 'M 36 24 Q 46 54 64 76', start: { x: 36, y: 24 }, dir: '↘' },
      { step: 2, name: 'Lengkungan membulat', instruction: 'Mulai dari tengah atas, buat lengkungan memutar besar ke kanan bawah dan melintasi garis pertama tanpa simpul.', type: 'harai', path: 'M 50 18 C 32 50 24 74 38 84 C 56 90 76 72 76 48 C 76 34 60 38 46 54 Q 34 68 30 80', start: { x: 50, y: 18 }, dir: '↷' }
    ]
  },
  'も': {
    char: 'も',
    romaji: 'mo',
    totalStrokes: 3,
    tip: 'Pada Hiragana "も", kail vertikal dibuat terlebih dahulu sebelum dua garis mendatarnya.',
    strokes: [
      { step: 1, name: 'Kail pancing melengkung', instruction: 'Tarik garis vertikal dari atas ke bawah, lalu melengkung lembut ke kanan atas seperti kail pancing.', type: 'tome', path: 'M 48 18 L 48 68 Q 48 86 68 80 Q 76 76 78 68', start: { x: 48, y: 18 }, dir: '↓↗' },
      { step: 2, name: 'Garis horizontal atas', instruction: 'Tarik garis mendatar pertama memotong tiang di bagian atas.', type: 'tome', path: 'M 30 36 Q 50 32 70 30', start: { x: 30, y: 36 }, dir: '→' },
      { step: 3, name: 'Garis horizontal bawah', instruction: 'Tarik garis mendatar kedua sejajar di bawah garis pertama.', type: 'tome', path: 'M 30 50 Q 50 46 68 44', start: { x: 30, y: 50 }, dir: '→' }
    ]
  },
  'や': {
    char: 'や',
    romaji: 'ya',
    totalStrokes: 3,
    tip: 'Garis pertama melengkung anggun dengan kaitan lembut.',
    strokes: [
      { step: 1, name: 'Badan melengkung berkait', instruction: 'Tarik garis miring naik ke kanan, lalu melengkung ke kiri bawah dengan sedikit kaitan.', type: 'hane', path: 'M 28 46 Q 36 34 54 34 Q 68 34 66 48 Q 64 68 48 76 Q 44 78 40 72', start: { x: 28, y: 46 }, dir: '↗↷' },
      { step: 2, name: 'Titik miring atas', instruction: 'Buat titik goresan miring kecil di kiri atas badan huruf.', type: 'tome', path: 'M 40 22 L 46 32', start: { x: 40, y: 22 }, dir: '↘' },
      { step: 3, name: 'Garis pembagi vertikal', instruction: 'Tarik garis miring dari kanan atas memotong garis pertama ke kiri bawah.', type: 'tome', path: 'M 68 20 Q 64 50 48 80', start: { x: 68, y: 20 }, dir: '↙' }
    ]
  },
  'ゆ': {
    char: 'ゆ',
    romaji: 'yu',
    totalStrokes: 2,
    tip: 'Goresan pertama melingkar menyerupai ikan berenang.',
    strokes: [
      { step: 1, name: 'Kurva melingkar', instruction: 'Tarik garis vertikal ke bawah, lalu melingkar besar ke kanan dan atas membentuk perut membulat.', type: 'tome', path: 'M 38 24 L 38 60 C 38 78 58 78 64 66 C 70 54 62 44 48 46', start: { x: 38, y: 24 }, dir: '↓↻' },
      { step: 2, name: 'Garis pembagi vertikal', instruction: 'Tarik garis vertikal memotong perut lingkaran dari atas lurus ke bawah.', type: 'harai', path: 'M 56 18 Q 56 52 56 84', start: { x: 56, y: 18 }, dir: '↓' }
    ]
  },
  'よ': {
    char: 'よ',
    romaji: 'yo',
    totalStrokes: 2,
    tip: 'Garis horizontal pendek di kiri, ditembus tiang bersimpul di sisi kanan.',
    strokes: [
      { step: 1, name: 'Garis horizontal pendek', instruction: 'Tarik garis mendatar pendek di bagian kiri atas.', type: 'tome', path: 'M 30 36 Q 42 34 54 32', start: { x: 30, y: 36 }, dir: '→' },
      { step: 2, name: 'Tiang bersimpul kanan', instruction: 'Tarik garis vertikal dari kanan atas menembus garis pertama, buat simpul lingkaran kecil di kiri, lalu tarik mendatar ke kanan.', type: 'tome', path: 'M 56 18 L 56 64 C 56 76 44 78 42 68 C 40 58 52 58 72 68', start: { x: 56, y: 18 }, dir: '↓' }
    ]
  },
  'ら': {
    char: 'ら',
    romaji: 'ra',
    totalStrokes: 2,
    tip: 'Goresan kedua menyerupai bentuk angka 5 tanpa garis atas.',
    strokes: [
      { step: 1, name: 'Titik miring atas', instruction: 'Buat titik atau goresan mendatar pendek di bagian atas.', type: 'tome', path: 'M 44 20 Q 52 24 58 26', start: { x: 44, y: 20 }, dir: '↘' },
      { step: 2, name: 'Lengkungan membulat', instruction: 'Mulai di bawah titik, tarik garis vertikal pendek lalu buat kurva melengkung membulat ke kanan bawah.', type: 'harai', path: 'M 44 38 L 44 52 C 54 48 72 52 72 68 C 72 82 54 86 38 80', start: { x: 44, y: 38 }, dir: '↓↷' }
    ]
  },
  'り': {
    char: 'り',
    romaji: 'ri',
    totalStrokes: 2,
    tip: 'Garis kiri pendek dengan kaitan, garis kanan jauh lebih panjang dan melengkung anggun.',
    strokes: [
      { step: 1, name: 'Tiang kiri pendek berkait', instruction: 'Tarik garis vertikal pendek di sisi kiri dengan kaitan halus ke kanan atas.', type: 'hane', path: 'M 36 24 Q 34 46 34 60 Q 34 64 38 60', start: { x: 36, y: 24 }, dir: '↓⤴' },
      { step: 2, name: 'Tiang kanan panjang', instruction: 'Tarik garis melengkung panjang di sisi kanan dari atas menyapu ke kiri bawah.', type: 'harai', path: 'M 64 20 Q 66 52 58 78 Q 52 86 46 86', start: { x: 64, y: 20 }, dir: '↓' }
    ]
  },
  'る': {
    char: 'る',
    romaji: 'ru',
    totalStrokes: 1,
    tip: 'Mirip angka 3, tetapi diakhiri simpul bundar kecil tertutup di bagian bawah.',
    strokes: [
      { step: 1, name: 'Bentuk 3 bersimpul', instruction: 'Tarik garis mendatar pendek, serong ke kiri bawah, buat lengkungan membulat ke kanan bawah lalu akhiri dengan simpul lingkaran kecil.', type: 'tome', path: 'M 32 30 L 64 30 L 36 56 C 52 48 72 54 72 70 C 72 84 58 86 54 78 C 50 70 60 68 64 74', start: { x: 32, y: 30 }, dir: '3' }
    ]
  },
  'れ': {
    char: 'れ',
    romaji: 're',
    totalStrokes: 2,
    tip: 'Ujung ekor goresan kedua membelok anggun ke kanan atas.',
    strokes: [
      { step: 1, name: 'Tiang vertikal kiri', instruction: 'Tarik garis tegak lurus dari atas ke bawah di sebelah kiri.', type: 'tome', path: 'M 32 18 L 32 84', start: { x: 32, y: 18 }, dir: '↓' },
      { step: 2, name: 'Badan bergelombang', instruction: 'Mulai dari kiri, tarik mendatar, serong ke kiri bawah memotong tiang, naik ke kanan lalu membelok keluar ke kanan atas.', type: 'harai', path: 'M 24 38 L 48 38 L 26 64 Q 48 54 58 64 Q 68 74 76 64', start: { x: 24, y: 38 }, dir: 'Z↗' }
    ]
  },
  'ろ': {
    char: 'ろ',
    romaji: 'ro',
    totalStrokes: 1,
    tip: 'Bentuknya sama persis seperti "る", tetapi tanpa simpul bundar di ujungnya.',
    strokes: [
      { step: 1, name: 'Bentuk 3 terbuka', instruction: 'Tarik garis mendatar pendek, serong ke kiri bawah, lalu buat lengkungan membulat besar ke kanan bawah tanpa membuat simpul.', type: 'tome', path: 'M 32 30 L 64 30 L 36 56 C 52 48 74 54 74 72 C 74 86 52 88 36 80', start: { x: 32, y: 30 }, dir: '3' }
    ]
  },
  'わ': {
    char: 'わ',
    romaji: 'wa',
    totalStrokes: 2,
    tip: 'Tiang vertikal kiri lurus, sisi kanan melengkung membulat besar seperti busur.',
    strokes: [
      { step: 1, name: 'Tiang vertikal kiri', instruction: 'Tarik garis tegak lurus dari atas ke bawah di sebelah kiri.', type: 'tome', path: 'M 32 18 L 32 84', start: { x: 32, y: 18 }, dir: '↓' },
      { step: 2, name: 'Busur membulat', instruction: 'Tarik mendatar pendek, serong ke kiri bawah menembus tiang, lalu buat lengkungan membulat besar ke kanan bawah.', type: 'harai', path: 'M 24 38 L 48 38 L 26 64 C 44 52 74 52 74 70 C 74 86 54 88 40 82', start: { x: 24, y: 38 }, dir: 'Z↷' }
    ]
  },
  'を': {
    char: 'を',
    romaji: 'wo',
    totalStrokes: 3,
    tip: 'Partikel objek yang memiliki struktur 3 goresan unik.',
    strokes: [
      { step: 1, name: 'Garis horizontal atas', instruction: 'Tarik garis mendatar dari kiri ke kanan.', type: 'tome', path: 'M 30 30 Q 52 26 72 26', start: { x: 30, y: 30 }, dir: '→' },
      { step: 2, name: 'Garis serong membelok', instruction: 'Tarik garis serong memotong ke kiri bawah lalu membelok mendatar ke kanan bawah.', type: 'tome', path: 'M 52 18 L 36 56 L 68 56', start: { x: 52, y: 18 }, dir: '↙→' },
      { step: 3, name: 'Lengkung bulan sabit', instruction: 'Buat kurva melengkung memotong di bagian bawah seperti bulan sabit terbuka ke kiri.', type: 'harai', path: 'M 42 62 C 54 58 72 66 68 78 C 64 88 44 86 36 78', start: { x: 42, y: 62 }, dir: '↷' }
    ]
  },
  'ん': {
    char: 'ん',
    romaji: 'n',
    totalStrokes: 1,
    tip: 'Dibuat dalam satu tarikan menyerupai huruf kecil "n" dengan ekor melengkung ke atas.',
    strokes: [
      { step: 1, name: 'Garis serong dan gelombang', instruction: 'Tarik garis serong dari kiri atas ke kanan bawah, lalu naik membuat lengkungan bukit ke kanan dan menyapu naik ke kanan atas.', type: 'harai', path: 'M 42 22 L 32 64 C 44 54 62 54 64 68 C 66 80 56 84 72 82 Q 78 82 82 76', start: { x: 42, y: 22 }, dir: '↘↗' }
    ]
  }
};
