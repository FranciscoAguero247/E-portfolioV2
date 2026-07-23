import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MissionControl = ({ logs, onHover, hoveredLog, onSelect, isMobile }) => (
  <div className="flex flex-col md:flex-row h-full mt-10 md:mt-20 gap-10">
    <div className="w-full md:w-1/3 flex flex-col gap-4">
      <h2 className="text-xs text-[#8e9294] mb-4 tracking-widest border-b border-[#8e9294]/30 w-fit">ACTIVE_OPERATIONS</h2>
      {logs.map((log) => (
        <motion.button
          key={log.id}
          onMouseEnter={() => !isMobile && onHover(log)}
          onMouseLeave={() => onHover(null)}
          onClick={() => onSelect(log)}
          className="w-full text-left cursor-pointer group flex items-center gap-4 py-2 outline-none"
          whileHover={{ x: 10 }}
        >
          <span className="text-[#8e9294] text-sm">[{log.id}]</span>
          <span className={`text-xl transition-all ${hoveredLog?.id === log.id ? 'text-white' : 'text-[#00ff41]'}`}>
            {log.title}
          </span>
        </motion.button>
      ))}
    </div>

    <div className="w-full md:w-2/3 flex items-center justify-center min-h-[250px]">
      <AnimatePresence mode="wait">
        {hoveredLog && (
          <motion.div 
            key={hoveredLog.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="relative px-4"
          >
            <img src={hoveredLog.img} className="border-2 border-[#00ff41] grayscale w-[400px] h-[225px] object-cover" alt="preview" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
);

export default MissionControl;