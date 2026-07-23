import React from 'react';
import { motion } from 'framer-motion';

const SystemFooter = () => (
  <div className="fixed bottom-0 left-0 w-full bg-black/90 border-t border-[#8e9294]/30 p-2 font-mono text-[10px] flex justify-between items-center z-[50]">
    <div className="hidden lg:flex gap-6">
      <div className="flex gap-2">
        <span className="text-[#8e9294]">CORE:</span>
        <span className="text-[#00ff41] animate-pulse">REACT_v18.0</span>
      </div>
      <div className="flex gap-2 uppercase">
        <span className="text-[#8e9294]">Logic:</span>
        <span className="text-[#00ff41]">Terminator_Protocol</span>
      </div>
    </div>

    <div className="flex gap-6 items-center w-full md:w-auto justify-between md:justify-end px-2">
      <div className="hidden sm:flex gap-2 items-center">
        <span className="text-[#8e9294]">DATABASE:</span>
        <div className="h-2 w-20 md:w-32 bg-[#1a1a1a] rounded-full overflow-hidden border border-[#8e9294]/20">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "85%" }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="h-full bg-[#00ff41] shadow-[0_0_8px_#00ff41]"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex gap-1">
          <span className="text-[#8e9294] hidden xs:inline">STATUS:</span>
          <span className="text-[#00ff41] animate-pulse uppercase">Stable</span>
        </div>
        <div className="flex gap-1 border-l border-[#8e9294]/30 pl-4">
          <span className="text-[#8e9294]">SIGNAL:</span>
          <span className="text-[#00ff41] animate-pulse">ONLINE</span>
        </div>
      </div>
    </div>
  </div>
);

export default SystemFooter;