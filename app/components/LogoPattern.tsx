"use client";

export default function LogoPattern({ className = '' }: { className?: string }) {
  return (
    <div className={`logo-pattern-wrapper ${className}`}>
      <svg viewBox="0 0 100 100" className="logo-svg" xmlns="http://www.w3.org/2000/svg">
        {/* Grey Ring */}
        <ellipse cx="50" cy="50" rx="45" ry="15" transform="rotate(-15 50 50)" fill="transparent" stroke="#808080" strokeWidth="2" />
        
        {/* Red Swoosh (Abstract body/motion) */}
        <path d="M40,20 Q20,50 45,70 T50,95 Q70,60 45,40 T40,20 Z" fill="var(--primary)" />
        
        {/* Abstract Head */}
        <circle cx="50" cy="25" r="8" fill="#000" />
      </svg>
      <style jsx>{`
        .logo-pattern-wrapper {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 80px;
          height: 80px;
          filter: drop-shadow(0 0 10px rgba(230, 0, 35, 0.4));
        }
        .logo-svg {
          width: 100%;
          height: 100%;
          animation: floatPattern 6s ease-in-out infinite;
        }
        @keyframes floatPattern {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
}
