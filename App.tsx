
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { CHALLENGES_BY_CATEGORY } from './constants/challenges';

const App: React.FC = () => {
  const [currentChallenge, setCurrentChallenge] = useState<string>('');
  const [isSpinning, setIsSpinning] = useState<boolean>(true);

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

  const PrimaryButton: React.FC<{ onClick: () => void; children: React.ReactNode; className?: string; disabled?: boolean }> = ({ onClick, children, className = '', disabled }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed w-full ${className}`}
    >
      {children}
    </button>
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4 text-center font-sans antialiased">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
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
        </footer>
      </main>
    </div>
  );
};

export default App;
