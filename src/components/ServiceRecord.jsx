import React from 'react';
import { motion } from 'framer-motion';

const ServiceRecord = ({ onClose }) => {
  const skills = [
    { cat: "FRONTEND", stack: "React, HTML, Tailwind CSS, JavaScript, Framer Motion, EJS"},
    { cat: "BACKEND", stack: "Node.js, Express, PostgreSQL / SQL"},
    { cat: "OPERATIONS", stack: "Git, Vercel, Render, API Integration"}
  ];

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
            <span>STATUS: ACTIVE_DEPLOYMENT</span>
          </div>
        </div>

        <div className="mb-10 w-full max-w-2xl mx-auto">
          <h3 className="text-[#00ff41] text-xs mb-6 tracking-[0.3em] uppercase underline">Tactical_Skill_Matrix</h3>
          <div className="space-y-4 md:space-y-0 md:border md:border-[#8e9294]/20">
            {skills.map((skill, index) => (
              <div key={index} className="border border-[#00ff41]/40 p-4 md:grid md:grid-cols-3 md:items-center bg-black/40">
                <span className="text-[#8e9294] text-[10px] uppercase">{skill.cat}</span>
                <span className="text-white text-sm">{skill.stack}</span>
                <span className="text-[#00ff41] text-xs md:text-right font-mono">STABLE</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-[#00ff41] text-sm tracking-widest uppercase underline">Contact_Protocols</h3>
            <div className="flex flex-col gap-3">
              {[
                { label: "LINKEDIN", value: "/in/francisco-aguero", url: "https://www.linkedin.com/in/francisco-aguero-39665a236/" },
                { label: "GITHUB", value: "/franciscoaguero247", url: "https://github.com/franciscoaguero247" },
                { label: "SIGNAL_SECURE", value: "DOWNLOAD_CLEAN_RESUME.PDF", url: "/Associate Software Developer-1.docx" }
              ].map((contact, idx) => (
                <motion.a key={idx} href={contact.url} target="_blank" whileHover={{ x: 5, color: "#fff" }} className="group border-l-2 border-[#8e9294]/20 pl-4 hover:border-[#00ff41] transition-colors flex flex-col">
                  <span className="text-[#8e9294] text-[10px]">{contact.label}:</span>
                  <span className="text-sm font-bold tracking-tight">{contact.value}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-[#00ff41] text-sm tracking-widest uppercase underline">Core_Directives</h3>
            <ul className="text-[#8e9294] list-disc list-inside space-y-1">
              <li>Eliminate System Inefficiency.</li>
              <li>Ensure UI Resilience.</li>
              <li>Scale Architecture.</li>
            </ul>
          </div>
        </div>

        <button onClick={onClose} className="mt-12 border border-[#00ff41] px-10 py-3 hover:bg-[#00ff41] hover:text-black transition-all">
          RETURN_TO_COLLECTION
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceRecord;