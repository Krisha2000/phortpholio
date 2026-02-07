
import React from 'react';
import { TIMELINE } from '../constants';

const Timeline: React.FC = () => {
  return (
    <div className="relative py-12 px-4">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-indigo-500/0 via-indigo-500/50 to-indigo-500/0"></div>
      
      <div className="space-y-12">
        {TIMELINE.map((item, idx) => (
          <div key={idx} className={`flex items-center w-full ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className="w-1/2 px-8">
              <div className={`glass-card glass p-6 rounded-2xl relative ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className={`absolute top-1/2 -translate-y-1/2 ${idx % 2 === 0 ? '-right-3' : '-left-3'} w-6 h-6 rotate-45 glass border-indigo-500/50 border-t-0 border-l-0`}></div>
                
                <span className="text-indigo-400 font-mono text-sm mb-1 block">{item.period}</span>
                <h3 className="text-xl font-bold text-white mb-2">{item.institution}</h3>
                <p className="text-gray-300 font-medium">{item.qualification}</p>
                <div className="mt-3 inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm">
                  {item.achievement}
                </div>
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.8)] border-4 border-black"></div>
            </div>
            
            <div className="w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
