import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { CHALLENGES_BY_CATEGORY } from './constants/challenges';

const MUSIC_URL = 'https://cdn.pixabay.com/audio/2022/08/04/audio_2dde64f43c.mp3'; // Cheerful, royalty-free track

const App: React.FC = () => {
  const [currentChallenge, setCurrentChallenge] = useState<string>('');
  const [isSpinning, setIsSpinning] = useState<boolean>(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const allChallenges = useMemo(() => {
    return Object.values(CHALLENGES_BY_CATEGORY).flatMap(category => category.challenges);
  }, []);

  const handleNextChallenge = useCallback(() => {
    if (allChallenges.length === 0) {
      setIsSpinning(false);
      return;
    }

    setIsSpinning(true);
    setTimeout(() => {
      setCurrentChallenge(prevChallenge => {
        if (allChallenges.length <= 1) {
          return allChallenges[0] || '';
        }
        
        let newChallenge: string;
        do {
          const randomIndex = Math.floor(Math.random() * allChallenges.length);
          newChallenge = allChallenges[randomIndex];
        } while (newChallenge === prevChallenge);

        return newChallenge;
      });
      setIsSpinning(false);
    }, 500);
  }, [allChallenges]);

  useEffect(() => {
    handleNextChallenge();
  }, [handleNextChallenge]);
  
  // Effect to control music playback
  useEffect(() => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Music autoplay failed:", error);
          // If autoplay is blocked by the browser, we'll respect it.
          setIsMusicPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMusicPlaying]);

  // Effect to set initial volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // Set to a soft 20% volume
    }
  }, []);

  const toggleMusic = () => {
    setIsMusicPlaying(prev => !prev);
  };

  const PrimaryButton: React.FC<{ onClick: () => void; children: React.ReactNode; className?: string; disabled?: boolean }> = ({ onClick, children, className = '', disabled }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed w-full ${className}`}
    >
      {children}
    </button>
  );

  const SoundOnIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
    </svg>
  );
  
  const SoundOffIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l-5-5m0 5l5-5" />
    </svg>
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4 text-center font-sans antialiased relative">
      <audio ref={audioRef} src={MUSIC_URL} loop preload="auto" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      
      <button 
        onClick={toggleMusic} 
        className="absolute top-4 right-4 z-20 bg-gray-800/50 hover:bg-gray-700 text-yellow-400 p-2 rounded-full transition-colors duration-300"
        aria-label="Toggle background music"
      >
        {isMusicPlaying ? <SoundOnIcon /> : <SoundOffIcon />}
      </button>

      <main className="relative z-10 w-full max-w-2xl flex flex-col items-center">
        <header className="mb-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-3 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              Đi Nhậu Vui Vẻ
            </span>
          </h1>
          <p className="text-lg text-gray-300">
            Nâng ly nào anh em ơi! 1, 2, 3... Dô!!!
          </p>
        </header>

        <div className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl p-8 min-h-[300px] flex flex-col items-center justify-center transition-all duration-500">
          <div className="flex flex-col items-center w-full">
            <div className="flex-grow flex items-center justify-center w-full mb-8 min-h-[100px]">
              <p className={`text-2xl md:text-3xl font-medium leading-relaxed transition-opacity duration-300 ${isSpinning ? 'opacity-0' : 'opacity-100'}`}>
                {isSpinning ? 'Đang xào...' : currentChallenge}
              </p>
            </div>
            <div className="w-full max-w-xs mx-auto">
              <PrimaryButton onClick={handleNextChallenge} disabled={isSpinning}>
                {isSpinning ? '...' : 'Thử thách khác'}
              </PrimaryButton>
            </div>
          </div>
        </div>
        
        <footer className="mt-12 text-gray-500 text-sm">
          <p>Chúc các bạn có một buổi tối vui vẻ và an toàn!</p>
          <p>Uống có trách nhiệm. Đã uống rượu bia, không lái xe.</p>
          <p className="mt-4">
            Tác giả: Min AI - <a href="https://www.facebook.com/minh.kiki.1/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">Facebook</a> - Zalo 0974032400 (chuyên đào tạo AI thực chiến cho mọi lĩnh vực)
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;