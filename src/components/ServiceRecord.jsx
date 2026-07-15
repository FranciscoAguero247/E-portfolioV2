import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TerminalContact from './TerminalContact';
import { SYSTEM_CREDENTIALS, SKILL_MATRIX } from '../portfolioDta'; 

const ServiceRecord = ({ onClose }) => {
  const [showComms, setShowComms] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#05080a] flex flex-col items-center p-6 md:p-20 overflow-y-auto"
    >
      <div className="max-w-4xl mx-auto w-full pt-10 pb-20">
        
        <div className="border-b-2 border-[#00ff41] pb-4 mb-8">
          <h2 className="text-4xl md:text-6xl uppercase tracking-tighter glow-text">Service_Record</h2>
          <div className="flex justify-between text-[#8e9294] text-[10px] mt-2">
            <span>FILE_REF: FRN-247-ALPHA</span>
            <span>OFFICER: {SYSTEM_CREDENTIALS.name.toUpperCase()}</span>
          </div>
        </div>

        <div className="mb-10 w-full max-w-2xl mx-auto">
          <h3 className="text-[#00ff41] text-xs mb-6 tracking-[0.3em] uppercase underline">Tactical_Skill_Matrix</h3>
          <div className="space-y-4 md:space-y-0 md:border md:border-[#8e9294]/20">
            {SKILL_MATRIX.map((skill, index) => (
              <div key={index} className="border border-[#00ff41]/40 p-4 md:grid md:grid-cols-3 md:items-center bg-black/40">
                <span className="text-[#8e9294] text-[10px] uppercase">{skill.category}</span>
                <span className="text-white text-sm">{skill.items.join(', ')}</span>
                <span className="text-[#00ff41] text-xs md:text-right font-mono">STABLE</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="space-y-6">
            <h3 className="text-[#00ff41] text-sm tracking-widest uppercase underline">Contact_Protocols</h3>
            <div className="flex flex-col gap-3">
              <motion.a href={SYSTEM_CREDENTIALS.socials.linkedin} target="_blank" rel="noreferrer" whileHover={{ x: 5, color: "#fff" }} className="group border-l-2 border-[#8e9294]/20 pl-4 hover:border-[#00ff41] transition-colors flex flex-col">
                <span className="text-[#8e9294] text-[10px]">LINKEDIN:</span>
                <span className="text-sm font-bold tracking-tight">/in/francisco-aguero</span>
              </motion.a>

              <motion.a href={SYSTEM_CREDENTIALS.socials.github} target="_blank" rel="noreferrer" whileHover={{ x: 5, color: "#fff" }} className="group border-l-2 border-[#8e9294]/20 pl-4 hover:border-[#00ff41] transition-colors flex flex-col">
                <span className="text-[#8e9294] text-[10px]">GITHUB:</span>
                <span className="text-sm font-bold tracking-tight">/franciscoaguero247</span>
              </motion.a>

              <motion.a href={SYSTEM_CREDENTIALS.resumeUrl} download whileHover={{ x: 5, color: "#fff" }} className="group border-l-2 border-[#8e9294]/20 pl-4 hover:border-[#00ff41] transition-colors flex flex-col">
                <span className="text-[#8e9294] text-[10px]">SIGNAL_SECURE:</span>
                <span className="text-sm font-bold tracking-tight">DOWNLOAD_CLEAN_RESUME.PDF</span>
              </motion.a>
            </div>

            {!showComms && (
              <button 
                onClick={() => setShowComms(true)}
                className="mt-4 border border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41]/10 px-6 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-150 active:scale-95"
              >
                &gt;&gt; OPEN_SECURE_TRANSMISSION
              </button>
            )}
          </div>

          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {!showComms ? (
                <motion.div key="directives" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
                  <h3 className="text-[#00ff41] text-sm tracking-widest uppercase underline">Core_Directives</h3>
                  <ul className="text-[#8e9294] list-disc list-inside space-y-1">
                    <li>Eliminate System Inefficiency.</li>
                    <li>Ensure UI Resilience.</li>
                    <li>Scale Architecture.</li>
                  </ul>
                </motion.div>
              ) : (
                <motion.div key="terminal-contact" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest animate-pulse">[ SECURE CHANNEL ESTABLISHED ]</span>
                    <button onClick={() => setShowComms(false)} className="text-red-400 hover:text-red-300 text-xs tracking-wider">[ DISCONNECT ]</button>
                  </div>
                  <TerminalContact />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-[#8e9294]/20 pt-6">
          <button onClick={onClose} className="border border-[#00ff41] px-10 py-3 hover:bg-[#00ff41] hover:text-black transition-all">
            RETURN_TO_COLLECTION
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceRecord;