
import React, { useState } from 'react';
import { INTERESTS } from '../constants';

const PolymathMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-[500px] flex flex-col items-center justify-center py-20">
      {/* Central Interactive Hub */}
      <div className="relative z-30">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-28 h-28 glass rounded-full flex items-center justify-center cursor-pointer transition-all duration-1000 hover:scale-110 relative ${isOpen ? 'rotate-[135deg] shadow-[0_0_60px_rgba(99,102,241,0.5)]' : 'shadow-2xl shadow-indigo-500/10'}`}
        >
          {/* Breathing Background Glow */}
          <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-3xl animate-pulse"></div>
          
          <div className="relative z-10 text-white text-4xl">
            <i className={`fa-solid ${isOpen ? 'fa-plus' : 'fa-atom'} transition-transform duration-700`}></i>
          </div>
        </button>
        
        {!isOpen && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-8 text-center">
            <p className="text-gray-400 font-bold text-lg mb-1 tracking-tight">The Polymath</p>
            <p className="text-indigo-400/60 font-mono text-[10px] uppercase tracking-[0.4em] animate-pulse">
              Click to Explore
            </p>
          </div>
        )}
      </div>

      {/* Floating Interest Nodes (No boxes, just organic icons) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {INTERESTS.map((interest, idx) => {
          // Calculate positions in a circle
          const angle = (idx / INTERESTS.length) * Math.PI * 2 - Math.PI / 2;
          const radius = isOpen ? 180 : 0;
          const tx = Math.cos(angle) * radius;
          const ty = Math.sin(angle) * radius;
          
          const animationDelay = `${idx * 0.3}s`;

          return (
            <div 
              key={idx}
              className={`absolute transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex flex-col items-center ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 scale-0'}`}
              style={{ 
                transform: `translate(${tx}px, ${ty}px)`,
                transitionDelay: isOpen ? `${idx * 80}ms` : '0ms'
              }}
            >
              {/* Organic Floating Circle Icon */}
              <div 
                className={`w-20 h-20 rounded-full bg-gradient-to-tr ${interest.color} flex flex-col items-center justify-center text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative group cursor-help transition-all duration-500 hover:scale-125 hover:-translate-y-2`}
                style={{ animation: `float ${5 + idx}s ease-in-out infinite alternate`, animationDelay }}
              >
                <div className="absolute inset-0 rounded-full bg-inherit blur-xl opacity-0 group-hover:opacity-60 transition-opacity"></div>
                <i className={`fa-solid ${interest.icon} text-3xl mb-1 transition-transform group-hover:scale-110`}></i>
                
                {/* Floating Title (Always Visible when open) */}
                <div className="absolute -bottom-8 opacity-80 transition-all duration-300 pointer-events-none whitespace-nowrap text-xs font-bold uppercase tracking-widest text-gray-300">
                  {interest.name}
                </div>

                {/* Detail Tooltip (Reveals on Hover) */}
                <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap bg-indigo-600/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-tighter text-white shadow-xl translate-y-2 group-hover:translate-y-0">
                  {interest.detail}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Decorative Orbital Ring */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 pointer-events-none ${isOpen ? 'opacity-30 scale-100' : 'opacity-0 scale-50'}`}>
        <div className="w-[380px] h-[380px] rounded-full border border-indigo-500/20 animate-spin-slow"></div>
        <div className="absolute w-[340px] h-[340px] rounded-full border border-dashed border-indigo-400/10 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
      </div>
    </div>
  );
};

export default PolymathMenu;
