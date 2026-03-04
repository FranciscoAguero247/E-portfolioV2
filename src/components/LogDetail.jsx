import React from 'react';
import { motion } from 'framer-motion';

const LogDetail = ({ log, onClose }) => (
  <motion.div 
    initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
    className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-6 text-center"
  >
    <h1 className="text-3xl text-white mb-2 uppercase glow-text">{log.title}</h1>
    <p className="text-[#8e9294] mb-8 max-w-md italic">MISSION_BRIEF: {log.desc}</p>
    <div className="flex flex-col md:flex-row gap-6">
      <a href={log.link} target="_blank" rel="noreferrer" className="border border-[#00ff41] px-8 py-2 text-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-all font-bold">DEPLOY_LIVE</a>
      <a href={log.github} target="_blank" rel="noreferrer" className="border border-white px-8 py-2 text-white hover:bg-white hover:text-black transition-all font-bold">VIEW_SOURCE</a>
      <button onClick={onClose} className="border border-[#8e9294] px-8 py-2 text-[#8e9294] hover:text-white transition-all">ABORT_VIEW</button>
    </div>
  </motion.div>
);

export default LogDetail;