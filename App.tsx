
import React from 'react';
import BackgroundWaves from './components/BackgroundWaves';
import Timeline from './components/Timeline';
import Chatbot from './components/Chatbot';
import PolymathMenu from './components/PolymathMenu';
import ProjectViz from './components/ProjectViz';
import Experience from './components/Experience';
import { PROJECTS, KRISHA_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative font-sans text-gray-200 pb-20 overflow-x-hidden">
      <BackgroundWaves />

      {/* Header / Hero */}
      <header className="max-w-7xl mx-auto pt-20 px-6 mb-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-80 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-56 h-56 rounded-full overflow-hidden border-2 border-white/20 bg-gray-900 shadow-2xl">
              <img
                src={KRISHA_INFO.profileImage}
                alt={KRISHA_INFO.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            {/* Exploration Badge */}
            <div className="absolute -bottom-2 -right-2 glass px-4 py-1.5 rounded-full border border-indigo-500/50 flex items-center gap-2 animate-bounce hover:animate-none shadow-lg shadow-indigo-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-300">Active Explorer</span>
            </div>
          </div>

          <div className="text-center md:text-left flex-1">
            <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-4 tracking-tight">
              {KRISHA_INFO.name}
            </h1>
            <p className="text-xl md:text-2xl text-indigo-400 font-medium mb-6">
              {KRISHA_INFO.role}
            </p>
            <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed">
              {KRISHA_INFO.bio}
            </p>

            {/* Current Exploration Feed */}
            <div className="flex flex-wrap gap-3 mb-10 justify-center md:justify-start">
              {KRISHA_INFO.currentExploration.map((item, idx) => (
                <div key={idx} className="glass px-4 py-2 rounded-xl flex flex-col border-white/5 hover:border-indigo-500/30 transition-colors">
                  <span className="text-[8px] uppercase tracking-[0.2em] text-indigo-400 font-bold mb-0.5">{item.status}</span>
                  <span className="text-xs text-white/80">{item.topic}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href={KRISHA_INFO.linkedin} target="_blank" className="glass px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-white/10 transition-colors border-white/10">
                <i className="fa-brands fa-linkedin text-indigo-400"></i>
                <span>LinkedIn</span>
              </a>
              <a href={KRISHA_INFO.github} target="_blank" className="glass px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-white/10 transition-colors border-white/10">
                <i className="fa-brands fa-github"></i>
                <span>GitHub</span>
              </a>

            </div>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="max-w-7xl mx-auto px-6 space-y-32">

        {/* Experience Section */}
        <section id="experience">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-white mb-2">Experience</h2>
            <p className="text-gray-400">Professional journey and research contributions</p>
          </div>
          <Experience />
        </section>

        {/* Research Lab - Bento Grid */}
        <section id="projects">
          <div className="mb-12">
            <h2 className="text-4xl font-bold font-heading text-white mb-2">Research Lab</h2>
            <p className="text-gray-400">Nodes of exploration in Data Science & Machine Learning</p>
          </div>
          <div className="bento-grid">
            {PROJECTS.map((project, idx) => (
              <div key={project.id} className={`glass-card glass p-6 rounded-3xl flex flex-col h-full ${idx === 0 || idx === 6 ? 'md:col-span-2' : ''}`}>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <i className={`fa-solid ${idx % 2 === 0 ? 'fa-microscope' : 'fa-brain'}`}></i>
                    </div>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-500/20 transition-all"
                        title="View Source on GitHub"
                      >
                        <i className="fa-brands fa-github text-lg"></i>
                      </a>
                    )}
                  </div>
                  <ProjectViz type={project.vizType} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-3 hover:line-clamp-none transition-all duration-300">
                  {project.problem}
                </p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                      <span key={tech} className="text-[10px] uppercase tracking-wider font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-indigo-300 font-mono italic">Impact: {project.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Timeline */}
        <section id="academics">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-white mb-2">Academic Timeline</h2>
            <p className="text-gray-400">Building a foundation of mathematical rigor and data science</p>
          </div>
          <Timeline />
        </section>

        {/* Artistic Interests */}
        <section id="polymath" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading text-white mb-2">Beyond Logic</h2>
            <p className="text-gray-400">The rhythmic and melodic side of my journey</p>
          </div>
          <PolymathMenu />
        </section>

      </main>

      {/* Footer / Dock */}
      <footer className="mt-20 py-12 border-t border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold font-heading text-white">KS</span>
            <p className="text-gray-500 text-sm mt-1">© 2024 {KRISHA_INFO.name}. Dedicated to lifelong learning.</p>
          </div>

          <div className="flex space-x-8">
            <a href={`mailto:${KRISHA_INFO.email}`} className="text-gray-400 hover:text-white transition-colors">
              <i className="fa-solid fa-envelope text-xl"></i>
            </a>
            <a href={KRISHA_INFO.linkedin} className="text-gray-400 hover:text-white transition-colors">
              <i className="fa-brands fa-linkedin text-xl"></i>
            </a>
            <a href={KRISHA_INFO.github} className="text-gray-400 hover:text-white transition-colors">
              <i className="fa-brands fa-github text-xl"></i>
            </a>
          </div>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
};

export default App;
