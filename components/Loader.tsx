import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--bg-primary)]">
      <div className="relative w-32 h-32 animate-pulse">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-soft-gold)" />
              <stop offset="100%" stopColor="var(--accent-gold)" />
            </linearGradient>
          </defs>
          <path
            d="M50 10 L61.8 38.2 L92.4 38.2 L68.3 55.9 L79.1 84.1 L50 66.4 L20.9 84.1 L31.7 55.9 L7.6 38.2 L38.2 38.2 Z"
            fill="none"
            stroke="url(#gold-gradient)"
            strokeWidth="3"
            className="opacity-50"
          />
          <path
            d="M50 20 L58.7 42.1 L82.5 42.1 L62.9 56 L71.6 78 L50 63.9 L28.4 78 L37.1 56 L17.5 42.1 L41.3 42.1 Z"
            fill="url(#gold-gradient)"
            className="animate-spin"
            style={{ transformOrigin: '50% 50%', animationDuration: '3s' }}
          />
        </svg>
      </div>
       <p className="mt-4 text-lg font-serif tracking-widest text-[var(--accent-gold)] animate-pulse">
        Panduru Somu
      </p>
    </div>
  );
};

export default Loader;