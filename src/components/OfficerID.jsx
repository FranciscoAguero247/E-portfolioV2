import React from 'react';
import { motion } from 'framer-motion';

const OfficerID = ({ onAccess, isMobile }) => (
  <motion.div
    onClick={onAccess}
    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0,255,65,0.4)" }}
    whileTap={{ scale: 0.98 }}
    transition={isMobile ? { duration: 0.2 } : { type: "spring", damping: 25 }}
    className="absolute top-4 right-4 md:top-8 md:right-8 border-2 border-[#8e9294] p-2 md:p-4 bg-black/60 backdrop-blur-md cursor-pointer z-[60] group shadow-lg"
  >
    <div className="flex gap-4 items-center">
      <div className="relative w-10 h-10 md:w-12 md:h-12 bg-[#1a1a1a] border border-[#00ff41] overflow-hidden">
        <img 
          src="/profile.jpg" 
          alt="OFFICER_PORTRAIT" 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 brightness-110 contrast-125"
        />
        <div className="absolute inset-0 group-hover:animate-[glitch_0.3s_infinite] opacity-0 group-hover:opacity-100 bg-[#00ff41]/10 pointer-events-none" />
      </div>
      <div>
        <p className="text-[8px] md:text-[10px] text-[#8e9294] tracking-tighter">ID: FRANCISCO_A_247</p>
        <p className="text-xs md:text-sm text-white group-hover:text-[#00ff41] transition-colors uppercase font-bold">
          Service Record
        </p>
      </div>
    </div>
  </motion.div>
);

export default OfficerID;