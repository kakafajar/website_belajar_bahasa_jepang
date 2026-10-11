// Dataset huruf dan bank soal kuis Bahasa Jepang lengkap

// ======================== HIRAGANA DATASET ========================
export const hiraganaList = [
  // --- GOJUON / SEION (46 HURUF DASAR) ---
  { id: 'h-1', char: 'あ', romaji: 'a', row: 'Vokal', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Huruf vokal A', example: { word: 'あさ (asa)', meaning: 'Pagi' } },
  { id: 'h-2', char: 'い', romaji: 'i', row: 'Vokal', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Huruf vokal I', example: { word: 'いぬ (inu)', meaning: 'Anjing' } },
  { id: 'h-3', char: 'う', romaji: 'u', row: 'Vokal', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Huruf vokal U', example: { word: 'うみ (umi)', meaning: 'Laut' } },
  { id: 'h-4', char: 'え', romaji: 'e', row: 'Vokal', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Huruf vokal E', example: { word: 'えき (eki)', meaning: 'Stasiun' } },
  { id: 'h-5', char: 'お', romaji: 'o', row: 'Vokal', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Huruf vokal O', example: { word: 'おちゃ (ocha)', meaning: 'Teh' } },

  { id: 'h-6', char: 'か', romaji: 'ka', row: 'K', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ka', example: { word: 'かさ (kasa)', meaning: 'Payung' } },
  { id: 'h-7', char: 'き', romaji: 'ki', row: 'K', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ki', example: { word: 'き (ki)', meaning: 'Pohon' } },
  { id: 'h-8', char: 'く', romaji: 'ku', row: 'K', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ku', example: { word: 'くるま (kuruma)', meaning: 'Mobil' } },
  { id: 'h-9', char: 'け', romaji: 'ke', row: 'K', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ke', example: { word: 'けむり (kemuri)', meaning: 'Asap' } },
  { id: 'h-10', char: 'こ', romaji: 'ko', row: 'K', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ko', example: { word: 'こども (kodomo)', meaning: 'Anak' } },

  { id: 'h-11', char: 'さ', romaji: 'sa', row: 'S', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Sa', example: { word: 'さくら (sakura)', meaning: 'Bunga Sakura' } },
  { id: 'h-12', char: 'し', romaji: 'shi', row: 'S', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Shi', example: { word: 'しろ (shiro)', meaning: 'Putih' } },
  { id: 'h-13', char: 'す', romaji: 'su', row: 'S', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Su', example: { word: 'すし (sushi)', meaning: 'Sushi' } },
  { id: 'h-14', char: 'せ', romaji: 'se', row: 'S', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Se', example: { word: 'せんせい (sensei)', meaning: 'Guru' } },
  { id: 'h-15', char: 'そ', romaji: 'so', row: 'S', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata So', example: { word: 'そら (sora)', meaning: 'Langit' } },

  { id: 'h-16', char: 'た', romaji: 'ta', row: 'T', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ta', example: { word: 'たまご (tamago)', meaning: 'Telur' } },
  { id: 'h-17', char: 'ち', romaji: 'chi', row: 'T', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Chi', example: { word: 'ちず (chizu)', meaning: 'Peta' } },
  { id: 'h-18', char: 'つ', romaji: 'tsu', row: 'T', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Tsu', example: { word: 'つき (tsuki)', meaning: 'Bulan' } },
  { id: 'h-19', char: 'て', romaji: 'te', row: 'T', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Te', example: { word: 'て (te)', meaning: 'Tangan' } },
  { id: 'h-20', char: 'と', romaji: 'to', row: 'T', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata To', example: { word: 'ともだち (tomodachi)', meaning: 'Teman' } },

  { id: 'h-21', char: 'な', romaji: 'na', row: 'N', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Na', example: { word: 'なつ (natsu)', meaning: 'Musim panas' } },
  { id: 'h-22', char: 'に', romaji: 'ni', row: 'N', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ni', example: { word: 'にほん (nihon)', meaning: 'Jepang' } },
  { id: 'h-23', char: 'ぬ', romaji: 'nu', row: 'N', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Nu', example: { word: 'ぬいぐるみ (nuigurumi)', meaning: 'Boneka' } },
  { id: 'h-24', char: 'ね', romaji: 'ne', row: 'N', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ne', example: { word: 'ねこ (neko)', meaning: 'Kucing' } },
  { id: 'h-25', char: 'の', romaji: 'no', row: 'N', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata No', example: { word: 'のり (nori)', meaning: 'Rumput laut' } },

  { id: 'h-26', char: 'は', romaji: 'ha', row: 'H', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ha', example: { word: 'はな (hana)', meaning: 'Bunga' } },
  { id: 'h-27', char: 'ひ', romaji: 'hi', row: 'H', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Hi', example: { word: 'ひかり (hikari)', meaning: 'Cahaya' } },
  { id: 'h-28', char: 'ふ', romaji: 'fu', row: 'H', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Fu', example: { word: 'ふね (fune)', meaning: 'Kapal' } },
  { id: 'h-29', char: 'へ', romaji: 'he', row: 'H', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata He', example: { word: 'へや (heya)', meaning: 'Kamar' } },
  { id: 'h-30', char: 'ほ', romaji: 'ho', row: 'H', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ho', example: { word: 'ほし (hoshi)', meaning: 'Bintang' } },

  { id: 'h-31', char: 'ま', romaji: 'ma', row: 'M', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ma', example: { word: 'まち (machi)', meaning: 'Kota' } },
  { id: 'h-32', char: 'み', romaji: 'mi', row: 'M', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Mi', example: { word: 'みず (mizu)', meaning: 'Air' } },
  { id: 'h-33', char: 'む', romaji: 'mu', row: 'M', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Mu', example: { word: 'むし (mushi)', meaning: 'Serangga' } },
  { id: 'h-34', char: 'め', romaji: 'me', row: 'M', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Me', example: { word: 'め (me)', meaning: 'Mata' } },
  { id: 'h-35', char: 'も', romaji: 'mo', row: 'M', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Mo', example: { word: 'もり (mori)', meaning: 'Hutan' } },

  { id: 'h-36', char: 'や', romaji: 'ya', row: 'Y', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ya', example: { word: 'やま (yama)', meaning: 'Gunung' } },
  { id: 'h-37', char: 'ゆ', romaji: 'yu', row: 'Y', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Yu', example: { word: 'ゆき (yuki)', meaning: 'Salju' } },
  { id: 'h-38', char: 'よ', romaji: 'yo', row: 'Y', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Yo', example: { word: 'よる (yoru)', meaning: 'Malam' } },

  { id: 'h-39', char: 'ら', romaji: 'ra', row: 'R', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ra', example: { word: 'らいおん (raion)', meaning: 'Singa' } },
  { id: 'h-40', char: 'り', romaji: 'ri', row: 'R', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ri', example: { word: 'りんご (ringo)', meaning: 'Apel' } },
  { id: 'h-41', char: 'る', romaji: 'ru', row: 'R', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ru', example: { word: 'るす (rusu)', meaning: 'Tidak di rumah' } },
  { id: 'h-42', char: 'れ', romaji: 're', row: 'R', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Re', example: { word: 'れきし (rekishi)', meaning: 'Sejarah' } },
  { id: 'h-43', char: 'ろ', romaji: 'ro', row: 'R', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ro', example: { word: 'ろうそく (rousoku)', meaning: 'Lilin' } },

  { id: 'h-44', char: 'わ', romaji: 'wa', row: 'W', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Wa', example: { word: 'わたし (watashi)', meaning: 'Saya' } },
  { id: 'h-45', char: 'を', romaji: 'wo', row: 'W', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Partikel objek Wo (dibaca o)', example: { word: 'みずをのむ (mizu o nomu)', meaning: 'Minum air' } },
  { id: 'h-46', char: 'ん', romaji: 'n', row: 'N Tunggal', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Konsonan sengau N', example: { word: 'ほん (hon)', meaning: 'Buku' } },

  // --- DAKUON (20 BUNYI BERSUARA DENGAN TENTEN ゛) ---
  { id: 'h-47', char: 'が', romaji: 'ga', row: 'G', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Ga', example: { word: 'がくせい (gakusei)', meaning: 'Siswa' } },
  { id: 'h-48', char: 'ぎ', romaji: 'gi', row: 'G', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Gi', example: { word: 'ぎんこう (ginkou)', meaning: 'Bank' } },
  { id: 'h-49', char: 'ぐ', romaji: 'gu', row: 'G', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Gu', example: { word: 'ぐんたい (guntai)', meaning: 'Tentara' } },
  { id: 'h-50', char: 'げ', romaji: 'ge', row: 'G', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Ge', example: { word: 'げんき (genki)', meaning: 'Sehat' } },
  { id: 'h-51', char: 'ご', romaji: 'go', row: 'G', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Go', example: { word: 'ごはん (gohan)', meaning: 'Nasi' } },

  { id: 'h-52', char: 'ざ', romaji: 'za', row: 'Z', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Za', example: { word: 'ざっし (zasshi)', meaning: 'Majalah' } },
  { id: 'h-53', char: 'じ', romaji: 'ji', row: 'Z', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Ji', example: { word: 'じかん (jikan)', meaning: 'Waktu' } },
  { id: 'h-54', char: 'ず', romaji: 'zu', row: 'Z', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Zu', example: { word: 'ちず (chizu)', meaning: 'Peta' } },
  { id: 'h-55', char: 'ぜ', romaji: 'ze', row: 'Z', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Ze', example: { word: 'ぜんぶ (zenbu)', meaning: 'Semua' } },
  { id: 'h-56', char: 'ぞ', romaji: 'zo', row: 'Z', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Zo', example: { word: 'ぞう (zou)', meaning: 'Gajah' } },

  { id: 'h-57', char: 'だ', romaji: 'da', row: 'D', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Da', example: { word: 'だいがく (daigaku)', meaning: 'Universitas' } },
  { id: 'h-58', char: 'ぢ', romaji: 'ji', row: 'D', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Ji (di)', example: { word: 'はなぢ (hanaji)', meaning: 'Mimisan' } },
  { id: 'h-59', char: 'づ', romaji: 'zu', row: 'D', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Zu (du)', example: { word: 'つづく (tsuzuku)', meaning: 'Berlanjut' } },
  { id: 'h-60', char: 'で', romaji: 'de', row: 'D', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata De', example: { word: 'でんしゃ (densha)', meaning: 'Kereta api' } },
  { id: 'h-61', char: 'ど', romaji: 'do', row: 'D', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Do', example: { word: 'どこ (doko)', meaning: 'Di mana' } },

  { id: 'h-62', char: 'ば', romaji: 'ba', row: 'B', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Ba', example: { word: 'ばしょ (basho)', meaning: 'Tempat' } },
  { id: 'h-63', char: 'び', romaji: 'bi', row: 'B', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Bi', example: { word: 'びょういん (byouin)', meaning: 'Rumah sakit' } },
  { id: 'h-64', char: 'ぶ', romaji: 'bu', row: 'B', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Bu', example: { word: 'ぶた (buta)', meaning: 'Babi' } },
  { id: 'h-65', char: 'べ', romaji: 'be', row: 'B', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Be', example: { word: 'べんきょう (benkyou)', meaning: 'Belajar' } },
  { id: 'h-66', char: 'ぼ', romaji: 'bo', row: 'B', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Bo', example: { word: 'ぼうし (boushi)', meaning: 'Topi' } },

  // --- HANDAKUON (5 BUNYI SEMI BERSUARA DENGAN MARU ゜) ---
  { id: 'h-67', char: 'ぱ', romaji: 'pa', row: 'P', group: 'handakuon', groupLabel: 'Handakuon (Maru)', meaning: 'Suku kata Pa', example: { word: 'ぱん (pan)', meaning: 'Roti' } },
  { id: 'h-68', char: 'ぴ', romaji: 'pi', row: 'P', group: 'handakuon', groupLabel: 'Handakuon (Maru)', meaning: 'Suku kata Pi', example: { word: 'ぴあの (piano)', meaning: 'Piano' } },
  { id: 'h-69', char: 'ぷ', romaji: 'pu', row: 'P', group: 'handakuon', groupLabel: 'Handakuon (Maru)', meaning: 'Suku kata Pu', example: { word: 'ぷーる (puuru)', meaning: 'Kolam renang' } },
  { id: 'h-70', char: 'ぺ', romaji: 'pe', row: 'P', group: 'handakuon', groupLabel: 'Handakuon (Maru)', meaning: 'Suku kata Pe', example: { word: 'ぺん (pen)', meaning: 'Pena' } },
  { id: 'h-71', char: 'ぽ', romaji: 'po', row: 'P', group: 'handakuon', groupLabel: 'Handakuon (Maru)', meaning: 'Suku kata Po', example: { word: 'ぽけっと (poketto)', meaning: 'Saku' } },

  // --- YOON (36 KOMBINASI DENGAN ya/yu/yo KECIL) ---
  { id: 'h-72', char: 'きゃ', romaji: 'kya', row: 'Ky', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Kya', example: { word: 'きゃく (kyaku)', meaning: 'Tamu' } },
  { id: 'h-73', char: 'きゅ', romaji: 'kyu', row: 'Ky', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Kyu', example: { word: 'きゅう (kyuu)', meaning: 'Sembilan' } },
  { id: 'h-74', char: 'きょ', romaji: 'kyo', row: 'Ky', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Kyo', example: { word: 'きょう (kyou)', meaning: 'Hari ini' } },

  { id: 'h-75', char: 'しゃ', romaji: 'sha', row: 'Sh', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Sha', example: { word: 'しゃしん (shashin)', meaning: 'Foto' } },
  { id: 'h-76', char: 'しゅ', romaji: 'shu', row: 'Sh', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Shu', example: { word: 'しゅみ (shumi)', meaning: 'Hobi' } },
  { id: 'h-77', char: 'しょ', romaji: 'sho', row: 'Sh', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Sho', example: { word: 'しょくどう (shokudou)', meaning: 'Kantin' } },

  { id: 'h-78', char: 'ちゃ', romaji: 'cha', row: 'Ch', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Cha', example: { word: 'おちゃ (ocha)', meaning: 'Teh' } },
  { id: 'h-79', char: 'ちゅ', romaji: 'chu', row: 'Ch', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Chu', example: { word: 'ちゅうごく (chuugoku)', meaning: 'Tiongkok' } },
  { id: 'h-80', char: 'ちょ', romaji: 'cho', row: 'Ch', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Cho', example: { word: 'ちょっと (chotto)', meaning: 'Sebentar' } },

  { id: 'h-81', char: 'にゃ', romaji: 'nya', row: 'Ny', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Nya', example: { word: 'こねこ (koneko)', meaning: 'Anak kucing' } },
  { id: 'h-82', char: 'にゅ', romaji: 'nyu', row: 'Ny', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Nyu', example: { word: 'ぎゅうにゅう (gyuunyuu)', meaning: 'Susu sapi' } },
  { id: 'h-83', char: 'にょ', romaji: 'nyo', row: 'Ny', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Nyo', example: { word: 'にょうぼう (nyoubou)', meaning: 'Istri' } },

  { id: 'h-84', char: 'ひゃ', romaji: 'hya', row: 'Hy', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Hya', example: { word: 'ひゃく (hyaku)', meaning: 'Seratus' } },
  { id: 'h-85', char: 'ひゅ', romaji: 'hyu', row: 'Hy', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Hyu', example: { word: 'ひゅーず (hyuuzu)', meaning: 'Sekring' } },
  { id: 'h-86', char: 'ひょ', romaji: 'hyo', row: 'Hy', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Hyo', example: { word: 'ひょう (hyou)', meaning: 'Tabel' } },

  { id: 'h-87', char: 'みゃ', romaji: 'mya', row: 'My', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Mya', example: { word: 'みゃく (myaku)', meaning: 'Denyut nadi' } },
  { id: 'h-88', char: 'みゅ', romaji: 'myu', row: 'My', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Myu', example: { word: 'みゅーじっく (myuujikku)', meaning: 'Musik' } },
  { id: 'h-89', char: 'みょ', romaji: 'myo', row: 'My', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Myo', example: { word: 'みょうじ (myouji)', meaning: 'Nama keluarga' } },

  { id: 'h-90', char: 'りゃ', romaji: 'rya', row: 'Ry', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Rya', example: { word: 'りゃくご (ryakugo)', meaning: 'Singkatan' } },
  { id: 'h-91', char: 'りゅ', romaji: 'ryu', row: 'Ry', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Ryu', example: { word: 'りゅう (ryuu)', meaning: 'Naga' } },
  { id: 'h-92', char: 'りょ', romaji: 'ryo', row: 'Ry', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Ryo', example: { word: 'りょこう (ryokou)', meaning: 'Liburan' } },

  { id: 'h-93', char: 'ぎゃ', romaji: 'gya', row: 'Gy', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Gya', example: { word: 'ぎゃく (gyaku)', meaning: 'Kebalikan' } },
  { id: 'h-94', char: 'ぎゅ', romaji: 'gyu', row: 'Gy', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Gyu', example: { word: 'ぎゅうにく (gyuuniku)', meaning: 'Daging sapi' } },
  { id: 'h-95', char: 'ぎょ', romaji: 'gyo', row: 'Gy', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Gyo', example: { word: 'きんぎょ (kingyo)', meaning: 'Ikan mas' } },

  { id: 'h-96', char: 'じゃ', romaji: 'ja', row: 'J', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Ja', example: { word: 'じゃま (jama)', meaning: 'Gangguan' } },
  { id: 'h-97', char: 'じゅ', romaji: 'ju', row: 'J', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Ju', example: { word: 'じゅぎょう (jugyou)', meaning: 'Pelajaran' } },
  { id: 'h-98', char: 'じょ', romaji: 'jo', row: 'J', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Jo', example: { word: 'じょせい (josei)', meaning: 'Wanita' } },

  { id: 'h-99', char: 'ぢゃ', romaji: 'ja', row: 'Dy', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Ja (dya)', example: { word: 'ぢゃ (ja)', meaning: 'Variasi bunyi Ja' } },
  { id: 'h-100', char: 'ぢゅ', romaji: 'ju', row: 'Dy', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Ju (dyu)', example: { word: 'ぢゅ (ju)', meaning: 'Variasi bunyi Ju' } },
  { id: 'h-101', char: 'ぢょ', romaji: 'jo', row: 'Dy', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Jo (dyo)', example: { word: 'ぢょ (jo)', meaning: 'Variasi bunyi Jo' } },

  { id: 'h-102', char: 'びゃ', romaji: 'bya', row: 'By', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Bya', example: { word: 'さんびゃく (sanbyaku)', meaning: 'Tiga ratus' } },
  { id: 'h-103', char: 'びゅ', romaji: 'byu', row: 'By', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Byu', example: { word: 'びゅーてぃー (byuutii)', meaning: 'Kecantikan' } },
  { id: 'h-104', char: 'びょ', romaji: 'byo', row: 'By', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Byo', example: { word: 'びょういん (byouin)', meaning: 'Rumah sakit' } },

  { id: 'h-105', char: 'ぴゃ', romaji: 'pya', row: 'Py', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Pya', example: { word: 'ろっぴゃく (roppyaku)', meaning: 'Enam ratus' } },
  { id: 'h-106', char: 'ぴゅ', romaji: 'pyu', row: 'Py', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Pyu', example: { word: 'ぴゅあ (pyua)', meaning: 'Murni' } },
  { id: 'h-107', char: 'ぴょ', romaji: 'pyo', row: 'Py', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Pyo', example: { word: 'ぴょんぴょん (pyonpyon)', meaning: 'Melompat' } },
];

// ======================== KATAKANA DATASET ========================
export const katakanaList = [
  // --- GOJUON / SEION (46 HURUF DASAR) ---
  { id: 'k-1', char: 'ア', romaji: 'a', row: 'Vokal', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Huruf vokal A', example: { word: 'アイス (aisu)', meaning: 'Es krim' } },
  { id: 'k-2', char: 'イ', romaji: 'i', row: 'Vokal', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Huruf vokal I', example: { word: 'インド (indo)', meaning: 'India' } },
  { id: 'k-3', char: 'ウ', romaji: 'u', row: 'Vokal', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Huruf vokal U', example: { word: 'ウール (uuru)', meaning: 'Wol' } },
  { id: 'k-4', char: 'エ', romaji: 'e', row: 'Vokal', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Huruf vokal E', example: { word: 'エプロン (epuron)', meaning: 'Celemek' } },
  { id: 'k-5', char: 'オ', romaji: 'o', row: 'Vokal', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Huruf vokal O', example: { word: 'オレンジ (orenji)', meaning: 'Jeruk' } },

  { id: 'k-6', char: 'カ', romaji: 'ka', row: 'K', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ka', example: { word: 'カメラ (kamera)', meaning: 'Kamera' } },
  { id: 'k-7', char: 'キ', romaji: 'ki', row: 'K', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ki', example: { word: 'キー (kii)', meaning: 'Kunci' } },
  { id: 'k-8', char: 'ク', romaji: 'ku', row: 'K', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ku', example: { word: 'クラス (kurasu)', meaning: 'Kelas' } },
  { id: 'k-9', char: 'ケ', romaji: 'ke', row: 'K', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ke', example: { word: 'ケーキ (keeki)', meaning: 'Kue' } },
  { id: 'k-10', char: 'コ', romaji: 'ko', row: 'K', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ko', example: { word: 'コーヒー (koohii)', meaning: 'Kopi' } },

  { id: 'k-11', char: 'サ', romaji: 'sa', row: 'S', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Sa', example: { word: 'サラダ (sarada)', meaning: 'Salad' } },
  { id: 'k-12', char: 'シ', romaji: 'shi', row: 'S', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Shi', example: { word: 'シャツ (shatsu)', meaning: 'Kemeja' } },
  { id: 'k-13', char: 'ス', romaji: 'su', row: 'S', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Su', example: { word: 'スポーツ (supootsu)', meaning: 'Olahraga' } },
  { id: 'k-14', char: 'セ', romaji: 'se', row: 'S', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Se', example: { word: 'セーター (seetaa)', meaning: 'Sweter' } },
  { id: 'k-15', char: 'ソ', romaji: 'so', row: 'S', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata So', example: { word: 'ソファ (sofa)', meaning: 'Sofa' } },

  { id: 'k-16', char: 'タ', romaji: 'ta', row: 'T', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ta', example: { word: 'タクシー (takushii)', meaning: 'Taksi' } },
  { id: 'k-17', char: 'チ', romaji: 'chi', row: 'T', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Chi', example: { word: 'チーズ (chiizu)', meaning: 'Keju' } },
  { id: 'k-18', char: 'ツ', romaji: 'tsu', row: 'T', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Tsu', example: { word: 'ツアー (tsuaa)', meaning: 'Tur' } },
  { id: 'k-19', char: 'テ', romaji: 'te', row: 'T', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Te', example: { word: 'テレビ (terebi)', meaning: 'Televisi' } },
  { id: 'k-20', char: 'ト', romaji: 'to', row: 'T', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata To', example: { word: 'トマト (tomato)', meaning: 'Tomat' } },

  { id: 'k-21', char: 'ナ', romaji: 'na', row: 'N', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Na', example: { word: 'ナイフ (naifu)', meaning: 'Pisau' } },
  { id: 'k-22', char: 'ニ', romaji: 'ni', row: 'N', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ni', example: { word: 'ニュース (nyuusu)', meaning: 'Berita' } },
  { id: 'k-23', char: 'ヌ', romaji: 'nu', row: 'N', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Nu', example: { word: 'ヌードル (nuudoru)', meaning: 'Mie' } },
  { id: 'k-24', char: 'ネ', romaji: 'ne', row: 'N', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ne', example: { word: 'ネクタイ (nekutai)', meaning: 'Dasi' } },
  { id: 'k-25', char: 'ノ', romaji: 'no', row: 'N', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata No', example: { word: 'ノート (nooto)', meaning: 'Buku catatan' } },

  { id: 'k-26', char: 'ハ', romaji: 'ha', row: 'H', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ha', example: { word: 'ハム (hamu)', meaning: 'Daging ham' } },
  { id: 'k-27', char: 'ヒ', romaji: 'hi', row: 'H', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Hi', example: { word: 'ヒーター (hiitaa)', meaning: 'Pemanas' } },
  { id: 'k-28', char: 'フ', romaji: 'fu', row: 'H', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Fu', example: { word: 'フォーク (fooku)', meaning: 'Garpu' } },
  { id: 'k-29', char: 'ヘ', romaji: 'he', row: 'H', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata He', example: { word: 'ヘルメット (herumetto)', meaning: 'Helm' } },
  { id: 'k-30', char: 'ホ', romaji: 'ho', row: 'H', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ho', example: { word: 'ホテル (hoteru)', meaning: 'Hotel' } },

  { id: 'k-31', char: 'マ', romaji: 'ma', row: 'M', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ma', example: { word: 'マスク (masuku)', meaning: 'Masker' } },
  { id: 'k-32', char: 'ミ', romaji: 'mi', row: 'M', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Mi', example: { word: 'ミルク (miruku)', meaning: 'Susu' } },
  { id: 'k-33', char: 'ム', romaji: 'mu', row: 'M', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Mu', example: { word: 'ムービー (muubii)', meaning: 'Film' } },
  { id: 'k-34', char: 'メ', romaji: 'me', row: 'M', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Me', example: { word: 'メニュー (menyuu)', meaning: 'Menu' } },
  { id: 'k-35', char: 'モ', romaji: 'mo', row: 'M', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Mo', example: { word: 'モーター (mootaa)', meaning: 'Motor' } },

  { id: 'k-36', char: 'ヤ', romaji: 'ya', row: 'Y', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ya', example: { word: 'ヤシ (yashi)', meaning: 'Kelapa' } },
  { id: 'k-37', char: 'ユ', romaji: 'yu', row: 'Y', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Yu', example: { word: 'ユニフォーム (yunifoomu)', meaning: 'Seragam' } },
  { id: 'k-38', char: 'ヨ', romaji: 'yo', row: 'Y', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Yo', example: { word: 'ヨーグルト (yooguruto)', meaning: 'Yogurt' } },

  { id: 'k-39', char: 'ラ', romaji: 'ra', row: 'R', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ra', example: { word: 'ラジオ (rajio)', meaning: 'Radio' } },
  { id: 'k-40', char: 'リ', romaji: 'ri', row: 'R', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ri', example: { word: 'リンゴ (ringo)', meaning: 'Apel' } },
  { id: 'k-41', char: 'ル', romaji: 'ru', row: 'R', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ru', example: { word: 'ルール (ruuru)', meaning: 'Aturan' } },
  { id: 'k-42', char: 'レ', romaji: 're', row: 'R', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Re', example: { word: 'レモン (remon)', meaning: 'Lemon' } },
  { id: 'k-43', char: 'ロ', romaji: 'ro', row: 'R', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Ro', example: { word: 'ロボット (robotto)', meaning: 'Robot' } },

  { id: 'k-44', char: 'ワ', romaji: 'wa', row: 'W', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Suku kata Wa', example: { word: 'ワイン (wain)', meaning: 'Anggur (Wine)' } },
  { id: 'k-45', char: 'ヲ', romaji: 'wo', row: 'W', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Partikel objek katakana', example: { word: 'ヲ (wo)', meaning: 'Partikel katakana' } },
  { id: 'k-46', char: 'ン', romaji: 'n', row: 'N Tunggal', group: 'seion', groupLabel: 'Dasar (Seion)', meaning: 'Konsonan sengau N', example: { word: 'パン (pan)', meaning: 'Roti' } },

  // --- DAKUON (20 BUNYI BERSUARA KATAKANA) ---
  { id: 'k-47', char: 'ガ', romaji: 'ga', row: 'G', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Ga', example: { word: 'ガス (gasu)', meaning: 'Gas' } },
  { id: 'k-48', char: 'ギ', romaji: 'gi', row: 'G', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Gi', example: { word: 'ギター (gitaa)', meaning: 'Gitar' } },
  { id: 'k-49', char: 'グ', romaji: 'gu', row: 'G', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Gu', example: { word: 'グラス (gurasu)', meaning: 'Gelas' } },
  { id: 'k-50', char: 'ゲ', romaji: 'ge', row: 'G', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Ge', example: { word: 'ゲーム (geemu)', meaning: 'Game' } },
  { id: 'k-51', char: 'ゴ', romaji: 'go', row: 'G', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Go', example: { word: 'ゴルフ (gorufu)', meaning: 'Golf' } },

  { id: 'k-52', char: 'ザ', romaji: 'za', row: 'Z', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Za', example: { word: 'デザイン (dezain)', meaning: 'Desain' } },
  { id: 'k-53', char: 'ジ', romaji: 'ji', row: 'Z', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Ji', example: { word: 'ジュース (juusu)', meaning: 'Jus' } },
  { id: 'k-54', char: 'ズ', romaji: 'zu', row: 'Z', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Zu', example: { word: 'ズボン (zubon)', meaning: 'Celana panjang' } },
  { id: 'k-55', char: 'ゼ', romaji: 'ze', row: 'Z', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Ze', example: { word: 'ゼロ (zero)', meaning: 'Nol' } },
  { id: 'k-56', char: 'ゾ', romaji: 'zo', row: 'Z', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Zo', example: { word: 'ゾーン (zoon)', meaning: 'Zona' } },

  { id: 'k-57', char: 'ダ', romaji: 'da', row: 'D', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Da', example: { word: 'ダンス (dansu)', meaning: 'Menari' } },
  { id: 'k-58', char: 'ヂ', romaji: 'ji', row: 'D', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Ji (di)', example: { word: 'ヂ (ji)', meaning: 'Katakana Ji' } },
  { id: 'k-59', char: 'ヅ', romaji: 'zu', row: 'D', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Zu (du)', example: { word: 'ヅ (zu)', meaning: 'Katakana Zu' } },
  { id: 'k-60', char: 'デ', romaji: 'de', row: 'D', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata De', example: { word: 'デスク (desuku)', meaning: 'Meja kerja' } },
  { id: 'k-61', char: 'ド', romaji: 'do', row: 'D', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Do', example: { word: 'ドア (doa)', meaning: 'Pintu' } },

  { id: 'k-62', char: 'バ', romaji: 'ba', row: 'B', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Ba', example: { word: 'バス (basu)', meaning: 'Bus' } },
  { id: 'k-63', char: 'ビ', romaji: 'bi', row: 'B', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Bi', example: { word: 'ビル (biru)', meaning: 'Gedung' } },
  { id: 'k-64', char: 'ブ', romaji: 'bu', row: 'B', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Bu', example: { word: 'ブーツ (buutsu)', meaning: 'Sepatu bot' } },
  { id: 'k-65', char: 'ベ', romaji: 'be', row: 'B', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Be', example: { word: 'ベッド (beddo)', meaning: 'Tempat tidur' } },
  { id: 'k-66', char: 'ボ', romaji: 'bo', row: 'B', group: 'dakuon', groupLabel: 'Dakuon (Tenten)', meaning: 'Suku kata Bo', example: { word: 'ボール (booru)', meaning: 'Bola' } },

  // --- HANDAKUON (5 BUNYI MARU KATAKANA) ---
  { id: 'k-67', char: 'パ', romaji: 'pa', row: 'P', group: 'handakuon', groupLabel: 'Handakuon (Maru)', meaning: 'Suku kata Pa', example: { word: 'パーティー (paatii)', meaning: 'Pesta' } },
  { id: 'k-68', char: 'ピ', romaji: 'pi', row: 'P', group: 'handakuon', groupLabel: 'Handakuon (Maru)', meaning: 'Suku kata Pi', example: { word: 'ピアノ (piano)', meaning: 'Piano' } },
  { id: 'k-69', char: 'プ', romaji: 'pu', row: 'P', group: 'handakuon', groupLabel: 'Handakuon (Maru)', meaning: 'Suku kata Pu', example: { word: 'プール (puuru)', meaning: 'Kolam renang' } },
  { id: 'k-70', char: 'ペ', romaji: 'pe', row: 'P', group: 'handakuon', groupLabel: 'Handakuon (Maru)', meaning: 'Suku kata Pe', example: { word: 'ペン (pen)', meaning: 'Pena' } },
  { id: 'k-71', char: 'ポ', romaji: 'po', row: 'P', group: 'handakuon', groupLabel: 'Handakuon (Maru)', meaning: 'Suku kata Po', example: { word: 'ポスト (posuto)', meaning: 'Kotak pos' } },

  // --- YOON (36 KOMBINASI KATAKANA) ---
  { id: 'k-72', char: 'キャ', romaji: 'kya', row: 'Ky', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Kya', example: { word: 'キャンプ (kyanpu)', meaning: 'Kemah' } },
  { id: 'k-73', char: 'キュ', romaji: 'kyu', row: 'Ky', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Kyu', example: { word: 'キューブ (kyuubu)', meaning: 'Kubus' } },
  { id: 'k-74', char: 'キョ', romaji: 'kyo', row: 'Ky', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Kyo', example: { word: 'キョロキョロ (kyorokyoro)', meaning: 'Melihat sekeliling' } },

  { id: 'k-75', char: 'シャ', romaji: 'sha', row: 'Sh', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Sha', example: { word: 'シャワー (shawaa)', meaning: 'Mandi pancuran' } },
  { id: 'k-76', char: 'シュ', romaji: 'shu', row: 'Sh', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Shu', example: { word: 'シュークリーム (shuukuriimu)', meaning: 'Kue sus' } },
  { id: 'k-77', char: 'ショ', romaji: 'sho', row: 'Sh', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Sho', example: { word: 'ショップ (shoppu)', meaning: 'Toko' } },

  { id: 'k-78', char: 'チャ', romaji: 'cha', row: 'Ch', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Cha', example: { word: 'チャンス (chansu)', meaning: 'Kesempatan' } },
  { id: 'k-79', char: 'チュ', romaji: 'chu', row: 'Ch', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Chu', example: { word: 'チューリップ (chuurippu)', meaning: 'Bunga tulip' } },
  { id: 'k-80', char: 'チョ', romaji: 'cho', row: 'Ch', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Cho', example: { word: 'チョコ (choko)', meaning: 'Cokelat' } },

  { id: 'k-81', char: 'ニャ', romaji: 'nya', row: 'Ny', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Nya', example: { word: 'ニャー (nyaa)', meaning: 'Suara meong' } },
  { id: 'k-82', char: 'ニュ', romaji: 'nyu', row: 'Ny', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Nyu', example: { word: 'ニュース (nyuusu)', meaning: 'Berita' } },
  { id: 'k-83', char: 'ニョ', romaji: 'nyo', row: 'Ny', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Nyo', example: { word: 'ニョキニョキ (nyokinyoki)', meaning: 'Tumbuh cepat' } },

  { id: 'k-84', char: 'ヒャ', romaji: 'hya', row: 'Hy', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Hya', example: { word: 'ヒャク (hyaku)', meaning: 'Seratus' } },
  { id: 'k-85', char: 'ヒュ', romaji: 'hyu', row: 'Hy', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Hyu', example: { word: 'ヒューズ (hyuuzu)', meaning: 'Sekring' } },
  { id: 'k-86', char: 'ヒョ', romaji: 'hyo', row: 'Hy', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Hyo', example: { word: 'ヒョウ (hyou)', meaning: 'Macan tutul' } },

  { id: 'k-87', char: 'ミャ', romaji: 'mya', row: 'My', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Mya', example: { word: 'ミャンマー (myanmaa)', meaning: 'Myanmar' } },
  { id: 'k-88', char: 'ミュ', romaji: 'myu', row: 'My', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Myu', example: { word: 'ミュージカル (myuujikaru)', meaning: 'Musikal' } },
  { id: 'k-89', char: 'ミョ', romaji: 'myo', row: 'My', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Myo', example: { word: 'ミョウガ (myouga)', meaning: 'Jahe jepang' } },

  { id: 'k-90', char: 'リャ', romaji: 'rya', row: 'Ry', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Rya', example: { word: 'リャマ (ryama)', meaning: 'Llama' } },
  { id: 'k-91', char: 'リュ', romaji: 'ryu', row: 'Ry', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Ryu', example: { word: 'リュック (ryukku)', meaning: 'Ransel' } },
  { id: 'k-92', char: 'リョ', romaji: 'ryo', row: 'Ry', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Ryo', example: { word: 'リョコウ (ryokou)', meaning: 'Liburan' } },

  { id: 'k-93', char: 'ギャ', romaji: 'gya', row: 'Gy', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Gya', example: { word: 'ギャラリー (gyararii)', meaning: 'Galeri' } },
  { id: 'k-94', char: 'ギュ', romaji: 'gyu', row: 'Gy', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Gyu', example: { word: 'ギュー (gyuu)', meaning: 'Pelukan erat' } },
  { id: 'k-95', char: 'ギョ', romaji: 'gyo', row: 'Gy', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Gyo', example: { word: 'ギョーザ (gyooza)', meaning: 'Gyoza' } },

  { id: 'k-96', char: 'ジャ', romaji: 'ja', row: 'J', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Ja', example: { word: 'ジャケット (jaketto)', meaning: 'Jaket' } },
  { id: 'k-97', char: 'ジュ', romaji: 'ju', row: 'J', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Ju', example: { word: 'ジュース (juusu)', meaning: 'Jus' } },
  { id: 'k-98', char: 'ジョ', romaji: 'jo', row: 'J', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Jo', example: { word: 'ジョギング (jogingu)', meaning: 'Joging' } },

  { id: 'k-99', char: 'ヂャ', romaji: 'ja', row: 'Dy', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Ja (dya)', example: { word: 'ヂャ (ja)', meaning: 'Variasi Katakana Ja' } },
  { id: 'k-100', char: 'ヂュ', romaji: 'ju', row: 'Dy', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Ju (dyu)', example: { word: 'ヂュ (ju)', meaning: 'Variasi Katakana Ju' } },
  { id: 'k-101', char: 'ヂョ', romaji: 'jo', row: 'Dy', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Jo (dyo)', example: { word: 'ヂョ (jo)', meaning: 'Variasi Katakana Jo' } },

  { id: 'k-102', char: 'ビャ', romaji: 'bya', row: 'By', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Bya', example: { word: 'ビャクシン (byakushin)', meaning: 'Pohon cemara' } },
  { id: 'k-103', char: 'ビュ', romaji: 'byu', row: 'By', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Byu', example: { word: 'ビュッフェ (byuffe)', meaning: 'Prasmanan' } },
  { id: 'k-104', char: 'ビョ', romaji: 'byo', row: 'By', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Byo', example: { word: 'ビョウ (byou)', meaning: 'Paku payung' } },

  { id: 'k-105', char: 'ピャ', romaji: 'pya', row: 'Py', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Pya', example: { word: 'ピャ (pya)', meaning: 'Katakana Pya' } },
  { id: 'k-106', char: 'ピュ', romaji: 'pyu', row: 'Py', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Pyu', example: { word: 'ピューマ (pyuuma)', meaning: 'Puma' } },
  { id: 'k-107', char: 'ピョ', romaji: 'pyo', row: 'Py', group: 'yoon', groupLabel: 'Kombinasi (Yōon)', meaning: 'Kombinasi Pyo', example: { word: 'ピョンヤン (pyonyan)', meaning: 'Pyongyang' } },
];

// ======================== KANJI N5 DATASET ========================
export const kanjiList = [
  {
    id: 'kj-1',
    char: '日',
    romaji: 'nichi, hi',
    meaning: 'Matahari, Hari',
    onyomi: 'NICHI, JITSU',
    kunyomi: 'hi, -bi, -ka',
    level: 'N5',
    strokes: 4,
    example: { word: '日本 (nihon)', meaning: 'Jepang' },
  },
  {
    id: 'kj-2',
    char: '月',
    romaji: 'tsuki, getsu',
    meaning: 'Bulan (Moon/Month)',
    onyomi: 'GETSU, GATSU',
    kunyomi: 'tsuki',
    level: 'N5',
    strokes: 4,
    example: { word: '今月 (kongetsu)', meaning: 'Bulan ini' },
  },
  {
    id: 'kj-3',
    char: '木',
    romaji: 'ki, moku',
    meaning: 'Pohon, Kayu',
    onyomi: 'MOKU, BOKU',
    kunyomi: 'ki, ko-',
    level: 'N5',
    strokes: 4,
    example: { word: '木曜日 (mokuyoubi)', meaning: 'Hari Kamis' },
  },
  {
    id: 'kj-4',
    char: '水',
    romaji: 'mizu, sui',
    meaning: 'Air',
    onyomi: 'SUI',
    kunyomi: 'mizu',
    level: 'N5',
    strokes: 4,
    example: { word: '水着 (mizugi)', meaning: 'Pakaian renang' },
  },
  {
    id: 'kj-5',
    char: '火',
    romaji: 'hi, ka',
    meaning: 'Api',
    onyomi: 'KA',
    kunyomi: 'hi, -bi, ho-',
    level: 'N5',
    strokes: 4,
    example: { word: '火曜日 (kayoubi)', meaning: 'Hari Selasa' },
  },
  {
    id: 'kj-6',
    char: '金',
    romaji: 'kane, kin',
    meaning: 'Emas, Uang',
    onyomi: 'KIN, KON',
    kunyomi: 'kane, kana-',
    level: 'N5',
    strokes: 8,
    example: { word: 'お金 (okane)', meaning: 'Uang' },
  },
  {
    id: 'kj-7',
    char: '土',
    romaji: 'tsuchi, do',
    meaning: 'Tanah, Bumi',
    onyomi: 'DO, TO',
    kunyomi: 'tsuchi',
    level: 'N5',
    strokes: 3,
    example: { word: '土曜日 (doyoubi)', meaning: 'Hari Sabtu' },
  },
  {
    id: 'kj-8',
    char: '山',
    romaji: 'yama, san',
    meaning: 'Gunung',
    onyomi: 'SAN, ZAN',
    kunyomi: 'yama',
    level: 'N5',
    strokes: 3,
    example: { word: '富士山 (fujisan)', meaning: 'Gunung Fuji' },
  },
  {
    id: 'kj-9',
    char: '川',
    romaji: 'kawa, sen',
    meaning: 'Sungai',
    onyomi: 'SEN',
    kunyomi: 'kawa',
    level: 'N5',
    strokes: 3,
    example: { word: '川辺 (kawabe)', meaning: 'Tepi sungai' },
  },
  {
    id: 'kj-10',
    char: '人',
    romaji: 'hito, jin',
    meaning: 'Orang, Manusia',
    onyomi: 'JIN, NIN',
    kunyomi: 'hito',
    level: 'N5',
    strokes: 2,
    example: { word: '日本人 (nihonjin)', meaning: 'Orang Jepang' },
  },
  {
    id: 'kj-11',
    char: '本',
    romaji: 'hon, moto',
    meaning: 'Buku, Asal',
    onyomi: 'HON',
    kunyomi: 'moto',
    level: 'N5',
    strokes: 5,
    example: { word: '本屋 (honya)', meaning: 'Toko buku' },
  },
  {
    id: 'kj-12',
    char: '学',
    romaji: 'gaku, mana(bu)',
    meaning: 'Belajar, Ilmu',
    onyomi: 'GAKU',
    kunyomi: 'mana-bu',
    level: 'N5',
    strokes: 8,
    example: { word: '学生 (gakusei)', meaning: 'Murid / Mahasiswa' },
  },
  {
    id: 'kj-13',
    char: '校',
    romaji: 'kou',
    meaning: 'Sekolah',
    onyomi: 'KOU',
    kunyomi: '-',
    level: 'N5',
    strokes: 10,
    example: { word: '学校 (gakkou)', meaning: 'Sekolah' },
  },
  {
    id: 'kj-14',
    char: '先',
    romaji: 'saki, sen',
    meaning: 'Dahulu, Ujung',
    onyomi: 'SEN',
    kunyomi: 'saki, ma-zu',
    level: 'N5',
    strokes: 6,
    example: { word: '先生 (sensei)', meaning: 'Guru / Dokter' },
  },
  {
    id: 'kj-15',
    char: '生',
    romaji: 'sei, i(kiru)',
    meaning: 'Hidup, Lahir',
    onyomi: 'SEI, SHOU',
    kunyomi: 'i-kiru, u-mareru',
    level: 'N5',
    strokes: 5,
    example: { word: '生活 (seikatsu)', meaning: 'Kehidupan' },
  },
  {
    id: 'kj-16',
    char: '車',
    romaji: 'kuruma, sha',
    meaning: 'Kendaraan, Mobil',
    onyomi: 'SHA',
    kunyomi: 'kuruma',
    level: 'N5',
    strokes: 7,
    example: { word: '電車 (densha)', meaning: 'Kereta listrik' },
  },
  {
    id: 'kj-17',
    char: '電',
    romaji: 'den',
    meaning: 'Listrik',
    onyomi: 'DEN',
    kunyomi: '-',
    level: 'N5',
    strokes: 13,
    example: { word: '電話 (denwa)', meaning: 'Telepon' },
  },
  {
    id: 'kj-18',
    char: '語',
    romaji: 'kata(ru), go',
    meaning: 'Bahasa, Berbicara',
    onyomi: 'GO',
    kunyomi: 'kata-ru',
    level: 'N5',
    strokes: 14,
    example: { word: '日本語 (nihongo)', meaning: 'Bahasa Jepang' },
  },
  {
    id: 'kj-19',
    char: '何',
    romaji: 'nani, ka',
    meaning: 'Apa',
    onyomi: 'KA',
    kunyomi: 'nani, nan',
    level: 'N5',
    strokes: 7,
    example: { word: '何時 (nanji)', meaning: 'Jam berapa' },
  },
  {
    id: 'kj-20',
    char: '大',
    romaji: 'oo(kii), dai',
    meaning: 'Besar',
    onyomi: 'DAI, TAI',
    kunyomi: 'oo-kii',
    level: 'N5',
    strokes: 3,
    example: { word: '大学 (daigaku)', meaning: 'Universitas' },
  },
];

// ======================== STRUKTUR TABEL LENGKAP (HORIZONTAL / KE SAMPING) ========================
export const chartLayout = {
  hiragana: {
    vowels: ['a', 'i', 'u', 'e', 'o'],
    seionRows: [
      {
        rowName: 'A',
        items: [
          { char: 'あ', romaji: 'a' },
          { char: 'い', romaji: 'i' },
          { char: 'う', romaji: 'u' },
          { char: 'え', romaji: 'e' },
          { char: 'お', romaji: 'o' },
        ],
      },
      {
        rowName: 'Ka',
        items: [
          { char: 'か', romaji: 'ka' },
          { char: 'き', romaji: 'ki' },
          { char: 'く', romaji: 'ku' },
          { char: 'け', romaji: 'ke' },
          { char: 'こ', romaji: 'ko' },
        ],
      },
      {
        rowName: 'Sa',
        items: [
          { char: 'さ', romaji: 'sa' },
          { char: 'し', romaji: 'shi' },
          { char: 'す', romaji: 'su' },
          { char: 'せ', romaji: 'se' },
          { char: 'そ', romaji: 'so' },
        ],
      },
      {
        rowName: 'Ta',
        items: [
          { char: 'た', romaji: 'ta' },
          { char: 'ち', romaji: 'chi' },
          { char: 'つ', romaji: 'tsu' },
          { char: 'て', romaji: 'te' },
          { char: 'と', romaji: 'to' },
        ],
      },
      {
        rowName: 'Na',
        items: [
          { char: 'な', romaji: 'na' },
          { char: 'に', romaji: 'ni' },
          { char: 'ぬ', romaji: 'nu' },
          { char: 'ね', romaji: 'ne' },
          { char: 'の', romaji: 'no' },
        ],
      },
      {
        rowName: 'Ha',
        items: [
          { char: 'は', romaji: 'ha' },
          { char: 'ひ', romaji: 'hi' },
          { char: 'ふ', romaji: 'fu' },
          { char: 'へ', romaji: 'he' },
          { char: 'ほ', romaji: 'ho' },
        ],
      },
      {
        rowName: 'Ma',
        items: [
          { char: 'ま', romaji: 'ma' },
          { char: 'み', romaji: 'mi' },
          { char: 'む', romaji: 'mu' },
          { char: 'め', romaji: 'me' },
          { char: 'も', romaji: 'mo' },
        ],
      },
      {
        rowName: 'Ya',
        items: [
          { char: 'や', romaji: 'ya' },
          null,
          { char: 'ゆ', romaji: 'yu' },
          null,
          { char: 'よ', romaji: 'yo' },
        ],
      },
      {
        rowName: 'Ra',
        items: [
          { char: 'ら', romaji: 'ra' },
          { char: 'り', romaji: 'ri' },
          { char: 'る', romaji: 'ru' },
          { char: 'れ', romaji: 're' },
          { char: 'ろ', romaji: 'ro' },
        ],
      },
      {
        rowName: 'Wa',
        items: [
          { char: 'わ', romaji: 'wa' },
          null,
          null,
          null,
          { char: 'を', romaji: 'wo' },
        ],
      },
      {
        rowName: 'N',
        items: [
          { char: 'ん', romaji: 'n' },
          null,
          null,
          null,
          null,
        ],
      },
    ],
    dakuonRows: [
      {
        rowName: 'Ga',
        items: [
          { char: 'が', romaji: 'ga' },
          { char: 'ぎ', romaji: 'gi' },
          { char: 'ぐ', romaji: 'gu' },
          { char: 'げ', romaji: 'ge' },
          { char: 'ご', romaji: 'go' },
        ],
      },
      {
        rowName: 'Za',
        items: [
          { char: 'ざ', romaji: 'za' },
          { char: 'じ', romaji: 'ji' },
          { char: 'ず', romaji: 'zu' },
          { char: 'ぜ', romaji: 'ze' },
          { char: 'ぞ', romaji: 'zo' },
        ],
      },
      {
        rowName: 'Da',
        items: [
          { char: 'だ', romaji: 'da' },
          { char: 'ぢ', romaji: 'ji' },
          { char: 'づ', romaji: 'zu' },
          { char: 'で', romaji: 'de' },
          { char: 'ど', romaji: 'do' },
        ],
      },
      {
        rowName: 'Ba',
        items: [
          { char: 'ば', romaji: 'ba' },
          { char: 'び', romaji: 'bi' },
          { char: 'ぶ', romaji: 'bu' },
          { char: 'べ', romaji: 'be' },
          { char: 'ぼ', romaji: 'bo' },
        ],
      },
      {
        rowName: 'Pa',
        items: [
          { char: 'ぱ', romaji: 'pa' },
          { char: 'ぴ', romaji: 'pi' },
          { char: 'ぷ', romaji: 'pu' },
          { char: 'ぺ', romaji: 'pe' },
          { char: 'ぽ', romaji: 'po' },
        ],
      },
    ],
    yoonGlides: ['-ya', '-yu', '-yo'],
    seionYoonRows: [
      {
        rowName: 'Kya',
        items: [
          { char: 'きゃ', romaji: 'kya' },
          { char: 'きゅ', romaji: 'kyu' },
          { char: 'きょ', romaji: 'kyo' },
        ],
      },
      {
        rowName: 'Sha',
        items: [
          { char: 'しゃ', romaji: 'sha' },
          { char: 'しゅ', romaji: 'shu' },
          { char: 'しょ', romaji: 'sho' },
        ],
      },
      {
        rowName: 'Cha',
        items: [
          { char: 'ちゃ', romaji: 'cha' },
          { char: 'ちゅ', romaji: 'chu' },
          { char: 'ちょ', romaji: 'cho' },
        ],
      },
      {
        rowName: 'Nya',
        items: [
          { char: 'にゃ', romaji: 'nya' },
          { char: 'にゅ', romaji: 'nyu' },
          { char: 'にょ', romaji: 'nyo' },
        ],
      },
      {
        rowName: 'Hya',
        items: [
          { char: 'ひゃ', romaji: 'hya' },
          { char: 'ひゅ', romaji: 'hyu' },
          { char: 'ひょ', romaji: 'hyo' },
        ],
      },
      {
        rowName: 'Mya',
        items: [
          { char: 'みゃ', romaji: 'mya' },
          { char: 'みゅ', romaji: 'myu' },
          { char: 'みょ', romaji: 'myo' },
        ],
      },
      {
        rowName: 'Rya',
        items: [
          { char: 'りゃ', romaji: 'rya' },
          { char: 'りゅ', romaji: 'ryu' },
          { char: 'りょ', romaji: 'ryo' },
        ],
      },
    ],
    dakuonYoonRows: [
      {
        rowName: 'Gya',
        items: [
          { char: 'ぎゃ', romaji: 'gya' },
          { char: 'ぎゅ', romaji: 'gyu' },
          { char: 'ぎょ', romaji: 'gyo' },
        ],
      },
      {
        rowName: 'Ja',
        items: [
          { char: 'じゃ', romaji: 'ja' },
          { char: 'じゅ', romaji: 'ju' },
          { char: 'じょ', romaji: 'jo' },
        ],
      },
      {
        rowName: 'Ja (ぢ)',
        items: [
          { char: 'ぢゃ', romaji: 'ja' },
          { char: 'ぢゅ', romaji: 'ju' },
          { char: 'ぢょ', romaji: 'jo' },
        ],
      },
      {
        rowName: 'Bya',
        items: [
          { char: 'びゃ', romaji: 'bya' },
          { char: 'びゅ', romaji: 'byu' },
          { char: 'びょ', romaji: 'byo' },
        ],
      },
      {
        rowName: 'Pya',
        items: [
          { char: 'ぴゃ', romaji: 'pya' },
          { char: 'ぴゅ', romaji: 'pyu' },
          { char: 'ぴょ', romaji: 'pyo' },
        ],
      },
    ],
  },
  katakana: {
    vowels: ['a', 'i', 'u', 'e', 'o'],
    seionRows: [
      {
        rowName: 'A',
        items: [
          { char: 'ア', romaji: 'a' },
          { char: 'イ', romaji: 'i' },
          { char: 'ウ', romaji: 'u' },
          { char: 'エ', romaji: 'e' },
          { char: 'オ', romaji: 'o' },
        ],
      },
      {
        rowName: 'Ka',
        items: [
          { char: 'カ', romaji: 'ka' },
          { char: 'キ', romaji: 'ki' },
          { char: 'ク', romaji: 'ku' },
          { char: 'ケ', romaji: 'ke' },
          { char: 'コ', romaji: 'ko' },
        ],
      },
      {
        rowName: 'Sa',
        items: [
          { char: 'サ', romaji: 'sa' },
          { char: 'シ', romaji: 'shi' },
          { char: 'ス', romaji: 'su' },
          { char: 'セ', romaji: 'se' },
          { char: 'ソ', romaji: 'so' },
        ],
      },
      {
        rowName: 'Ta',
        items: [
          { char: 'タ', romaji: 'ta' },
          { char: 'チ', romaji: 'chi' },
          { char: 'ツ', romaji: 'tsu' },
          { char: 'テ', romaji: 'te' },
          { char: 'ト', romaji: 'to' },
        ],
      },
      {
        rowName: 'Na',
        items: [
          { char: 'ナ', romaji: 'na' },
          { char: 'ニ', romaji: 'ni' },
          { char: 'ヌ', romaji: 'nu' },
          { char: 'ネ', romaji: 'ne' },
          { char: 'ノ', romaji: 'no' },
        ],
      },
      {
        rowName: 'Ha',
        items: [
          { char: 'ハ', romaji: 'ha' },
          { char: 'ヒ', romaji: 'hi' },
          { char: 'フ', romaji: 'fu' },
          { char: 'ヘ', romaji: 'he' },
          { char: 'ホ', romaji: 'ho' },
        ],
      },
      {
        rowName: 'Ma',
        items: [
          { char: 'マ', romaji: 'ma' },
          { char: 'ミ', romaji: 'mi' },
          { char: 'ム', romaji: 'mu' },
          { char: 'メ', romaji: 'me' },
          { char: 'モ', romaji: 'mo' },
        ],
      },
      {
        rowName: 'Ya',
        items: [
          { char: 'ヤ', romaji: 'ya' },
          null,
          { char: 'ユ', romaji: 'yu' },
          null,
          { char: 'ヨ', romaji: 'yo' },
        ],
      },
      {
        rowName: 'Ra',
        items: [
          { char: 'ラ', romaji: 'ra' },
          { char: 'リ', romaji: 'ri' },
          { char: 'ル', romaji: 'ru' },
          { char: 'レ', romaji: 're' },
          { char: 'ロ', romaji: 'ro' },
        ],
      },
      {
        rowName: 'Wa',
        items: [
          { char: 'ワ', romaji: 'wa' },
          null,
          null,
          null,
          { char: 'ヲ', romaji: 'wo' },
        ],
      },
      {
        rowName: 'N',
        items: [
          { char: 'ン', romaji: 'n' },
          null,
          null,
          null,
          null,
        ],
      },
    ],
    dakuonRows: [
      {
        rowName: 'Ga',
        items: [
          { char: 'ガ', romaji: 'ga' },
          { char: 'ギ', romaji: 'gi' },
          { char: 'グ', romaji: 'gu' },
          { char: 'ゲ', romaji: 'ge' },
          { char: 'ゴ', romaji: 'go' },
        ],
      },
      {
        rowName: 'Za',
        items: [
          { char: 'ザ', romaji: 'za' },
          { char: 'ジ', romaji: 'ji' },
          { char: 'ズ', romaji: 'zu' },
          { char: 'ゼ', romaji: 'ze' },
          { char: 'ゾ', romaji: 'zo' },
        ],
      },
      {
        rowName: 'Da',
        items: [
          { char: 'ダ', romaji: 'da' },
          { char: 'ヂ', romaji: 'ji' },
          { char: 'ヅ', romaji: 'zu' },
          { char: 'デ', romaji: 'de' },
          { char: 'ド', romaji: 'do' },
        ],
      },
      {
        rowName: 'Ba',
        items: [
          { char: 'バ', romaji: 'ba' },
          { char: 'ビ', romaji: 'bi' },
          { char: 'ブ', romaji: 'bu' },
          { char: 'ベ', romaji: 'be' },
          { char: 'ボ', romaji: 'bo' },
        ],
      },
      {
        rowName: 'Pa',
        items: [
          { char: 'パ', romaji: 'pa' },
          { char: 'ピ', romaji: 'pi' },
          { char: 'プ', romaji: 'pu' },
          { char: 'ペ', romaji: 'pe' },
          { char: 'ポ', romaji: 'po' },
        ],
      },
    ],
    yoonGlides: ['-ya', '-yu', '-yo'],
    seionYoonRows: [
      {
        rowName: 'Kya',
        items: [
          { char: 'キャ', romaji: 'kya' },
          { char: 'キュ', romaji: 'kyu' },
          { char: 'キョ', romaji: 'kyo' },
        ],
      },
      {
        rowName: 'Sha',
        items: [
          { char: 'シャ', romaji: 'sha' },
          { char: 'シュ', romaji: 'shu' },
          { char: 'ショ', romaji: 'sho' },
        ],
      },
      {
        rowName: 'Cha',
        items: [
          { char: 'チャ', romaji: 'cha' },
          { char: 'チュ', romaji: 'chu' },
          { char: 'チョ', romaji: 'cho' },
        ],
      },
      {
        rowName: 'Nya',
        items: [
          { char: 'ニャ', romaji: 'nya' },
          { char: 'ニュ', romaji: 'nyu' },
          { char: 'ニョ', romaji: 'nyo' },
        ],
      },
      {
        rowName: 'Hya',
        items: [
          { char: 'ヒャ', romaji: 'hya' },
          { char: 'ヒュ', romaji: 'hyu' },
          { char: 'ヒョ', romaji: 'hyo' },
        ],
      },
      {
        rowName: 'Mya',
        items: [
          { char: 'ミャ', romaji: 'mya' },
          { char: 'ミュ', romaji: 'myu' },
          { char: 'ミョ', romaji: 'myo' },
        ],
      },
      {
        rowName: 'Rya',
        items: [
          { char: 'リャ', romaji: 'rya' },
          { char: 'リュ', romaji: 'ryu' },
          { char: 'リョ', romaji: 'ryo' },
        ],
      },
    ],
    dakuonYoonRows: [
      {
        rowName: 'Gya',
        items: [
          { char: 'ギャ', romaji: 'gya' },
          { char: 'ギュ', romaji: 'gyu' },
          { char: 'ギョ', romaji: 'gyo' },
        ],
      },
      {
        rowName: 'Ja',
        items: [
          { char: 'ジャ', romaji: 'ja' },
          { char: 'ジュ', romaji: 'ju' },
          { char: 'ジョ', romaji: 'jo' },
        ],
      },
      {
        rowName: 'Ja (ヂ)',
        items: [
          { char: 'ヂャ', romaji: 'ja' },
          { char: 'ヂュ', romaji: 'ju' },
          { char: 'ヂョ', romaji: 'jo' },
        ],
      },
      {
        rowName: 'Bya',
        items: [
          { char: 'ビャ', romaji: 'bya' },
          { char: 'ビュ', romaji: 'byu' },
          { char: 'ビョ', romaji: 'byo' },
        ],
      },
      {
        rowName: 'Pya',
        items: [
          { char: 'ピャ', romaji: 'pya' },
          { char: 'ピュ', romaji: 'pyu' },
          { char: 'ピョ', romaji: 'pyo' },
        ],
      },
    ],
  },
};

// ======================== BANK SOAL KUIS ========================
export const quizBank = {
  hiragana: [
    {
      id: 'q-h-1',
      questionChar: 'あ',
      prompt: 'Bagaimana cara membaca huruf Hiragana di atas?',
      options: ['a', 'o', 'e', 'u'],
      correctAnswerIndex: 0,
      explanation: 'Huruf "あ" dibaca sebagai vokal "a". Contoh kata: あさ (asa = pagi).',
    },
    {
      id: 'q-h-2',
      questionChar: 'き',
      prompt: 'Bagaimana cara membaca huruf Hiragana di atas?',
      options: ['sa', 'ki', 'shi', 'chi'],
      correctAnswerIndex: 1,
      explanation: 'Huruf "き" dibaca "ki". Contoh kata: き (ki = pohon).',
    },
    {
      id: 'q-h-3',
      questionChar: 'が',
      prompt: 'Huruf "か" yang diberi tanda tenten (゛) menjadi "が". Bagaimana cara membacanya?',
      options: ['za', 'ba', 'ga', 'pa'],
      correctAnswerIndex: 2,
      explanation: 'Tanda tenten pada baris K mengubah bunyi menjadi G. Huruf "が" dibaca "ga".',
    },
    {
      id: 'q-h-4',
      questionChar: 'きゃ',
      prompt: 'Bagaimana cara membaca kombinasi huruf (Yōon) di atas?',
      options: ['kya', 'sha', 'cha', 'nya'],
      correctAnswerIndex: 0,
      explanation: 'Huruf "き" dipadu dengan "ゃ" kecil dibaca meluncur menjadi "kya". Contoh: きゃく (kyaku = tamu).',
    },
    {
      id: 'q-h-5',
      questionChar: 'つ',
      prompt: 'Bagaimana cara membaca huruf Hiragana di atas?',
      options: ['ku', 'tsu', 'shi', 'no'],
      correctAnswerIndex: 1,
      explanation: 'Huruf "つ" dibaca "tsu". Contoh: つき (tsuki = bulan).',
    },
    {
      id: 'q-h-6',
      questionChar: 'ぱ',
      prompt: 'Huruf "は" yang diberi lingkaran maru (゜) menjadi "ぱ". Bagaimana cara membacanya?',
      options: ['ba', 'pa', 'fa', 'ma'],
      correctAnswerIndex: 1,
      explanation: 'Tanda maru (handakuon) pada baris H mengubah konsonan menjadi P. "ぱ" dibaca "pa".',
    },
    {
      id: 'q-h-7',
      questionChar: 'しょ',
      prompt: 'Bagaimana cara membaca kombinasi Hiragana "しょ"?',
      options: ['sho', 'cho', 'kyo', 'ryo'],
      correctAnswerIndex: 0,
      explanation: 'Kombinasi "し" dan "ょ" kecil dibaca "sho". Contoh kata: しょくどう (shokudou = kantin).',
    },
    {
      id: 'q-h-8',
      questionChar: 'る',
      prompt: 'Bagaimana cara membaca huruf Hiragana di atas?',
      options: ['ro', 'ru', 're', 'so'],
      correctAnswerIndex: 1,
      explanation: 'Huruf "る" dibaca "ru". Memiliki bulatan simpul di ujung ekornya.',
    },
    {
      id: 'q-h-9',
      questionChar: 'じゃ',
      prompt: 'Bagaimana cara membaca kombinasi "じゃ" di atas?',
      options: ['ja', 'gya', 'bya', 'pya'],
      correctAnswerIndex: 0,
      explanation: '"じ" ditambah "ゃ" kecil dibaca "ja". Contoh kata: じゃま (jama = gangguan).',
    },
    {
      id: 'q-h-10',
      questionChar: 'ん',
      prompt: 'Bagaimana cara membaca huruf Hiragana di atas?',
      options: ['so', 'shi', 'n', 'ku'],
      correctAnswerIndex: 2,
      explanation: 'Huruf "ん" dibaca konsonan sengau "n" tunggal. Contoh kata: ほん (hon = buku).',
    },
  ],

  katakana: [
    {
      id: 'q-k-1',
      questionChar: 'ア',
      prompt: 'Bagaimana cara membaca huruf Katakana di atas?',
      options: ['a', 'ma', 'fu', 'te'],
      correctAnswerIndex: 0,
      explanation: 'Huruf "ア" adalah Katakana vokal "a". Contoh kata: アイス (aisu = es krim).',
    },
    {
      id: 'q-k-2',
      questionChar: 'カ',
      prompt: 'Bagaimana cara membaca huruf Katakana di atas?',
      options: ['ku', 'ka', 'ri', 'ro'],
      correctAnswerIndex: 1,
      explanation: 'Huruf "カ" dibaca "ka". Bersudut tajam dibanding hiragana "か".',
    },
    {
      id: 'q-k-3',
      questionChar: 'シ',
      prompt: 'Manakah cara baca yang tepat untuk huruf Katakana di atas?',
      options: ['tsu', 'shi', 'so', 'n'],
      correctAnswerIndex: 1,
      explanation: 'Huruf "シ" dibaca "shi". Tarikan garisnya lebih mendatar dari bawah ke atas.',
    },
    {
      id: 'q-k-4',
      questionChar: 'ガ',
      prompt: 'Bagaimana cara membaca huruf Katakana "ガ"?',
      options: ['za', 'ga', 'da', 'ba'],
      correctAnswerIndex: 1,
      explanation: 'Tenten pada "カ" mengubah bunyi menjadi "ガ (ga)".',
    },
    {
      id: 'q-k-5',
      questionChar: 'キャ',
      prompt: 'Bagaimana cara membaca kombinasi Katakana "キャ"?',
      options: ['kya', 'sha', 'cha', 'nya'],
      correctAnswerIndex: 0,
      explanation: '"キ" + "ャ" kecil dibaca "kya". Contoh kata: キャンプ (kyanpu = kemah).',
    },
    {
      id: 'q-k-6',
      questionChar: 'ナ',
      prompt: 'Bagaimana cara membaca huruf Katakana di atas?',
      options: ['na', 'me', 'nu', 'to'],
      correctAnswerIndex: 0,
      explanation: 'Huruf "ナ" dibaca "na". Contoh kata: ナイフ (naifu = pisau).',
    },
    {
      id: 'q-k-7',
      questionChar: 'マ',
      prompt: 'Bagaimana cara membaca huruf Katakana di atas?',
      options: ['a', 'mu', 'ma', 'ya'],
      correctAnswerIndex: 2,
      explanation: 'Huruf "マ" dibaca "ma". Contoh kata: マスク (masuku = masker).',
    },
    {
      id: 'q-k-8',
      questionChar: 'ヨ',
      prompt: 'Bagaimana cara membaca huruf Katakana di atas?',
      options: ['e', 'yo', 'ko', 'ne'],
      correctAnswerIndex: 1,
      explanation: 'Huruf "ヨ" dibaca "yo". Contoh kata: ヨーグルト (yooguruto = yogurt).',
    },
    {
      id: 'q-k-9',
      questionChar: 'ロ',
      prompt: 'Bagaimana cara membaca huruf Katakana di atas?',
      options: ['ro', 'ko', 'wa', 'kuchi'],
      correctAnswerIndex: 0,
      explanation: 'Huruf "ロ" adalah Katakana "ro". Berbentuk kotak utuh.',
    },
    {
      id: 'q-k-10',
      questionChar: 'パン',
      prompt: 'Apa arti kata Katakana "パン (pan)" dalam Bahasa Indonesia?',
      options: ['Panci', 'Roti', 'Kamera', 'Pena'],
      correctAnswerIndex: 1,
      explanation: '"パン (pan)" adalah kata serapan dalam Bahasa Jepang yang berarti Roti.',
    },
  ],

  kanji: [
    {
      id: 'q-kj-1',
      questionChar: '日',
      prompt: 'Apa makna utama dari Kanji "日"?',
      options: ['Matahari / Hari', 'Bulan / Malam', 'Pohon', 'Air'],
      correctAnswerIndex: 0,
      explanation: 'Kanji "日" bermakna matahari atau hari. Onyomi: NICHI, Kunyomi: hi.',
    },
    {
      id: 'q-kj-2',
      questionChar: '月',
      prompt: 'Apa makna dari Kanji "月"?',
      options: ['Matahari', 'Bulan (Moon/Month)', 'Api', 'Emas'],
      correctAnswerIndex: 1,
      explanation: 'Kanji "月" melambangkan bulan. Onyomi: GETSU/GATSU, Kunyomi: tsuki.',
    },
    {
      id: 'q-kj-3',
      questionChar: '水',
      prompt: 'Bagaimana cara baca Kunyomi dari Kanji "水"?',
      options: ['hi', 'mizu', 'ki', 'kane'],
      correctAnswerIndex: 1,
      explanation: 'Kunyomi untuk "水" (Air) adalah "mizu", sedangkan Onyominya adalah "SUI".',
    },
    {
      id: 'q-kj-4',
      questionChar: '人',
      prompt: 'Apa arti dari Kanji "人"?',
      options: ['Orang / Manusia', 'Besar', 'Pintu', 'Gunung'],
      correctAnswerIndex: 0,
      explanation: 'Kanji "人" melambangkan orang atau manusia. Contoh: 日本人 (nihonjin = orang Jepang).',
    },
    {
      id: 'q-kj-5',
      questionChar: '山',
      prompt: 'Apa arti dari Kanji "山"?',
      options: ['Sungai', 'Gunung', 'Pohon', 'Hutan'],
      correctAnswerIndex: 1,
      explanation: 'Kanji "山" bermakna gunung. Kunyomi: yama, Onyomi: SAN (seperti 富士山 Fujisan).',
    },
    {
      id: 'q-kj-6',
      questionChar: '本',
      prompt: 'Apa arti dari kata "本 (hon)"?',
      options: ['Buku / Asal', 'Sekolah', 'Air', 'Guru'],
      correctAnswerIndex: 0,
      explanation: 'Kanji "本" berarti buku atau asal mula. Contoh: 本屋 (honya = toko buku).',
    },
    {
      id: 'q-kj-7',
      questionChar: '学生',
      prompt: 'Apa arti gabungan kanji "学生 (gakusei)"?',
      options: ['Guru', 'Murid / Mahasiswa', 'Dokter', 'Sekolah'],
      correctAnswerIndex: 1,
      explanation: 'Gabungan "学" (belajar) dan "生" (orang) membentuk kata "gakusei" yang berarti siswa atau mahasiswa.',
    },
    {
      id: 'q-kj-8',
      questionChar: '車',
      prompt: 'Bagaimana cara baca Kunyomi dari Kanji "車"?',
      options: ['kuruma', 'sha', 'densha', 'jidousha'],
      correctAnswerIndex: 0,
      explanation: 'Cara baca Kunyomi mandiri dari "車" adalah "kuruma" (mobil/kendaraan).',
    },
    {
      id: 'q-kj-9',
      questionChar: '何',
      prompt: 'Apa makna dari Kanji "何 (nani)"?',
      options: ['Siapa', 'Kapan', 'Apa', 'Di mana'],
      correctAnswerIndex: 2,
      explanation: 'Kanji "何" adalah kata tanya yang berarti "Apa" (nani / nan).',
    },
    {
      id: 'q-kj-10',
      questionChar: '大',
      prompt: 'Apa lawan arti dari Kanji "大 (besar)"?',
      options: ['小 (kecil)', '中 (tengah)', '上 (atas)', '下 (bawah)'],
      correctAnswerIndex: 0,
      explanation: 'Lawan kata dari "大 (oo-kii / besar)" adalah "小 (chii-sai / kecil)".',
    },
  ],
};

/**
 * Memutar suara pengucapan bahasa Jepang menggunakan Web Speech API asli.
 */
export const playJapaneseAudio = (text, onStart, onEnd) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('SpeechSynthesis API tidak didukung pada peramban ini.');
    if (onEnd) onEnd();
    return;
  }

  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.85;
    utterance.pitch = 1.0;

    if (onStart) utterance.onstart = onStart;
    if (onEnd) {
      utterance.onend = onEnd;
      utterance.onerror = onEnd;
    }

    window.speechSynthesis.speak(utterance);
  } catch (error) {
    console.error('Gagal memutar audio:', error);
    if (onEnd) onEnd();
  }
};
