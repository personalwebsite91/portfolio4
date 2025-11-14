import React from 'react';

interface RoyalFrameProps {
  children: React.ReactNode;
  className?: string;
}

const RoyalFrame: React.FC<RoyalFrameProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`relative p-8 bg-[var(--bg-secondary)]/20 backdrop-blur-md border border-solid border-[var(--accent-gold)]/30 rounded-lg overflow-hidden ${className}`}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-black/20 opacity-50"></div>
       <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[var(--accent-gold)]"></div>
       <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[var(--accent-gold)]"></div>
       <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[var(--accent-gold)]"></div>
       <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[var(--accent-gold)]"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default RoyalFrame;