// Controller Audio untuk Kuis NihongoLearn
// Memutar file audio kustom dari public: /benar_kuis.mp3 dan /salah_kuis.mp3
// Dilengkapi fallback Web Audio API jika file audio belum termuat.

const STORAGE_KEY = 'nihongolearn_quiz_sfx_muted';

class QuizAudioController {
  constructor() {
    this.ctx = null;
    this.muted = typeof window !== 'undefined' 
      ? localStorage.getItem(STORAGE_KEY) === 'true' 
      : false;

    this.correctAudio = null;
    this.wrongAudio = null;

    if (typeof window !== 'undefined') {
      try {
        this.correctAudio = new Audio('/benar_kuis.mp3');
        this.correctAudio.preload = 'auto';

        this.wrongAudio = new Audio('/salah_kuis.mp3');
        this.wrongAudio.preload = 'auto';
      } catch (e) {
        console.warn('Gagal memuat objek Audio:', e);
      }
    }
  }

  // Inisialisasi AudioContext secara lazy saat user berinteraksi
  getAudioContext() {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  isMuted() {
    return this.muted;
  }

  setMuted(value) {
    this.muted = Boolean(value);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, String(this.muted));
    }
    if (this.muted) {
      if (this.correctAudio) {
        this.correctAudio.pause();
        this.correctAudio.currentTime = 0;
      }
      if (this.wrongAudio) {
        this.wrongAudio.pause();
        this.wrongAudio.currentTime = 0;
      }
    }
    return this.muted;
  }

  toggleMute() {
    return this.setMuted(!this.muted);
  }

  // Memutar audio dari file MP3 dengan fallback sintetis
  _playFile(audioInstance, fallbackMethod) {
    if (this.muted) return;

    if (audioInstance) {
      try {
        audioInstance.currentTime = 0;
        const playPromise = audioInstance.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.warn('File audio gagal diputar, menggunakan fallback sintetis:', err);
            fallbackMethod.call(this);
          });
        }
        return;
      } catch (err) {
        console.warn('Terjadi kesalahan memutar audio:', err);
      }
    }

    fallbackMethod.call(this);
  }

  // Putar suara kuis benar (/benar_kuis.mp3)
  playCorrect() {
    this._playFile(this.correctAudio, this.playCorrectSynthesized);
  }

  // Putar suara kuis salah (/salah_kuis.mp3)
  playWrong() {
    this._playFile(this.wrongAudio, this.playWrongSynthesized);
  }

  // Fallback nada sintetis untuk jawaban benar
  playCorrectSynthesized() {
    if (this.muted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(659.25, now);
      osc1.frequency.exponentialRampToValueAtTime(880, now + 0.1);

      gain1.gain.setValueAtTime(0.001, now);
      gain1.gain.linearRampToValueAtTime(0.18, now + 0.03);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.35);

      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(880, now + 0.08);
      osc2.frequency.exponentialRampToValueAtTime(1318.51, now + 0.2);

      gain2.gain.setValueAtTime(0.001, now + 0.08);
      gain2.gain.linearRampToValueAtTime(0.14, now + 0.12);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.08);
      osc2.stop(now + 0.45);
    } catch (e) {
      console.warn('Gagal memutar audio sintetis benar:', e);
    }
  }

  // Fallback nada sintetis untuk jawaban salah
  playWrongSynthesized() {
    if (this.muted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(280, now);
      osc.frequency.exponentialRampToValueAtTime(175, now + 0.22);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.18, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.26);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.26);
    } catch (e) {
      console.warn('Gagal memutar audio sintetis salah:', e);
    }
  }

  // Fanfare merdu saat kuis selesai (C5 - E5 - G5 - C6 arpeggio)
  playFanfare() {
    if (this.muted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      const notes = [
        { freq: 523.25, time: 0.0 },
        { freq: 659.25, time: 0.1 },
        { freq: 783.99, time: 0.2 },
        { freq: 1046.50, time: 0.32 },
      ];

      notes.forEach(({ freq, time }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const startTime = now + time;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.linearRampToValueAtTime(0.18, startTime + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.4);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.4);
      });
    } catch (e) {
      console.warn('Gagal memutar fanfare kuis:', e);
    }
  }
}

export const quizAudio = new QuizAudioController();
