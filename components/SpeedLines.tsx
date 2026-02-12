import React from 'react';

const SpeedLines: React.FC = () => {
  // Generate random positions for speed lines
  const lines = Array.from({ length: 8 }).map((_, i) => ({
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 2}s`,
    animationDuration: `${0.5 + Math.random()}s`,
    opacity: 0.1 + Math.random() * 0.3
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {lines.map((line, i) => (
        <div
          key={i}
          className="speed-line"
          style={{
            top: line.top,
            left: '-200px', // Start off screen
            animationDelay: line.animationDelay,
            animationDuration: line.animationDuration,
            opacity: line.opacity,
            width: `${100 + Math.random() * 300}px`
          }}
        />
      ))}
    </div>
  );
};

export default SpeedLines;