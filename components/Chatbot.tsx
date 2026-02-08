
import React, { useState, useRef, useEffect } from 'react';
import { getKrishaResponse } from '../services/geminiService';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "Hi! I'm Krisha-AI. Ask me anything about Krisha's work, research, or skills!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    const aiResponse = await getKrishaResponse(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse || "Sorry, I'm unsure about that." }]);
    setIsTyping(false);
  };

  /**
   * Simple helper to parse basic markdown from Gemini responses.
   * Handles: **bold**, * bullet points, and newlines.
   */
  const renderFormattedText = (text: string) => {
    return text.split('\n').map((line, i) => {
      // Handle bullet points
      const isBullet = line.trim().startsWith('* ') || line.trim().startsWith('- ');
      let processedLine = isBullet ? line.trim().substring(2) : line;

      // Handle bold (**text**) and italic (*text*)
      // We start by splitting by bold to ensure it takes precedence
      const parts = processedLine.split(/(\*\*.*?\*\*)/g);

      const formattedLine = parts.map((part, j) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={j} className="text-white font-bold">{part.slice(2, -2)}</strong>;
        }

        // Inside non-bold parts, verify for italics AND links
        const subParts = part.split(/(\*.*?\*|https?:\/\/[^\s]+)/g);

        return subParts.map((subPart, k) => {
          // Handle Italics
          if (subPart.startsWith('*') && subPart.endsWith('*') && subPart.length > 2) {
            return <em key={`${j}-${k}`} className="text-indigo-300 italic">{subPart.slice(1, -1)}</em>;
          }

          // Handle Links
          if (subPart.match(/^https?:\/\//)) {
            return (
              <a
                key={`${j}-${k}`}
                href={subPart}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 underline break-all hover:text-indigo-300 transition-colors"
              >
                {subPart}
              </a>
            );
          }

          return subPart;
        });
      });

      return (
        <div key={i} className={`${isBullet ? 'flex items-start space-x-2' : ''} ${i > 0 ? 'mt-1' : ''}`}>
          {isBullet && <span className="text-indigo-400 mt-1.5">•</span>}
          <span>{formattedLine}</span>
        </div>
      );
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="glass w-[350px] h-[500px] rounded-3xl flex flex-col shadow-2xl border-indigo-500/30 overflow-hidden">
          <div className="p-4 bg-indigo-500/20 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs text-white">
                <i className="fa-solid fa-robot"></i>
              </div>
              <span className="font-bold text-white">Krisha-AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'glass text-gray-200 rounded-bl-none'}`}>
                  {m.role === 'ai' ? renderFormattedText(m.text) : m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="glass p-3 rounded-2xl rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef}></div>
          </div>

          <div className="p-4 border-t border-white/10 flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me something..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-indigo-500/50"
            />
            <button onClick={handleSend} className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white transition-transform active:scale-95">
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-xl shadow-indigo-600/30 transition-transform hover:scale-110 active:scale-95 group"
        >
          <div className="absolute inset-0 bg-indigo-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60"></div>
          <i className="fa-solid fa-message relative z-10"></i>
        </button>
      )}
    </div>
  );
};

export default Chatbot;
