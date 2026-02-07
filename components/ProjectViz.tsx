
import React from 'react';
import { ProjectNode } from '../types';

const ProjectViz: React.FC<{ type: ProjectNode['vizType'] }> = ({ type }) => {
  if (type === 'line') {
    return (
      <svg className="w-full h-12" viewBox="0 0 200 60">
        <path d="M0 50 Q25 20 50 40 T100 20 T150 45 T200 10" fill="none" stroke="#6366f1" strokeWidth="3" />
        <path d="M0 50 Q25 20 50 40 T100 20 T150 45 T200 10 V60 H0 Z" fill="url(#grad1)" opacity="0.2" />
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#6366f1' }} />
            <stop offset="100%" style={{ stopColor: 'transparent' }} />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  if (type === 'bar') {
    return (
      <div className="flex items-end space-x-2 h-12 w-full pt-4">
        {[40, 70, 50, 90, 60, 80].map((h, i) => (
          <div key={i} className="flex-1 bg-indigo-500/40 rounded-t" style={{ height: `${h}%` }}></div>
        ))}
      </div>
    );
  }
  if (type === 'scatter') {
    return (
      <div className="relative h-12 w-full overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute w-2 h-2 rounded-full bg-indigo-400/60" style={{ 
            left: `${Math.random() * 90}%`, 
            top: `${Math.random() * 80}%` 
          }}></div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent"></div>
      </div>
    );
  }
  return (
    <div className="relative h-12 w-full flex justify-center items-center">
      <div className="w-8 h-8 rounded-full border-2 border-dashed border-indigo-500 animate-spin-slow"></div>
      <div className="absolute w-4 h-4 rounded bg-indigo-500/40 rotate-45"></div>
    </div>
  );
};

export default ProjectViz;
