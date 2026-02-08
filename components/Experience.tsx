import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
     return (
          <div className="relative py-12 px-4">
               {/* Central Line */}
               <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-indigo-500/0 via-indigo-500/30 to-indigo-500/0"></div>

               <div className="space-y-12">
                    {EXPERIENCE.map((item, idx) => (
                         <div key={idx} className={`flex flex-col md:flex-row items-center w-full ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>

                              {/* Content Card */}
                              <div className="w-full md:w-1/2 pl-12 md:px-12 mb-4 md:mb-0">
                                   <div className={`glass-card glass p-6 rounded-2xl relative border border-white/5 hover:border-indigo-500/30 transition-all group ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>

                                        {/* Connector Line (Desktop) */}
                                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${idx % 2 === 0 ? '-right-3' : '-left-3'} w-6 h-6 rotate-45 glass border-indigo-500/30 border-t-0 border-l-0 z-0`}></div>

                                        <span className="text-indigo-400 font-mono text-sm mb-1 block tracking-wider">{item.period}</span>
                                        <h3 className="text-2xl font-bold text-white mb-1">{item.company}</h3>
                                        <h4 className="text-lg text-indigo-200 font-medium mb-3">{item.role}</h4>
                                        <p className="text-gray-300 text-sm leading-relaxed mb-4">{item.description}</p>

                                        <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                             {item.skills.map(skill => (
                                                  <span key={skill} className="px-2 py-1 bg-white/5 rounded text-[10px] uppercase font-bold text-indigo-300 tracking-wider">
                                                       {skill}
                                                  </span>
                                             ))}
                                        </div>
                                   </div>
                              </div>

                              {/* Timeline Dot */}
                              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                                   <div className="w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)] border-2 border-black"></div>
                              </div>

                              {/* Empty Space for Balance */}
                              <div className="w-full md:w-1/2"></div>
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default Experience;
